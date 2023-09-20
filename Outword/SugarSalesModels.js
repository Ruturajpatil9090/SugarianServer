const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const SugarSalesHead = sequelize.define(
  "nt_1_sugarsale",
  {
    doc_no: {
      type: DataTypes.INTEGER,
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
    Tran_Type: {
      type: DataTypes.STRING(2),
    },
    DO_No: {
      type: DataTypes.INTEGER,
    },
    Transport_Code: {
      type: DataTypes.INTEGER,
    },
    RateDiff: {
      type: DataTypes.DECIMAL,
    },
    ASN_No: {
      type: DataTypes.STRING(20),
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
    TaxableAmount: {
      type: DataTypes.DECIMAL,
    },
    EWay_Bill_No: {
      type: DataTypes.STRING(50),
    },
    EWayBill_Chk: {
      type: DataTypes.CHAR(1),
    },
    MillInvoiceNo: {
      type: DataTypes.STRING(1073741823),
    },
    RoundOff: {
      type: DataTypes.DECIMAL,
    },
    saleid: {
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
    tc: {
      type: DataTypes.INTEGER,
    },
    Purcid: {
      type: DataTypes.INTEGER,
    },
    DoNarrtion: {
      type: DataTypes.STRING(500),
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
    saleidnew: {
      type: DataTypes.INTEGER,
    },
    newsbno: {
      type: DataTypes.DECIMAL,
    },
    newsbdate: {
      type: DataTypes.DATE,
    },
    einvoiceno: {
      type: DataTypes.STRING(500),
    },
    ackno: {
      type: DataTypes.STRING(500),
    },
    Delivery_type: {
      type: DataTypes.CHAR(1),
    },
    Bill_To: {
      type: DataTypes.DECIMAL,
    },
    bt: {
      type: DataTypes.DECIMAL,
    },
    EwayBillValidDate: {
      type: DataTypes.DATE,
    },
    IsDeleted: {
      type: DataTypes.INTEGER,
    },
    TDS_Amt: {
      type: DataTypes.DECIMAL,
    },
    TDS_Rate: {
      type: DataTypes.DECIMAL,
    },
    SBNarration: {
      type: DataTypes.STRING(500),
    },
    QRCode: {
      type: DataTypes.STRING(1073741823),
    },
    Insured: {
      type: DataTypes.CHAR(1),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const SugarSalesDetails = sequelize.define(
  "nt_1_sugarsaledetails",
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
    saledetailid: {
      type: DataTypes.INTEGER,
    },
    saleid: {
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
    timestamps: false,
    freezeTableName: true,
  }
);

SugarSalesDetails.belongsTo(SugarSalesHead, { foreignKey: "saleid" });

SugarSalesDetails.removeAttribute("id");
SugarSalesHead.removeAttribute("id");

module.exports = { SugarSalesHead, SugarSalesDetails };
