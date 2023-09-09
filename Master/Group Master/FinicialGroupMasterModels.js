const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const GroupMaster = sequelize.define('nt_1_bsgroupmaster1', {
  group_Code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  group_Name_E: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  group_Name_R: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  group_Type: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  group_Summary: {
    type: DataTypes.STRING,
    allowNull: false,
},
  group_Order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Company_Code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Created_By: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Modified_By: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bsid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, {
  
  tableName: 'nt_1_bsgroupmaster1', 
  timestamps: false, 

});

GroupMaster.removeAttribute('id');
GroupMaster.primaryKey = 'bsid';

module.exports = GroupMaster;
