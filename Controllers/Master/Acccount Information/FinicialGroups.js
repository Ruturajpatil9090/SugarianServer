
const GroupMaster = require('../../../models/AccountInformationModels/FinicialGroupModels');
const { Op } = require("sequelize");
const groupmasterController = {

//get the all the records from database.
getAllGroups: async (req, res) => {
    try {
      const groups = await GroupMaster.findAll();
      res.json(groups);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error',error });
    }
  },

//get data by one or multiple conditions
  getGroupById: async (req, res) => {
    const {group_Code,Company_Code} = req.query;
    console.log(group_Code,Company_Code)
    try {
      const group = await GroupMaster.findAll({
        where: {
          [Op.and]: [
            { group_Code },
            { Company_Code },
           
          ]
        }
      });
  
      if (!group) {
        return res.status(404).json({ error: 'No matching record found' });
      }
  
      res.json(group);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
//Insert or post data into database.
  createGroup: async (req, res) => {
    const {
      group_Code,
      group_Name_E,
      group_Name_R,
      group_Type,
      group_Summary,
      group_Order,
      Company_Code,
      Created_By,
      Modified_By
     
    } = req.body;

    try {
      const groups = await GroupMaster.create({
        group_Code,
        group_Name_E,
        group_Name_R,
        group_Type,
        group_Summary,
        group_Order,
        Company_Code,
        Created_By,
        Modified_By
        
      });
      res.status(201).json({ message: 'Group created successfully', groups});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error',error });
    }
  },

//update record in database by group_Code
updateGroup: async (req, res) => {
  const {group_Code} = req.query; 
  const {
    group_Name_E,
    group_Name_R,
    group_Type,
    group_Summary,
    group_Order,
    Company_Code,
    Created_By,
    Modified_By
  } = req.body;
  console.log(req.body)
  console.log(group_Code)
  try {
    const updatedGroup = await GroupMaster.update(
      {      
        group_Code,  
        group_Name_E,
        group_Name_R,
        group_Type,
        group_Summary,
        group_Order,
        Company_Code,
        Created_By,
        Modified_By
      },
      {
        where:{ group_Code},
      }
    );
console.log(updatedGroup)
    if (updatedGroup[0] === 0) {
      return res.status(404).json({ error: 'Group not found' });
    }

    res.json({ message: 'Group updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
},

//delete record from database by group_Code
  deleteGroup: async (req, res) => {
    const {group_Code} = req.query;

    try {
      const deletedRows = await GroupMaster.destroy({
        where: { group_Code },
      });

      if (deletedRows === 0) {
        return res.status(404).json({ error: 'Group not found' });
      }

      res.json({ message: 'Group deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = groupmasterController;
