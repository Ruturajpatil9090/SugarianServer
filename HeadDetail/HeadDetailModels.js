const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Head = sequelize.define('Head', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true, 
});

const Detail = sequelize.define('Detail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  headId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false, 
  freezeTableName: true, 
});

// Define the association
// Head.hasMany(Detail, { foreignKey: 'headId' });
Detail.belongsTo(Head, { foreignKey: 'headId' });

module.exports = { Head, Detail };
