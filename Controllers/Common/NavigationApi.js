const sequelize = require('../../config/database');
const GroupMaster = require('../../models/AccountInformationModels/FinicialGroupModels')
const getSingleRecord = async(req, res) => {

    const group_Code = req.query.group_Code;
    const tableName = req.query.tableName;
    const cWhere = req.query.cWhere;
    try {
      let groups;
      console.log(cWhere)

        if(cWhere != ""){
          groups = await sequelize.query(`SELECT top(1) * FROM ${tableName} ${cWhere}`, {
            type: sequelize.QueryTypes.SELECT,
            replacements: { cWhere }, 
            
          });
        }else{
          groups = await sequelize.query(`SELECT top(1) * FROM ${tableName}`, {
            type: sequelize.QueryTypes.SELECT,
            replacements: { cWhere }, 
          });
        
       
      
      }
     
      res.json(groups);

    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports =  getSingleRecord;

