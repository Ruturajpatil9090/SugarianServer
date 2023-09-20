const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Head = sequelize.define(
  "nt_1_deliveryorder",
  {
    tran_type: {
      type: DataTypes.STRING(2),
    },
    doc_no: {
      type: DataTypes.INTEGER,
    },
    desp_type: {
      type: DataTypes.STRING(2),
    },
    doc_date: {
      type: DataTypes.DATE,
    },
    mill_code: {
      type: DataTypes.INTEGER,
    },
    grade: {
      type: DataTypes.STRING(50),
    },
    quantal: {
      type: DataTypes.DECIMAL,
    },
    packing: {
      type: DataTypes.INTEGER,
    },
    bags: {
      type: DataTypes.INTEGER,
    },
    mill_rate: {
      type: DataTypes.DECIMAL,
    },
    sale_rate: {
      type: DataTypes.DECIMAL,
    },
    Tender_Commission: {
      type: DataTypes.DECIMAL,
    },
    diff_rate: {
      type: DataTypes.DECIMAL,
    },
    diff_amount: {
      type: DataTypes.DECIMAL,
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    DO: {
      type: DataTypes.INTEGER,
    },
    voucher_by: {
      type: DataTypes.INTEGER,
    },
    broker: {
      type: DataTypes.INTEGER,
    },
    company_code: {
      type: DataTypes.INTEGER,
    },
    Year_Code: {
      type: DataTypes.INTEGER,
    },
    Branch_Code: {
      type: DataTypes.INTEGER,
    },
    purc_no: {
      type: DataTypes.INTEGER,
    },
    purc: {
      type: DataTypes.STRING(10),
    },
    purc_order: {
      type: DataTypes.INTEGER,
    },
    purc_type: {
      type: DataTypes.STRING(50),
    },
    truck_no: {
      type: DataTypes.STRING(20),
    },
    transport: {
      type: DataTypes.INTEGER,
    },
    less: {
      type: DataTypes.DECIMAL,
    },
    less_amount: {
      type: DataTypes.DECIMAL,
    },
    final_amout: {
      type: DataTypes.DECIMAL,
    },
    vasuli: {
      type: DataTypes.DECIMAL,
    },
    narration1: {
      type: DataTypes.STRING(500),
    },
    narration2: {
      type: DataTypes.STRING(500),
    },
    narration3: {
      type: DataTypes.STRING(1073741823),
    },
    narration4: {
      type: DataTypes.STRING(500),
    },
    narration5: {
      type: DataTypes.STRING(500),
    },
    excise_rate: {
      type: DataTypes.DECIMAL,
    },
    memo_no: {
      type: DataTypes.INTEGER,
    },
    freight: {
      type: DataTypes.DECIMAL,
    },
    adv_freight1: {
      type: DataTypes.DECIMAL,
    },
    driver_no: {
      type: DataTypes.STRING(255),
    },
    driver_Name: {
      type: DataTypes.STRING(255),
    },
    voucher_no: {
      type: DataTypes.INTEGER,
    },
    voucher_type: {
      type: DataTypes.STRING(2),
    },
    GETPASSCODE: {
      type: DataTypes.INTEGER,
    },
    tender_Remark: {
      type: DataTypes.STRING(1073741823),
    },
    vasuli_rate: {
      type: DataTypes.DECIMAL,
    },
    vasuli_amount: {
      type: DataTypes.DECIMAL,
    },
    to_vasuli: {
      type: DataTypes.INTEGER,
    },
    naka_delivery: {
      type: DataTypes.CHAR(1),
    },
    send_sms: {
      type: DataTypes.CHAR(1),
    },
    Itag: {
      type: DataTypes.CHAR(1),
    },
    Ac_Code: {
      type: DataTypes.INTEGER,
    },
    FreightPerQtl: {
      type: DataTypes.DECIMAL,
    },
    Freight_Amount: {
      type: DataTypes.DECIMAL,
    },
    Freight_RateMM: {
      type: DataTypes.DECIMAL,
    },
    Freight_AmountMM: {
      type: DataTypes.DECIMAL,
    },
    Memo_Advance: {
      type: DataTypes.DECIMAL,
    },
    Paid_Rate1: {
      type: DataTypes.DECIMAL,
    },
    Paid_Amount1: {
      type: DataTypes.DECIMAL,
    },
    Paid_Narration1: {
      type: DataTypes.STRING(50),
    },
    Paid_Rate2: {
      type: DataTypes.DECIMAL,
    },
    Paid_Amount2: {
      type: DataTypes.DECIMAL,
    },
    Paid_Narration2: {
      type: DataTypes.STRING(50),
    },
    Paid_Rate3: {
      type: DataTypes.DECIMAL,
    },
    Paid_Amount3: {
      type: DataTypes.DECIMAL,
    },
    Paid_Narration3: {
      type: DataTypes.STRING(50),
    },
    MobileNo: {
      type: DataTypes.STRING(50),
    },
    Created_By: {
      type: DataTypes.STRING(255),
    },
    Modified_By: {
      type: DataTypes.STRING(255),
    },
    UTR_No: {
      type: DataTypes.INTEGER,
    },
    UTR_Year_Code: {
      type: DataTypes.INTEGER,
    },
    Carporate_Sale_No: {
      type: DataTypes.INTEGER,
    },
    Carporate_Sale_Year_Code: {
      type: DataTypes.INTEGER,
    },
    Delivery_Type: {
      type: DataTypes.STRING(5),
    },
    WhoseFrieght: {
      type: DataTypes.STRING(2),
    },
    SB_No: {
      type: DataTypes.INTEGER,
    },
    Invoice_No: {
      type: DataTypes.STRING(50),
    },
    vasuli_rate1: {
      type: DataTypes.DECIMAL,
    },
    vasuli_amount1: {
      type: DataTypes.DECIMAL,
    },
    Party_Commission_Rate: {
      type: DataTypes.DECIMAL,
    },
    MM_CC: {
      type: DataTypes.STRING(6),
    },
    MM_Rate: {
      type: DataTypes.DECIMAL,
    },
    Voucher_Brokrage: {
      type: DataTypes.DECIMAL,
    },
    Voucher_Service_Charge: {
      type: DataTypes.DECIMAL,
    },
    Voucher_RateDiffRate: {
      type: DataTypes.DECIMAL,
    },
    Voucher_RateDiffAmt: {
      type: DataTypes.DECIMAL,
    },
    Voucher_BankCommRate: {
      type: DataTypes.DECIMAL,
    },
    Voucher_BankCommAmt: {
      type: DataTypes.DECIMAL,
    },
    Voucher_Interest: {
      type: DataTypes.DECIMAL,
    },
    Voucher_TransportAmt: {
      type: DataTypes.DECIMAL,
    },
    Voucher_OtherExpenses: {
      type: DataTypes.DECIMAL,
    },
    CheckPost: {
      type: DataTypes.STRING(100),
    },
    SaleBillTo: {
      type: DataTypes.STRING(15),
    },
    Pan_No: {
      type: DataTypes.STRING(50),
    },
    Vasuli_Ac: {
      type: DataTypes.INTEGER,
    },
    LoadingSms: {
      type: DataTypes.CHAR(1),
    },
    GstRateCode: {
      type: DataTypes.INTEGER,
    },
    GetpassGstStateCode: {
      type: DataTypes.INTEGER,
    },
    VoucherbyGstStateCode: {
      type: DataTypes.INTEGER,
    },
    SalebilltoGstStateCode: {
      type: DataTypes.INTEGER,
    },
    GstAmtOnMR: {
      type: DataTypes.DECIMAL,
    },
    GstAmtOnSR: {
      type: DataTypes.DECIMAL,
    },
    GstExlSR: {
      type: DataTypes.DECIMAL,
    },
    GstExlMR: {
      type: DataTypes.DECIMAL,
    },
    MillGSTStateCode: {
      type: DataTypes.INTEGER,
    },
    TransportGSTStateCode: {
      type: DataTypes.INTEGER,
    },
    EWay_Bill_No: {
      type: DataTypes.STRING(50),
    },
    Distance: {
      type: DataTypes.DECIMAL,
    },
    EWayBillChk: {
      type: DataTypes.CHAR(1),
    },
    MillInvoiceNo: {
      type: DataTypes.STRING(1073741823),
    },
    Purchase_Date: {
      type: DataTypes.DATE,
    },
    doid: {
      type: DataTypes.INTEGER,
    },
    mc: {
      type: DataTypes.INTEGER,
    },
    gp: {
      type: DataTypes.INTEGER,
    },
    st: {
      type: DataTypes.INTEGER,
    },
    sb: {
      type: DataTypes.INTEGER,
    },
    tc: {
      type: DataTypes.INTEGER,
    },
    itemcode: {
      type: DataTypes.INTEGER,
    },
    cs: {
      type: DataTypes.INTEGER,
    },
    ic: {
      type: DataTypes.INTEGER,
    },
    tenderdetailid: {
      type: DataTypes.INTEGER,
    },
    bk: {
      type: DataTypes.INTEGER,
    },
    docd: {
      type: DataTypes.INTEGER,
    },
    vb: {
      type: DataTypes.INTEGER,
    },
    va: {
      type: DataTypes.INTEGER,
    },
    carporate_ac: {
      type: DataTypes.INTEGER,
    },
    ca: {
      type: DataTypes.INTEGER,
    },
    mill_inv_date: {
      type: DataTypes.DATE,
    },
    mill_rcv: {
      type: DataTypes.CHAR(1),
    },
    saleid: {
      type: DataTypes.INTEGER,
    },
    MillEwayBill: {
      type: DataTypes.STRING(250),
    },
    TCS_Rate: {
      type: DataTypes.DECIMAL,
    },
    Sale_TCS_Rate: {
      type: DataTypes.DECIMAL,
    },
    Mill_AmtWO_TCS: {
      type: DataTypes.DECIMAL,
    },
    doidnew: {
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
    commisionid: {
      type: DataTypes.INTEGER,
    },
    brandcode: {
      type: DataTypes.INTEGER,
    },
    Cash_diff: {
      type: DataTypes.DECIMAL,
    },
    CashDiffAc: {
      type: DataTypes.INTEGER,
    },
    TDSAc: {
      type: DataTypes.INTEGER,
    },
    CashDiffAcId: {
      type: DataTypes.INTEGER,
    },
    TDSAcId: {
      type: DataTypes.INTEGER,
    },
    TDSRate: {
      type: DataTypes.DECIMAL,
    },
    TDSAmt: {
      type: DataTypes.DECIMAL,
    },
    TDSCut: {
      type: DataTypes.CHAR(1),
    },
    tenderid: {
      type: DataTypes.INTEGER,
    },
    MemoGSTRate: {
      type: DataTypes.INTEGER,
    },
    RCMCGSTAmt: {
      type: DataTypes.DECIMAL,
    },
    RCMSGSTAmt: {
      type: DataTypes.DECIMAL,
    },
    RCMIGSTAmt: {
      type: DataTypes.DECIMAL,
    },
    RCMNumber: {
      type: DataTypes.DECIMAL,
    },
    EwayBillValidDate: {
      type: DataTypes.DATE,
    },
    SaleTDSRate: {
      type: DataTypes.DECIMAL,
    },
    PurchaseTDSRate: {
      type: DataTypes.DECIMAL,
    },
    PurchaseRate: {
      type: DataTypes.DECIMAL,
    },
    SBNarration: {
      type: DataTypes.STRING(500),
    },
    MailSend: {
      type: DataTypes.CHAR(1),
    },
    ISEInvoice: {
      type: DataTypes.CHAR(1),
    },
    IsPayment: {
      type: DataTypes.CHAR(1),
    },
    Do_DATE: {
      type: DataTypes.DATE,
    },
    Insured: {
      type: DataTypes.CHAR(1),
    },
    vehicle_reached: {
      type: DataTypes.CHAR(1),
    },
    reached_date: {
      type: DataTypes.DATE,
    },
    Insurance: {
      type: DataTypes.DECIMAL,
    },
    ic1: {
      type: DataTypes.INTEGER,
    },
    grade1: {
      type: DataTypes.STRING(50),
    },
    quantal1: {
      type: DataTypes.DECIMAL,
    },
    packing1: {
      type: DataTypes.INTEGER,
    },
    bags1: {
      type: DataTypes.INTEGER,
    },
    mill_rate1: {
      type: DataTypes.DECIMAL,
    },
    sale_rate1: {
      type: DataTypes.DECIMAL,
    },
    purc_no1: {
      type: DataTypes.INTEGER,
    },
    purc_order1: {
      type: DataTypes.INTEGER,
    },
    itemcode1: {
      type: DataTypes.INTEGER,
    },
    PurchaseRate1: {
      type: DataTypes.DECIMAL,
    },
    mill_amount1: {
      type: DataTypes.DECIMAL,
    },
    mill_amountTCS1: {
      type: DataTypes.DECIMAL,
    },
    tenderdetailid1: {
      type: DataTypes.INTEGER,
    },
    GT_Remark: {
      type: DataTypes.STRING(100),
    },
    SB_Other_Amount: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
const Detail = sequelize.define(
  "nt_1_dodetails",
  {
    doc_no: {
      type: DataTypes.INTEGER,
    },
    detail_Id: {
      type: DataTypes.INTEGER,
    },
    ddType: {
      type: DataTypes.STRING(1),
    },
    Bank_Code: {
      type: DataTypes.INTEGER,
    },
    Narration: {
      type: DataTypes.STRING(50),
    },
    Amount: {
      type: DataTypes.DECIMAL(18, 2),
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
    UTR_NO: {
      type: DataTypes.INTEGER,
    },
    DO_No: {
      type: DataTypes.INTEGER,
    },
    UtrYearCode: {
      type: DataTypes.INTEGER,
    },
    LTNo: {
      type: DataTypes.INTEGER,
    },
    doid: {
      type: DataTypes.INTEGER,
    },
    dodetailid: {
      type: DataTypes.INTEGER,
    },
    bc: {
      type: DataTypes.INTEGER,
    },
    utrdetailid: {
      type: DataTypes.INTEGER,
    },
    UtrCompanyCode: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
// Define the association
// Head.hasMany(Detail, { foreignKey: 'headId' });
Detail.belongsTo(Head, { foreignKey: "doid" });

Detail.removeAttribute("id");
Head.removeAttribute("id");
module.exports = { Head, Detail };
