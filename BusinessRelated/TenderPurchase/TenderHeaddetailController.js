const { TenderHead, TenderDetails } = require("./TenderHeadDetailModels");
const sequelize = require("../../config/database");
const TenderHeadDetailController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { tenderid } = req.query;
    try {
      const DataTenderDetails = await TenderDetails.findAll({ where: { tenderid } });
      const DataTenderHead = await TenderHead.findAll({ where: { tenderid } });

      const combinedData = {
        headData: DataTenderHead,
        detailData: DataTenderDetails,
      };
      res.json(combinedData);
      console.log(tenderid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //get single record from database
  getOne: async (req, res) => {
    const { tenderid } = req.query;
    try {
      const DataTenderHead = await TenderHead.findAll({ where: { tenderid } });
      res.json(DataTenderHead);
      console.log(tenderid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },


  //insert data into table
  InsertTenderHeadDetail: async (req, res) => {

    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      
      const createdHead = await TenderHead.create(headData, { transaction });

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];
      let createdDetails = [];

        for (const item of detailData) {
          if (item.rowaction === "add") {
            item.tenderid = createdHead.tenderid;
            addedDetails.push(item);
          } else if (item.rowaction === "update") {
            updatedDetails.push(item);
          } else if (item.rowaction === "delete") {
            deletedDetails.push(item.tenderdetailid);
          }
        }

        //Add Details
        createdDetails = await Promise.all(
          addedDetails.map(async (item) => {
            return await TenderDetails.create(item, { transaction });
          })
        );

        //Update Details
        for (const item of updatedDetails) {
          await TenderDetails.update(item, {
            where: { tenderdetailid: item.tenderdetailid },
            transaction,
          });
        }

        // Delete details
        await TenderDetails.destroy({
          where: { tenderdetailid: deletedDetails },
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
      const { tenderid } = req.query;
      const updatedHead = await TenderHead.update(
        headData,
        {
          where: {
            tenderid,
          },
        },
        { transaction: transaction }
      );

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        if (item.rowaction === "add") {
          item.tenderid = tenderid;
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.tenderdetailid);
        }
      }
      //Add Details
      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => {
          return await TenderDetails.create(item, { transaction: transaction });
        })
      );
      //Update Details
      for (const item of updatedDetails) {
        const tenderdetailid = item.tenderdetailid;
        delete item.tenderdetailid;
        await TenderDetails.update(item, {
          where: { tenderdetailid: tenderdetailid },
          transaction: transaction,
        });
      }

      // Delete details
      await TenderDetails.destroy({
        where: { tenderdetailid: deletedDetails },
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

module.exports = TenderHeadDetailController;