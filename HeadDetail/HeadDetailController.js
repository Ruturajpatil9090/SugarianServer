const { Head, Detail } = require('../HeadDetail/HeadDetailModels');

const HeadDetailController = {
  insertHeadDetail: async (req, res) => {
    try {
      const { headData, detailData } = req.body;
      const createdHead = await Head.create(headData);
      detailData.headId = createdHead.id;

      const createdDetails = await Promise.all(
        detailData.map(async (item) => {
          item.headId = createdHead.id;
          return await Detail.create(item);
        })
      );

      res.status(201).json({ message: 'Data Inserted successfully', head: createdHead, detail: createdDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error', message: error.message });
    }
  },
};

module.exports = HeadDetailController;

