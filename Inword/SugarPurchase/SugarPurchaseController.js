const { SugarPurchaseHead, SugarPurchaseDetail } = require("./SugarPurchaseModels");
const sequelize = require("../../config/database");
const SugarPurchaseController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { purchaseid } = req.query;
    try {
      const DataDoDetail = await SugarPurchaseDetail.findAll({ where: { purchaseid } });
      const DataHead = await SugarPurchaseHead.findAll({ where: { purchaseid } });

      const combinedData = {
        headData: DataHead,
        detailData: DataDoDetail,
      };
      res.json(combinedData);
      console.log(purchaseid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //get single record from database
  getOne: async (req, res) => {
    const { purchaseid } = req.query;
    try {
      const HeadData = await SugarPurchaseHead.findAll({ where: { purchaseid } });
      res.json(HeadData);
      console.log(purchaseid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },


  //insert data into table
  InsertSugarPurchase: async (req, res) => {

    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      
      let maxDocNo = await SugarPurchaseHead.max('doc_no') || 0;
      const newDocNo = maxDocNo + 1;

      headData.doc_no = newDocNo;
      detailData.forEach(item => {
          item.doc_no = newDocNo;
      });
      
      const createdHead = await SugarPurchaseHead.create(headData, { transaction });

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];
      let createdDetails = [];

        for (const item of detailData) {
          if (item.rowaction === "add") {
            item.purchaseid = createdHead.purchaseid;
            addedDetails.push(item);
          } else if (item.rowaction === "update") {
            updatedDetails.push(item);
          } else if (item.rowaction === "delete") {
            deletedDetails.push(item.purchaseid);
          }
        }

        //Add Details
        createdDetails = await Promise.all(
          addedDetails.map(async (item) => {
            return await SugarPurchaseDetail.create(item, { transaction });
          })
        );

        //Update Details
        for (const item of updatedDetails) {
          await SugarPurchaseDetail.update(item, {
            where: { purchaseid: item.purchaseid },
            transaction,
          });
        }

        // Delete details
        await SugarPurchaseDetail.destroy({
          where: { purchaseid: deletedDetails },
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
      const { purchaseid } = req.query;
      const updatedHead = await SugarPurchaseHead.update(
        headData,
        {
          where: {
            purchaseid,
          },
        },
        { transaction: transaction }
      );

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        if (item.rowaction === "add") {
          item.purchaseid = purchaseid;
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.purchasedetailid);
        }
      }
      //Add Details
      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => {
          return await Detail.create(item, { transaction: transaction });
        })
      );
      //Update Details
      for (const item of updatedDetails) {
        const purchasedetailid = item.purchasedetailid;
        delete item.purchasedetailid;
        await SugarPurchaseDetail.update(item, {
          where: { purchasedetailid: purchasedetailid },
          transaction: transaction,
        });
      }

      // Delete details
      await SugarPurchaseDetail.destroy({
        where: { purchasedetailid: deletedDetails },
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

module.exports = SugarPurchaseController;