const { Head, Detail } = require("./HeadDoDetailModels");
const sequelize = require("../config/database");
const HeadDetailController = {

  postData: async (req, res) => {
    let transaction;
    try {
      const { headData, detailData } = req.body;
  
      // Start a Sequelize transaction
      transaction = await sequelize.transaction();
  
      // Create the head record within the transaction
      const createdHead = await Head.create(headData, { transaction });
  
      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];
  
      for (const item of detailData) {
        item.doidData = createdHead.doid;
  
        if (item.rowaction === 'add') {
          addedDetails.push(item);
        } else if (item.rowaction === 'update') {
          updatedDetails.push(item);
        } else if (item.rowaction === 'delete') {
          deletedDetails.push(item.doid);
        }
      }
  
      // Insert new details within the transaction
      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => await Detail.create(item, { transaction }))
      );
  
      for (const item of updatedDetails) {
        const { doidData, ...updateData } = item; // Exclude headId from updateData
        await Detail.update(updateData, { where: { doid: item.doid } });
      }
  
      // Delete details within the transaction
      await Detail.destroy({ where: { doid: deletedDetails }, transaction });
  
      // Commit the transaction if all operations are successful
      await transaction.commit();
  
      res.status(201).json({
        message: 'Data Inserted successfully',
        head: createdHead,
        addedDetails: createdDetails,
        updatedDetails: updatedDetails,
        deletedDetailIds: deletedDetails,
      });
    } catch (error) {
      console.error(error);
  
      // Roll back the transaction if any operation fails
      if (transaction) {
        await transaction.rollback();
      }
  
      res.status(500).json({ error: 'Internal server error', message: error.message });
    }
  },
  
  
  
  // insertHeadDetail: async (req, res) => {
  //   try {
  //     const { headData, detailData } = req.body;
  //     const createdHead = await Head.create(headData);
  //     const addedDetails = [];
  //     const updatedDetails = [];
  //     const deletedDetails = [];

  //     for (const item of detailData) {
  //       item.headId = createdHead.id;

  //       if (item.rowaction === 'add') {
  //         addedDetails.push(item);
  //       } else if (item.rowaction === 'update') {
  //         updatedDetails.push(item);
  //       } else if (item.rowaction === 'delete') {
  //         deletedDetails.push(item.id);
  //       }
  //     }

  //     // Insert new details
  //     const createdDetails = await Promise.all(
  //       addedDetails.map(async (item) => await Detail.create(item))
  //     );

  //     // Update existing details
  //     for (const item of updatedDetails) {
  //       await Detail.update(item, { where: { id: item.id } });
  //     }

  //     // Delete details
  //     await Detail.destroy({ where: { id: deletedDetails } });

  //     res.status(201).json({
  //       message: 'Data Inserted successfully',
  //       head: createdHead,
  //       addedDetails: createdDetails,
  //       updatedDetails: updatedDetails,
  //       deletedDetailIds: deletedDetails,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal server error', message: error.message });
  //     console.log(error);
  //   }
  // },

  updateHeadDetail: async (req, res) => {
    try {
      const { headData, detailData } = req.body;

      if (!headData.id) {
        return res.status(400).json({
          error: "Bad request",
          message: "Head ID is required for updating.",
        });
      }

      const updatedHead = await Head.update(headData, {
        where: { id: headData.id },
      });

      const addedDetails = [];
      const updatedDetails = [];
      const deletedDetails = [];

      for (const item of detailData) {
        item.headId = headData.id;

        if (item.rowaction === "add") {
          addedDetails.push(item);
        } else if (item.rowaction === "update") {
          updatedDetails.push(item);
        } else if (item.rowaction === "delete") {
          deletedDetails.push(item.id);
        }
      }

      const createdDetails = await Promise.all(
        addedDetails.map(async (item) => await Detail.create(item))
      );

      for (const item of updatedDetails) {
        await Detail.update(item, { where: { id: item.id } });
      }

      await Detail.destroy({ where: { id: deletedDetails } });

      res.status(200).json({
        message: "Data Updated successfully",
        head: updatedHead,
        addedDetails: createdDetails,
        updatedDetails: updatedDetails,
        deletedDetailIds: deletedDetails,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
      console.log(error);
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