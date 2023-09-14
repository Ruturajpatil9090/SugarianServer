const { Head, Detail } = require("./HeadDoDetailModels");
const sequelize = require("../config/database");
const HeadDetailController = {
//get data into both the tables in head and detail
  getCombinedData: async (req, res) => {
    const { doid } = req.query;
    try {
        const DataDoDetail = await Detail.findAll({ where: { doid } });
        const DataDeliveryOrder = await Head.findAll({ where: { doid } });

        const combinedData = {
            headData: DataDeliveryOrder,
            detailData: DataDoDetail,
        };

        res.json(combinedData);
        console.log(doid);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', error });
        console.log(error);
    }
},

  //get single record from database
      getOne: async (req, res) => {
        const { doid } = req.query;
        try {
            const DataDoDetail = await Detail.findAll({ where: { doid } });
            res.json(DataDoDetail);
            console.log(doid)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', error });
            console.log(error)
        }
    },

    //insert data into table
    postData: async (req, res) => {
      const transaction = await sequelize.transaction();
    
      try {
        const { headData, detailData } = req.body;
        const createdHead = await Head.create(headData, { transaction });
    
        const addedDetails = [];
        const updatedDetails = [];
        const deletedDetails = [];
        let createdDetails = []; 
    
        // Check if desp_type is "DI" to decide whether to save details
        if (createdHead.desp_type === "DI") {
          for (const item of detailData) {
            if (item.rowaction === "add") {
              item.doid = createdHead.doid;
              addedDetails.push(item);
            } else if (item.rowaction === "update") {
              updatedDetails.push(item);
            } else if (item.rowaction === "delete") {
              deletedDetails.push(item.doid);
            }
          }
    
          //Add Details
          createdDetails = await Promise.all(
            addedDetails.map(async (item) => {
              return await Detail.create(item, { transaction });
            })
          );
    
          //Update Details
          for (const item of updatedDetails) {
            await Detail.update(item, {
              where: { doid: item.doid },
              transaction,
            });
          }
    
          // Delete details
          await Detail.destroy({
            where: { doid: deletedDetails },
            transaction,
          });
        }
    
       
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
  updateHeadData: async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
      const { headData, detailData } = req.body;
      const {doid}  =req.query;
      const updatedHead= await Head.update(headData, {
        where:{
          doid
        }
      },{transaction:transaction});

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
        await Detail.update(item, {
          where: { dodetailid: item.dodetailid }, 
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

  //delete the headDetail record all
  deleteHeadDetail: async (req, res) => {
    try {
      const { headId } = req.body;
      if (!headId) {
        return res.status(400).json({
          error: "Bad request",
          message: "Head ID is required for deletion.",
        });
      }
      const deletedHeadCount = await Head.destroy({
        where: { id: headId },
      });

      if (deletedHeadCount === 0) {
        return res
          .status(404)
          .json({ error: "Not found", message: "Head not found." });
      }

      // Delete associated details
      await Detail.destroy({ where: { headId } });

      res.status(200).json({
        message: "Head and details records deleted successfully",
        deletedHeadId: headId,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
      console.log(error);
    }
  },
};

module.exports = HeadDetailController;
