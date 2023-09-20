const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const UtrHead = sequelize.define(
  "nt_1_utr",
  {
    doc_no: {
      type: DataTypes.INTEGER,
    },
    doc_date: {
      type: DataTypes.DATE,
    },
    bank_ac: {
      type: DataTypes.INTEGER,
    },
    mill_code: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    utr_no: {
      type: DataTypes.STRING(500),
    },
    narration_header: {
      type: DataTypes.STRING(1073741823),
    },
    narration_footer: {
      type: DataTypes.STRING(1073741823),
    },
    Company_Code: {
      type: DataTypes.INTEGER,
    },
    Year_Code: {
      type: DataTypes.INTEGER,
    },
    Branch_Code: {
      type: DataTypes.INTEGER,
    },
    Created_By: {
      type: DataTypes.STRING(255),
    },
    Modified_By: {
      type: DataTypes.STRING(255),
    },
    IsSave: {
      type: DataTypes.INTEGER,
    },
    Lott_No: {
      type: DataTypes.INTEGER,
    },
    utrid: {
      type: DataTypes.INTEGER,
    },
    ba: {
      type: DataTypes.INTEGER,
    },
    mc: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const UtrDetails = sequelize.define(
  "nt_1_utrdetail",
  {
    Detail_Id: {
      type: DataTypes.INTEGER,
    },
    doc_no: {
      type: DataTypes.INTEGER,
    },
    lot_no: {
      type: DataTypes.INTEGER,
    },
    grade_no: {
      type: DataTypes.STRING(50),
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    Company_Code: {
      type: DataTypes.INTEGER,
    },
    Year_Code: {
      type: DataTypes.INTEGER,
    },
    lotCompany_Code: {
      type: DataTypes.INTEGER,
    },
    lotYear_Code: {
      type: DataTypes.INTEGER,
    },
    Adjusted_Amt: {
      type: DataTypes.DECIMAL,
    },
    LTNo: {
      type: DataTypes.INTEGER,
    },
    utrdetailid: {
      type: DataTypes.INTEGER,
    },
    utrid: {
      type: DataTypes.INTEGER,
    },
    ln: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

UtrDetails.belongsTo(UtrHead, { foreignKey: "utrid" });

UtrDetails.removeAttribute("id");
UtrHead.removeAttribute("id");

module.exports = { UtrHead, UtrDetails };
