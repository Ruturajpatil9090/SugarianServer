// // Define your models
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Head = sequelize.define('Head', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// },{
//     timestamps: false, 
//     freezeTableName: true, 
//   });

// const Detail = sequelize.define('Detail', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   itemName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   headId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// },{
//     timestamps: false, 
//     freezeTableName: true, 
//   });

// // Define the association
// //Head.hasMany(Detail, { foreignKey: 'headId' });
// Detail.belongsTo(Head, { foreignKey: 'headId' });

// module.exports = { Head, Detail };












// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Head = sequelize.define('Head', {
//   tran_type: {
//     type: DataTypes.STRING(2),
//     //allowNull: true,
// },
// doc_no: {
//     type: DataTypes.INTEGER,
//     //allowNull: false,
// },
// desp_type: {
//     type: DataTypes.STRING(2),
//     //allowNull: true,
// },
// doc_date: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// mill_code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// grade: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// quantal: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// packing: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// bags: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// mill_rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// sale_rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Tender_Commission: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// diff_rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// diff_amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// DO: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// voucher_by: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// broker: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// company_code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Year_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Branch_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// purc_no: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// purc: {
//     type: DataTypes.STRING(10),
//     //allowNull: true,
// },
// purc_order: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// purc_type: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// truck_no: {
//     type: DataTypes.STRING(20),
//     //allowNull: true,
// },
// transport: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// less: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// less_amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// final_amout: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// vasuli: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// narration1: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// narration2: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// narration3: {
//     type: DataTypes.STRING(1073741823),
//     //allowNull: true,
// },
// narration4: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// narration5: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// excise_rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// memo_no: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// freight: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// adv_freight1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// driver_no: {
//     type: DataTypes.STRING(255),
//     //allowNull: true,
// },
// driver_Name: {
//     type: DataTypes.STRING(255),
//     //allowNull: true,
// },
// voucher_no: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// voucher_type: {
//     type: DataTypes.STRING(2),
//     //allowNull: true,
// },
// GETPASSCODE: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// tender_Remark: {
//     type: DataTypes.STRING(1073741823),
//     //allowNull: true,
// },
// vasuli_rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// vasuli_amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// to_vasuli: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// naka_delivery: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// send_sms: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// Itag: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// Ac_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// FreightPerQtl: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Freight_Amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Freight_RateMM: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Freight_AmountMM: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Memo_Advance: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Rate1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Amount1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Narration1: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// Paid_Rate2: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Amount2: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Narration2: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// Paid_Rate3: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Amount3: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Paid_Narration3: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// MobileNo: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// Created_By: {
//     type: DataTypes.STRING(255),
//     //allowNull: true,
// },
// Modified_By: {
//     type: DataTypes.STRING(255),
//     //allowNull: true,
// },
// UTR_No: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// UTR_Year_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Carporate_Sale_No: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Carporate_Sale_Year_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Delivery_Type: {
//     type: DataTypes.STRING(5),
//     //allowNull: true,
// },
// WhoseFrieght: {
//     type: DataTypes.STRING(2),
//     //allowNull: true,
// },
// SB_No: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Invoice_No: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// vasuli_rate1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// vasuli_amount1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Party_Commission_Rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// MM_CC: {
//     type: DataTypes.STRING(6),
//     //allowNull: true,
// },
// MM_Rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_Brokrage: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_Service_Charge: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_RateDiffRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_RateDiffAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_BankCommRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_BankCommAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_Interest: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_TransportAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Voucher_OtherExpenses: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// CheckPost: {
//     type: DataTypes.STRING(100),
//     //allowNull: true,
// },
// SaleBillTo: {
//     type: DataTypes.STRING(15),
//     //allowNull: true,
// },
// Pan_No: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// Vasuli_Ac: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// LoadingSms: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// GstRateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// GetpassGstStateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// VoucherbyGstStateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// SalebilltoGstStateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// GstAmtOnMR: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// GstAmtOnSR: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// GstExlSR: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// GstExlMR: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// MillGSTStateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// TransportGSTStateCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// EWay_Bill_No: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// Distance: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// EWayBillChk: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// MillInvoiceNo: {
//     type: DataTypes.STRING(1073741823),
//     //allowNull: true,
// },
// Purchase_Date: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// doid: {
//     type: DataTypes.INTEGER,
//     //allowNull: false,
// },
// mc: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// gp: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// st: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// sb: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// tc: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// itemcode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// cs: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// ic: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// tenderdetailid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// bk: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// docd: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// vb: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// va: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// carporate_ac: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// ca: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// mill_inv_date: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// mill_rcv: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// saleid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// MillEwayBill: {
//     type: DataTypes.STRING(250),
//     //allowNull: true,
// },
// TCS_Rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Sale_TCS_Rate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// Mill_AmtWO_TCS: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// doidnew: {
//     type: DataTypes.INTEGER,
//     //allowNull: false,
// },
// newsbno: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// newsbdate: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// einvoiceno: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// ackno: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// commisionid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// brandcode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Cash_diff: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// CashDiffAc: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// TDSAc: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// CashDiffAcId: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// TDSAcId: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// TDSRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// TDSAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// TDSCut: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// tenderid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// MemoGSTRate: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// RCMCGSTAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// RCMSGSTAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// RCMIGSTAmt: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// RCMNumber: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// EwayBillValidDate: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// SaleTDSRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// PurchaseTDSRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// PurchaseRate: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// SBNarration: {
//     type: DataTypes.STRING(500),
//     //allowNull: true,
// },
// MailSend: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// ISEInvoice: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// IsPayment: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// Do_DATE: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// Insured: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// vehicle_reached: {
//     type: DataTypes.CHAR(1),
//     //allowNull: true,
// },
// reached_date: {
//     type: DataTypes.DATE,
//     //allowNull: true,
// },
// Insurance: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// ic1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// grade1: {
//     type: DataTypes.STRING(50),
//     //allowNull: true,
// },
// quantal1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// packing1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// bags1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// mill_rate1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// sale_rate1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// purc_no1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// purc_order1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// itemcode1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// PurchaseRate1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// mill_amount1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// mill_amountTCS1: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// tenderdetailid1: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// GT_Remark: {
//     type: DataTypes.STRING(100),
//     //allowNull: true,
// },
// SB_Other_Amount: {
//     type: DataTypes.DECIMAL,
//     //allowNull: true,
// },
// }, {
//   timestamps: false,
//   freezeTableName: true, 
// });  
// const Detail = sequelize.define('Detail', {
//   doc_no: {
//     type: DataTypes.INTEGER,
// },
// detail_Id: {
//     type: DataTypes.INTEGER,
// },
// ddType: {
//     type: DataTypes.STRING(1),
// },
// Bank_Code: {
//     type: DataTypes.INTEGER,
    
// },
// Narration: {
//     type: DataTypes.STRING(50),
    
// },
// Amount: {
//     type: DataTypes.DECIMAL(18,2),
//     //allowNull: true,
// },
// Company_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Year_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// Branch_Code: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// UTR_NO: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// DO_No: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// UtrYearCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// LTNo: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// doid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// dodetailid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// bc: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// utrdetailid: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// UtrCompanyCode: {
//     type: DataTypes.INTEGER,
//     //allowNull: true,
// },
// }, {
//   timestamps: false, 
//   freezeTableName: true, 
// });
// // Define the association
// // Head.hasMany(Detail, { foreignKey: 'headId' });
// Detail.belongsTo(Head, { foreignKey: 'doid' });

// Detail.removeAttribute('id');

// Head.removeAttribute('id');
// module.exports = { Head, Detail };