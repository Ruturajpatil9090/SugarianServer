const { Head, Detail } = require("./HeadDoDetailModels");
const {
  SugarPurchaseHead,
  SugarPurchaseDetail,
} = require("../Inword/SugarPurchase/SugarPurchaseModels");
const sequelize = require("../config/database");
const HeadDetailController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { doid } = req.query;
    try {
      const DataDoDetail = await Detail.findAll({ where: { doid } });
      const DataHead = await Head.findAll({ where: { doid } });

      const combinedData = {
        headData: DataHead,
        detailData: DataDoDetail,
      };
      res.json(combinedData);
      console.log(doid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //get single record from database
  getOne: async (req, res) => {
    const { doid } = req.query;
    try {
      const DataDoDetail = await Detail.findAll({ where: { doid } });
      res.json(DataDoDetail);
      console.log(doid);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  //insert data into table
  postData: async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData, PurcHead, PurcDetail } = req.body;
      const createdHead = await Head.create(headData, { transaction });

      const addedDetails = [];
      let createdDetails = [];
      const addPurcHead = [];
      const addPurcDetail = [];
      let createdPurchaseHead = [];
      let createdPurchaseDetail = [];

      // Check if desp_type is "DI" to decide whether to save details
      if (createdHead.desp_type === "DI") {
        for (const item of detailData) {
          if (item.rowaction === "add") {
            item.doid = createdHead.doid;
            addedDetails.push(item);
          }
        }

        let purcHeadDocNo;

        //SugarPurchaseHead
        for (const item of PurcHead) {
          item.purchaseid = createdHead.doid;
          item.PURCNO = createdHead.doc_no;
          item.doc_date = createdHead.doc_date;
          item.mill_code = createdHead.mill_code;
          item.LORRYNO = createdHead.truck_no;
          item.BROKER = createdHead.broker;
          item.NETQNTL = createdHead.quantal;
          item.GstRateCode = createdHead.GstRateCode;
          item.Company_Code = createdHead.company_code;
          item.Year_Code = createdHead.Year_Code;
          item.Branch_Code = createdHead.Branch_Code;
          item.Created_By = createdHead.Created_By;
          item.Modified_By = createdHead.Modified_By;
          item.Bill_No = createdHead.MillInvoiceNo;
          item.EWay_Bill_No = createdHead.MillEwayBill;
          item.mc = createdHead.mc;
          item.bk = createdHead.bk;
          item.mill_inv_date = createdHead.mill_inv_date;
          item.grade = createdHead.grade;
          item.TCS_Rate = createdHead.TCS_Rate;
          item.TDS_Rate = createdHead.PurchaseTDSRate;
          item.subTotal = createdHead.PurchaseRate * createdHead.quantal;

          // Assuming 'someIdentifier' is the unique identifier to match the items
          const matchingDetail = detailData.find(
            (detail) => detail.Bank_Code,
            (detail) => detail.bc
          );

          if (matchingDetail) {
            item.Ac_Code = matchingDetail.Bank_Code;
            item.ac = matchingDetail.bc;
          } else {
            item.Ac_Code = 0;
            item.ac = 0;
          }

          //We have to get the max doc_no in SugarPurchaseHead+1 and set to purcHead.doc_no
          const maxDocNo = await SugarPurchaseHead.max("doc_no", {
            where: {
              company_code: item.Company_Code,
              Year_Code: item.Year_Code,
            },
          });

          const newDocNo = maxDocNo ? maxDocNo + 1 : 1;
          item.doc_no = newDocNo;

          purcHeadDocNo = item.doc_no

          addPurcHead.push(item);
        }

        //SugarPurchaseDetail
        for (const item of PurcDetail) {
          item.purchaseid = createdHead.doid;
          item.Branch_Code = createdHead.Branch_Code;
          item.doc_no = purcHeadDocNo;
          item.item_code = createdHead.itemcode;
          item.Quantal = createdHead.quantal;
          item.packing = createdHead.packing;
          item.bags = createdHead.bags;
          item.item_Amount = createdHead.PurchaseRate * createdHead.quantal;
          item.Company_Code = createdHead.company_code;
          item.Year_Code = createdHead.Year_Code;
          item.Branch_Code = createdHead.Branch_Code;
          item.Created_By = createdHead.Created_By;
          item.Modified_By = createdHead.Modified_By;
          item.ic = createdHead.ic;
          item.Brand_Code = createdHead.brandcode;

          addPurcDetail.push(item);
        }

        //Add Details
        createdDetails = await Promise.all(
          addedDetails.map(async (item) => {
            return await Detail.create(item, { transaction });
          })
        );

        // Add PurchaseHead
        createdPurchaseHead = await Promise.all(
          addPurcHead.map(async (item) => {
            return await SugarPurchaseHead.create(item, { transaction });
          })
        );

        //Add PurchaseDetail
        createdPurchaseDetail = await Promise.all(
          addPurcDetail.map(async (item) => {
            return await SugarPurchaseDetail.create(item, { transaction });
          })
        );
      }

      await transaction.commit();

      res.status(201).json({
        message: "Data Inserted successfully",
        head: createdHead,
        addedDetails: createdDetails,
        addedPurchaseHead: createdPurchaseHead,
        addedPurchaseDetail: createdPurchaseDetail,
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
  updateHeadData: async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      const { doid } = req.query;
      const updatedHead = await Head.update(
        headData,
        {
          where: {
            doid,
          },
        },
        { transaction: transaction }
      );

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        if (item.rowaction === "add") {
          item.doid = doid;
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.dodetailid);
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
        const dodetailid = item.dodetailid;
        delete item.dodetailid;
        await Detail.update(item, {
          where: { dodetailid: dodetailid },
          transaction: transaction,
        });
      }

      // Delete details
      await Detail.destroy({
        where: { dodetailid: deletedDetails },
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

  // //delete the headDetail record all
  // deleteHeadDetail: async (req, res) => {
  //   try {
  //     const { headId } = req.body;
  //     if (!headId) {
  //       return res.status(400).json({
  //         error: "Bad request",
  //         message: "Head ID is required for deletion.",
  //       });
  //     }
  //     const deletedHeadCount = await Head.destroy({
  //       where: { id: headId },
  //     });

  //     if (deletedHeadCount === 0) {
  //       return res
  //         .status(404)
  //         .json({ error: "Not found", message: "Head not found." });
  //     }

  //     // Delete associated details
  //     await Detail.destroy({ where: { headId } });

  //     res.status(200).json({
  //       message: "Head and details records deleted successfully",
  //       deletedHeadId: headId,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res
  //       .status(500)
  //       .json({ error: "Internal server error", message: error.message });
  //     console.log(error);
  //   }
  // },
};

module.exports = HeadDetailController;
