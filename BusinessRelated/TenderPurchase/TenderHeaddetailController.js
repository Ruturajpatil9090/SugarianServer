const { TenderHead, TenderDetails } = require("./TenderHeadDetailModels");
const sequelize = require("../../config/database");
const TenderHeadDetailController = {
  //get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
   
    try {
      const DataTenderDetails = await TenderDetails.findAll();
      const DataTenderHead = await TenderHead.findAll();

      const combinedData = {
        headData: DataTenderHead,
        detailData: DataTenderDetails,
      };
      res.json(combinedData);
    } catch (error) {
      res.status(500).json({ error: "Internal server error", error });
      console.log(error);
    }
  },

  getUtilityData: async (req, res) => {
        try {
          const groups = await sequelize.query('SELECT ROW_NUMBER() OVER ( order by Tender_No desc) AS RowNumber,dbo.nt_1_tender.Tender_No, CONVERT(varchar(10), dbo.nt_1_tender.Tender_Date, 103) AS Tender_Date, millto.Short_Name AS millshortname, dbo.nt_1_tender.Quantal, dbo.nt_1_tender.Grade, dbo.nt_1_tender.Mill_Rate, paymentto.Ac_Name_E AS paymenttoname, tenderdo.Ac_Name_E AS tenderdoname, dbo.nt_1_tender.season, broker.Ac_Name_E AS brokershortname, CONVERT(varchar(10), dbo.nt_1_tender.Lifting_Date, 103) AS Lifting_Date, dbo.nt_1_tender.tenderid FROM         dbo.nt_1_tender LEFT OUTER JOIN dbo.nt_1_accountmaster AS tenderdo ON dbo.nt_1_tender.td = tenderdo.accoid LEFT OUTER JOIN dbo.nt_1_accountmaster AS broker ON dbo.nt_1_tender.bk = broker.accoid LEFT OUTER JOIN dbo.nt_1_accountmaster AS paymentto ON dbo.nt_1_tender.pt = paymentto.accoid LEFT OUTER JOIN dbo.nt_1_accountmaster AS millto ON dbo.nt_1_tender.mc = millto.accoid where    dbo.nt_1_tender.Company_Code=1 and  dbo.nt_1_tender.Year_Code=3 order by Tender_no desc ', {
            type: sequelize.QueryTypes.SELECT,
          });
          res.json(groups);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
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