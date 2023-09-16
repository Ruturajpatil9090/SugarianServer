const { SugarSalesHead, SugarSalesDetails} = require("./SugarSalesModels");
const sequelize = require("../config/database");
const SugarSalesController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { saleid } = req.query;
    try {
      const DataugarSalesDetails = await SugarSalesDetails.findAll({ where: { saleid } });
      const DataSugarSalesHead= await SugarSalesHead.findAll({ where: { saleid } });

      const combinedData = {
        headData: DataSugarSalesHead,
        detailData: DataugarSalesDetails,
      };
      res.json(combinedData);
      console.log(saleid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //get single record from database
  getOne: async (req, res) => {
    const { saleid } = req.query;
    try {
      const DataSugarSalesHead = await SugarSalesHead.findAll({ where: { saleid } });
      res.json(DataSugarSalesHead);
      console.log(saleid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },


  //insert data into table
  InsertSugarSales: async (req, res) => {

    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      
      const createdHead = await SugarSalesHead.create(headData, { transaction });

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];
      let createdDetails = [];

        for (const item of detailData) {
          if (item.rowaction === "add") {
            item.saleid = createdHead.saleid;
            addedDetails.push(item);
          } else if (item.rowaction === "update") {
            updatedDetails.push(item);
          } else if (item.rowaction === "delete") {
            deletedDetails.push(item.saledetailid);
          }
        }

        //Add Details
        createdDetails = await Promise.all(
          addedDetails.map(async (item) => {
            return await SugarSalesDetails.create(item, { transaction });
          })
        );

        //Update Details
        for (const item of updatedDetails) {
            const saledetailid = item.saledetailid;
            delete item.saledetailid;
            await SugarSalesDetails.update(item, {
              where: { saledetailid: saledetailid },
              transaction: transaction,
            });
        }

        // Delete details
        await SugarSalesDetails.destroy({
          where: { saledetailid: deletedDetails },
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
      const { saleid } = req.query;
      const updatedHead = await SugarSalesHead.update(
        headData,
        {
          where: {
            saleid,
          },
        },
        { transaction: transaction }
      );

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        if (item.rowaction === "add") {
          item.saleid = saleid;
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.saledetailid);
        }
      }
      //Add Details
      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => {
          return await SugarSalesDetails.create(item, { transaction: transaction });
        })
      );
      //Update Details
      for (const item of updatedDetails) {
        const saledetailid = item.saledetailid;
        delete item.saledetailid;
        await SugarSalesDetails.update(item, {
          where: { saledetailid: saledetailid },
          transaction: transaction,
        });
      }

      // Delete details
      await SugarSalesDetails.destroy({
        where: { saledetailid: deletedDetails },
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

module.exports = SugarSalesController;