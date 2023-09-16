const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const SugarPurchaseHead = sequelize.define(
  "nt_1_SugarPurchase",
  {
    doc_no: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    Tran_Type: {
      type: DataTypes.STRING(2),
      ////allowNull:true,
    },
    PURCNO: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    doc_date: {
      type: DataTypes.DATE,
      ////allowNull:true,
    },
    Ac_Code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    Unit_Code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    mill_code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    FROM_STATION: {
      type: DataTypes.STRING(255),
      ////allowNull:true,
    },
    TO_STATION: {
      type: DataTypes.STRING(255),
      ////allowNull:true,
    },
    LORRYNO: {
      type: DataTypes.STRING(50),
      ////allowNull:true,
    },
    BROKER: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    wearhouse: {
      type: DataTypes.STRING(1073741823),
      ////allowNull:true,
    },
    subTotal: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    LESS_FRT_RATE: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    freight: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    cash_advance: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    bank_commission: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    OTHER_AMT: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    Bill_Amount: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    Due_Days: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    NETQNTL: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    Company_Code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    Year_Code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    Branch_Code: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    Created_By: {
      type: DataTypes.STRING(255),
      ////allowNull:true,
    },
    Modified_By: {
      type: DataTypes.STRING(255),
      ////allowNull:true,
    },
    Bill_No: {
      type: DataTypes.STRING(50),
      ////allowNull:true,
    },
    GstRateCode: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    CGSTRate: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    CGSTAmount: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    SGSTRate: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    SGSTAmount: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    IGSTRate: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    IGSTAmount: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    EWay_Bill_No: {
      type: DataTypes.STRING(50),
      ////allowNull:true,
    },
    purchaseid: {
      type: DataTypes.INTEGER,
      ////allowNull:false,
    },
    ac: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    uc: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    mc: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    bk: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    grade: {
      type: DataTypes.STRING(50),
      ////allowNull:true,
    },
    mill_inv_date: {
      type: DataTypes.DATE,
      ////allowNull:true,
    },
    Purcid: {
      type: DataTypes.INTEGER,
      ////allowNull:true,
    },
    SelfBal: {
      type: DataTypes.STRING(50),
      ////allowNull:true,
    },
    TCS_Rate: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    TCS_Amt: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    TCS_Net_Payable: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    purchaseidnew: {
      type: DataTypes.INTEGER,
      ////allowNull:false,
    },
    TDS_Amt: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    TDS_Rate: {
      type: DataTypes.DECIMAL,
      ////allowNull:true,
    },
    Retail_Stock: {
      type: DataTypes.CHAR(1),
      ////allowNull:true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
 
);

const SugarPurchaseDetail = sequelize.define('nt_1_sugarpurchasedetails', {
    doc_no:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    detail_id:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    Tran_Type:{
     type:DataTypes.STRING(2),
     //allowNull:true,
    },
    item_code:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    narration:{
     type:DataTypes.STRING(1073741823),
     //allowNull:true,
    },
    Quantal:{
     type:DataTypes.DECIMAL,
     //allowNull:true,
    },
    packing:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    bags:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    rate:{
     type:DataTypes.DECIMAL,
     //allowNull:true,
    },
    item_Amount:{
     type:DataTypes.DECIMAL,
     //allowNull:true,
    },
    Company_Code:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    Year_Code:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    Branch_Code:{
     type:DataTypes.INTEGER,
     //allowNull:false,
    },
    Created_By:{
     type:DataTypes.STRING(255),
     //allowNull:true,
    },
    Modified_By:{
     type:DataTypes.STRING(255),
     //allowNull:true,
    },
    purchasedetailid:{
     type:DataTypes.INTEGER,
     //allowNull:false,
    },
    purchaseid:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    ic:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    Brand_Code:{
     type:DataTypes.INTEGER,
     //allowNull:true,
    },
    },
    {
    freezeTableName: true,
    timestamps:false
    })

    SugarPurchaseDetail.belongsTo(SugarPurchaseHead, { foreignKey: 'purchaseid' });

    SugarPurchaseDetail.removeAttribute('id');
SugarPurchaseHead.removeAttribute('id');

module.exports = {SugarPurchaseHead,SugarPurchaseDetail};
