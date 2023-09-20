const { UtrHead, UtrDetails } = require("./UtrHeadDetailModels");
const sequelize = require("../../config/database");
const UtrHeadDetailController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { utrid } = req.query;
    try {
      const DataUtrDetails = await UtrDetails.findAll({ where: { utrid } });
      const DataUtrHead = await UtrHead.findAll({ where: { utrid } });

      const combinedData = {
        headData: DataUtrHead,
        detailData: DataUtrDetails,
      };
      res.json(combinedData);
      console.log(utrid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //get single record from database
  getOne: async (req, res) => {
    const { utrid } = req.query;
    try {
      const DataUtrHead = await UtrHead.findAll({ where: { utrid } });
      res.json(DataUtrHead);
      console.log(utrid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },


  //insert data into table
  InsertUtrHeadDetail: async (req, res) => {

    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      
      const createdHead = await UtrHead.create(headData, { transaction });

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];
      let createdDetails = [];

        for (const item of detailData) {
          if (item.rowaction === "add") {
            item.utrid = createdHead.utrid;
            addedDetails.push(item);
          } else if (item.rowaction === "update") {
            updatedDetails.push(item);
          } else if (item.rowaction === "delete") {
            deletedDetails.push(item.utrdetailid);
          }
        }

        //Add Details
        createdDetails = await Promise.all(
          addedDetails.map(async (item) => {
            return await UtrDetails.create(item, { transaction });
          })
        );

        //Update Details
        for (const item of updatedDetails) {
          await UtrDetails.update(item, {
            where: { utrdetailid: item.utrdetailid },
            transaction,
          });
        }

        // Delete details
        await UtrDetails.destroy({
          where: { utrdetailid: deletedDetails },
          transaction,
        });
      

      await transaction.commit();

      res.status(201).json({
        message: "Data Inserted successfully",
        head: createdHead,
        addedDetails: createdDetails,
        updatedDetails,
        deletedDetailIds: deletedDetails,
      });
    } catch (error) {
      console.error(error);
      await transaction.rollback();

      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  },



  //Update the data
  UpdateSugarPurchase: async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      const { utrid } = req.query;
      const updatedHead = await UtrHead.update(
        headData,
        {
          where: {
            utrid,
          },
        },
        { transaction: transaction }
      );

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        if (item.rowaction === "add") {
          item.utrid = utrid;
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.utrdetailid);
        }
      }
      //Add Details
      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => {
          return await UtrDetails.create(item, { transaction: transaction });
        })
      );
      //Update Details
      for (const item of updatedDetails) {
        const utrdetailid = item.utrdetailid;
        delete item.utrdetailid;
        await UtrDetails.update(item, {
          where: { utrdetailid: utrdetailid },
          transaction: transaction,
        });
      }

      // Delete details
      await UtrDetails.destroy({
        where: { utrdetailid: deletedDetails },
        transaction: transaction,
      });

      // Commit the transaction if all operations are successful
      await transaction.commit();

      res.status(201).json({
        message: "Data Inserted successfully",
        head: updatedHead,
        addedDetails: createdDetails,
        updatedDetails: updatedDetails,
        deletedDetailIds: deletedDetails,
      });
    } catch (error) {
      console.error(error);

      // Roll back the transaction if any operation fails
      await transaction.rollback();

      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  },

};

module.exports = UtrHeadDetailController;