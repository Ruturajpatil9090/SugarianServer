const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const TenderHead = sequelize.define(
  "nt_1_tender",
  {
    Tender_No: {
      type: DataTypes.INTEGER,
    },
    Company_Code: {
      type: DataTypes.INTEGER,
     
    },
    Tender_Date: {
      type: DataTypes.DATE,
    },
    Lifting_Date: {
      type: DataTypes.DATE,
    },
    Mill_Code: {
      type: DataTypes.INTEGER,
    },
    Grade: {
      type: DataTypes.STRING(50),
    },
    Quantal: {
      type: DataTypes.DECIMAL,
    },
    Packing: {
      type: DataTypes.INTEGER,
    },
    Bags: {
      type: DataTypes.INTEGER,
    },
    Payment_To: {
      type: DataTypes.INTEGER,
    },
    Tender_From: {
      type: DataTypes.INTEGER,
    },
    Tender_DO: {
      type: DataTypes.INTEGER,
    },
    Voucher_By: {
      type: DataTypes.INTEGER,
    },
    Broker: {
      type: DataTypes.INTEGER,
    },
    Excise_Rate: {
      type: DataTypes.DECIMAL,
    },
    Narration: {
      type: DataTypes.STRING(500),
    },
    Mill_Rate: {
      type: DataTypes.DECIMAL,
    },
    Created_By: {
      type: DataTypes.STRING(50),
    },
    Modified_By: {
      type: DataTypes.STRING(50),
    },
    Year_Code: {
      type: DataTypes.INTEGER,

    },
    Purc_Rate: {
      type: DataTypes.DECIMAL,
    },
    type: {
      type: DataTypes.CHAR(1),
    },
    Branch_Id: {
      type: DataTypes.INTEGER,
    },
    Voucher_No: {
      type: DataTypes.INTEGER,
    },
    Sell_Note_No: {
      type: DataTypes.STRING(50),
    },
    Brokrage: {
      type: DataTypes.DECIMAL,
    },
    tenderid: {
      type: DataTypes.INTEGER,
      
    },
    mc: {
      type: DataTypes.INTEGER,
    },
    itemcode: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.STRING(20),
    },
    pt: {
      type: DataTypes.INTEGER,
    },
    tf: {
      type: DataTypes.INTEGER,
    },
    td: {
      type: DataTypes.INTEGER,
    },
    vb: {
      type: DataTypes.INTEGER,
    },
    bk: {
      type: DataTypes.INTEGER,
    },
    ic: {
      type: DataTypes.INTEGER,
    },
    gstratecode: {
      type: DataTypes.INTEGER,
    },
    CashDiff: {
      type: DataTypes.DECIMAL,
    },
    TCS_Rate: {
      type: DataTypes.DECIMAL,
    },
    TCS_Amt: {
      type: DataTypes.DECIMAL,
    },
    commissionid: {
      type: DataTypes.INTEGER,
    },
    Voucher_Type: {
      type: DataTypes.STRING(2),
    },
    Party_Bill_Rate: {
      type: DataTypes.DECIMAL,
    },
    TDS_Rate: {
      type: DataTypes.DECIMAL,
    },
    TDS_Amt: {
      type: DataTypes.DECIMAL,
    },
    Temptender: {
      type: DataTypes.CHAR(1),
    },
    AutoPurchaseBill: {
      type: DataTypes.CHAR(1),
    },
    Bp_Account: {
      type: DataTypes.INTEGER,
    },
    bp: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const TenderDetails = sequelize.define(
  "nt_1_tenderdetails",
  {
    Tender_No: {
      type: DataTypes.INTEGER,
      
    },
    Company_Code: {
      type: DataTypes.INTEGER,
      
    },
    Buyer: {
      type: DataTypes.INTEGER,
    },
    Buyer_Quantal: {
      type: DataTypes.DECIMAL,
    },
    Sale_Rate: {
      type: DataTypes.DECIMAL,
    },
    Commission_Rate: {
      type: DataTypes.DECIMAL,
    },
    Sauda_Date: {
      type: DataTypes.DATE,
    },
    Lifting_Date: {
      type: DataTypes.DATE,
    },
    Narration: {
      type: DataTypes.STRING(255),
    },
    ID: {
      type: DataTypes.INTEGER,

    },
    Buyer_Party: {
      type: DataTypes.INTEGER,
    },
    AutoID: {
      type: DataTypes.INTEGER,
    },
    IsActive: {
      type: DataTypes.INTEGER,
    },
    year_code: {
      type: DataTypes.INTEGER,
      
    },
    Branch_Id: {
      type: DataTypes.INTEGER,
    },
    Delivery_Type: {
      type: DataTypes.STRING(10),
    },
    tenderid: {
      type: DataTypes.INTEGER,
  
    },
    tenderdetailid: {
      type: DataTypes.INTEGER,
     
    },
    buyerid: {
      type: DataTypes.INTEGER,
    },
    buyerpartyid: {
      type: DataTypes.INTEGER,
    },
    sub_broker: {
      type: DataTypes.INTEGER,
    },
    sbr: {
      type: DataTypes.INTEGER,
    },
    tcs_rate: {
      type: DataTypes.DECIMAL,
    },
    gst_rate: {
      type: DataTypes.DECIMAL,
    },
    tcs_amt: {
      type: DataTypes.DECIMAL,
    },
    gst_amt: {
      type: DataTypes.DECIMAL,
    },
    ShipTo: {
      type: DataTypes.INTEGER,
    },
    CashDiff: {
      type: DataTypes.DECIMAL,
    },
    shiptoid: {
      type: DataTypes.INTEGER,
    },
    BP_Detail: {
      type: DataTypes.INTEGER,
    },
    bpid: {
      type: DataTypes.INTEGER,
    },
    loding_by_us: {
      type: DataTypes.CHAR(1),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

TenderDetails.belongsTo(TenderHead, { foreignKey: "tenderid" });

TenderDetails.removeAttribute("id");
TenderHead.removeAttribute("id");

module.exports = { TenderHead, TenderDetails };
