const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Accountmaster = sequelize.define(
  "nt_1_accountmaster",
  {
    Ac_Code: {
      type: DataTypes.INTEGER,
    },
    Ac_Name_E: {
      type: DataTypes.STRING(255),
    },
    Ac_type: {
      type: DataTypes.STRING(1),
    },
    city_name_e: {
      type: DataTypes.STRING,
    },
    company_code: {
      type: DataTypes.INTEGER,
    },
    Locked: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Accountmaster;
