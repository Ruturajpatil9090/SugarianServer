const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const SugarPurchaseHead = sequelize.define(
  "nt_1_SugarPurchase",
  {
    doc_no: {
      type: DataTypes.INTEGER,
    },
    Tran_Type: {
      type: DataTypes.STRING(2),
    },
    PURCNO: {
      type: DataTypes.INTEGER,
    },
    doc_date: {
      type: DataTypes.DATE,
    },
    Ac_Code: {
      type: DataTypes.INTEGER,
    },
    Unit_Code: {
      type: DataTypes.INTEGER,
    },
    mill_code: {
      type: DataTypes.INTEGER,
    },
    FROM_STATION: {
      type: DataTypes.STRING(255),
    },
    TO_STATION: {
      type: DataTypes.STRING(255),
    },
    LORRYNO: {
      type: DataTypes.STRING(50),
    },
    BROKER: {
      type: DataTypes.INTEGER,
    },
    wearhouse: {
      type: DataTypes.STRING(1073741823),
    },
    subTotal: {
      type: DataTypes.DECIMAL,
    },
    LESS_FRT_RATE: {
      type: DataTypes.DECIMAL,
    },
    freight: {
      type: DataTypes.DECIMAL,
    },
    cash_advance: {
      type: DataTypes.DECIMAL,
    },
    bank_commission: {
      type: DataTypes.DECIMAL,
    },
    OTHER_AMT: {
      type: DataTypes.DECIMAL,
    },
    Bill_Amount: {
      type: DataTypes.DECIMAL,
    },
    Due_Days: {
      type: DataTypes.INTEGER,
    },
    NETQNTL: {
      type: DataTypes.DECIMAL,
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
    Bill_No: {
      type: DataTypes.STRING(50),
    },
    GstRateCode: {
      type: DataTypes.INTEGER,
    },
    CGSTRate: {
      type: DataTypes.DECIMAL,
    },
    CGSTAmount: {
      type: DataTypes.DECIMAL,
    },
    SGSTRate: {
      type: DataTypes.DECIMAL,
    },
    SGSTAmount: {
      type: DataTypes.DECIMAL,
    },
    IGSTRate: {
      type: DataTypes.DECIMAL,
    },
    IGSTAmount: {
      type: DataTypes.DECIMAL,
    },
    EWay_Bill_No: {
      type: DataTypes.STRING(50),
    },
    purchaseid: {
      type: DataTypes.INTEGER,
    },
    ac: {
      type: DataTypes.INTEGER,
    },
    uc: {
      type: DataTypes.INTEGER,
    },
    mc: {
      type: DataTypes.INTEGER,
    },
    bk: {
      type: DataTypes.INTEGER,
    },
    grade: {
      type: DataTypes.STRING(50),
    },
    mill_inv_date: {
      type: DataTypes.DATE,
    },
    Purcid: {
      type: DataTypes.INTEGER,
    },
    SelfBal: {
      type: DataTypes.STRING(50),
    },
    TCS_Rate: {
      type: DataTypes.DECIMAL,
    },
    TCS_Amt: {
      type: DataTypes.DECIMAL,
    },
    TCS_Net_Payable: {
      type: DataTypes.DECIMAL,
    },
    purchaseidnew: {
      type: DataTypes.INTEGER,
    },
    TDS_Amt: {
      type: DataTypes.DECIMAL,
    },
    TDS_Rate: {
      type: DataTypes.DECIMAL,
    },
    Retail_Stock: {
      type: DataTypes.CHAR(1),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const SugarPurchaseDetail = sequelize.define(
  "nt_1_sugarpurchasedetails",
  {
    doc_no: {
      type: DataTypes.INTEGER,
    },
    detail_id: {
      type: DataTypes.INTEGER,
    },
    Tran_Type: {
      type: DataTypes.STRING(2),
    },
    item_code: {
      type: DataTypes.INTEGER,
    },
    narration: {
      type: DataTypes.STRING(1073741823),
    },
    Quantal: {
      type: DataTypes.DECIMAL,
    },
    packing: {
      type: DataTypes.INTEGER,
    },
    bags: {
      type: DataTypes.INTEGER,
    },
    rate: {
      type: DataTypes.DECIMAL,
    },
    item_Amount: {
      type: DataTypes.DECIMAL,
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
    purchasedetailid: {
      type: DataTypes.INTEGER,
    },
    purchaseid: {
      type: DataTypes.INTEGER,
    },
    ic: {
      type: DataTypes.INTEGER,
    },
    Brand_Code: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

SugarPurchaseDetail.belongsTo(SugarPurchaseHead, { foreignKey: "purchaseid" });

SugarPurchaseDetail.removeAttribute("id");
SugarPurchaseHead.removeAttribute("id");

module.exports = { SugarPurchaseHead, SugarPurchaseDetail };
