// const Accountmaster = require("./AccountMasterHelperModels");
const sequelize = require("../config/database");
const { Op, QueryTypes } = require('sequelize');

const AccountMasterHelperController = {
  //get data into both the tables in head and detail
  getData: async (req, res) => {
    const { Ac_type } = req.query;
    let transaction;
    try {
      transaction = await sequelize.transaction();

      const groups = await sequelize.query(`
        SELECT dbo.nt_1_accountmaster.Ac_Code, dbo.nt_1_accountmaster.Ac_Name_E, dbo.nt_1_accountmaster.Ac_type, dbo.nt_1_citymaster.city_name_e as cityname, dbo.nt_1_accountmaster.Address_E  
        FROM dbo.nt_1_accountmaster 
        LEFT OUTER JOIN dbo.nt_1_citymaster ON dbo.nt_1_accountmaster.City_Code = dbo.nt_1_citymaster.city_code AND dbo.nt_1_accountmaster.company_code = dbo.nt_1_citymaster.company_code 
        WHERE Locked=0 AND dbo.nt_1_accountmaster.Ac_type='${Ac_type}' AND dbo.nt_1_accountmaster.Company_Code=1  
        ORDER BY Ac_Name_E DESC`, {
        type: QueryTypes.SELECT,
        transaction
      });
      await transaction.commit();
      res.json(groups);
    } catch (error) {
      if (transaction) await transaction.rollback();

      console.error("Error fetching data:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getDataAll: async (req, res) => {
    let transaction;
    try {
   
      transaction = await sequelize.transaction();

      const groups = await sequelize.query(`
        SELECT dbo.nt_1_accountmaster.Ac_Code, dbo.nt_1_accountmaster.Ac_Name_E, dbo.nt_1_accountmaster.Ac_type, dbo.nt_1_citymaster.city_name_e as cityname, dbo.nt_1_accountmaster.Address_E  
        FROM dbo.nt_1_accountmaster 
        LEFT OUTER JOIN dbo.nt_1_citymaster ON dbo.nt_1_accountmaster.City_Code = dbo.nt_1_citymaster.city_code AND dbo.nt_1_accountmaster.company_code = dbo.nt_1_citymaster.company_code 
        WHERE Locked=0 AND dbo.nt_1_accountmaster.Company_Code=1  
        ORDER BY Ac_Name_E DESC`, {
        type: QueryTypes.SELECT,
        transaction
      });

      await transaction.commit();

      res.json(groups);
    } catch (error) {

      if (transaction) await transaction.rollback();

      console.error("Error fetching data:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

}
module.exports = AccountMasterHelperController