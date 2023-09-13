//const DeliveryOrder = require('../Delivery Order/DeliveryOrderModels');
const { DeliveryOrder, Detail } = require('../Delivery Order/DeliveryOrderModels');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const DeliveryOrderController = {
    //get all record from database
    getAll: async (req, res) => {
        const { Company_Code, year_Code } = req.query;
        try {
            const DataDeliveryOrder = await DeliveryOrder.findAll({
                where: {
                    [Op.and]: [
                        { year_Code },
                        { Company_Code },

                    ],

                },
            });
            res.json(DataDeliveryOrder);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', error });
            console.log(error)
        }
    },

    //get single record from database
    getOne: async (req, res) => {
        const { doid } = req.query;
        try {
            const DataDeliveryOrder = await DeliveryOrder.findAll({ where: { doid } });
            res.json(DataDeliveryOrder);
            console.log(doid)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', error });
            console.log(error)
        }
    },

    //Insert or post data into database.
    InsertDeliveryOrder: async (req, res) => {
        const {headData} = req.body;
        try {
            const DataDeliveryOrder = await DeliveryOrder.create(headData);
            res.status(201).json({ message: 'Group created successfully', DataDeliveryOrder });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', error });
            console.log(error)
        }
    },

    //update record 
    UpdateDeliveryOrder: async (req, res) => {
        const { doidnew } = req.query;
        const {
            tran_type,
            doc_no,
            desp_type,
            doc_date,
            mill_code,
            grade,
            quantal,
            packing,
            bags,
            mill_rate,
            sale_rate,
            Tender_Commission,
            diff_rate,
            diff_amount,
            amount,
            DO,
            voucher_by,
            broker,
            company_code,
            Year_Code,
            Branch_Code,
            purc_no,
            purc,
            purc_order,
            purc_type,
            truck_no,
            transport,
            less,
            less_amount,
            final_amout,
            vasuli,
            narration1,
            narration2,
            narration3,
            narration4,
            narration5,
            excise_rate,
            memo_no,
            freight,
            adv_freight1,
            driver_no,
            driver_Name,
            voucher_no,
            voucher_type,
            GETPASSCODE,
            tender_Remark,
            vasuli_rate,
            vasuli_amount,
            to_vasuli,
            naka_delivery,
            send_sms,
            Itag,
            Ac_Code,
            FreightPerQtl,
            Freight_Amount,
            Freight_RateMM,
            Freight_AmountMM,
            Memo_Advance,
            Paid_Rate1,
            Paid_Amount1,
            Paid_Narration1,
            Paid_Rate2,
            Paid_Amount2,
            Paid_Narration2,
            Paid_Rate3,
            Paid_Amount3,
            Paid_Narration3,
            MobileNo,
            Created_By,
            Modified_By,
            UTR_No,
            UTR_Year_Code,
            Carporate_Sale_No,
            Carporate_Sale_Year_Code,
            Delivery_Type,
            WhoseFrieght,
            SB_No,
            Invoice_No,
            vasuli_rate1,
            vasuli_amount1,
            Party_Commission_Rate,
            MM_CC,
            MM_Rate,
            Voucher_Brokrage,
            Voucher_Service_Charge,
            Voucher_RateDiffRate,
            Voucher_RateDiffAmt,
            Voucher_BankCommRate,
            Voucher_BankCommAmt,
            Voucher_Interest,
            Voucher_TransportAmt,
            Voucher_OtherExpenses,
            CheckPost,
            SaleBillTo,
            Pan_No,
            Vasuli_Ac,
            LoadingSms,
            GstRateCode,
            GetpassGstStateCode,
            VoucherbyGstStateCode,
            SalebilltoGstStateCode,
            GstAmtOnMR,
            GstAmtOnSR,
            GstExlSR,
            GstExlMR,
            MillGSTStateCode,
            TransportGSTStateCode,
            EWay_Bill_No,
            Distance,
            EWayBillChk,
            MillInvoiceNo,
            Purchase_Date,
            mc,
            gp,
            st,
            sb,
            tc,
            itemcode,
            cs,
            ic,
            tenderdetailid,
            bk,
            docd,
            vb,
            va,
            carporate_ac,
            ca,
            mill_inv_date,
            mill_rcv,
            saleid,
            MillEwayBill,
            TCS_Rate,
            Sale_TCS_Rate,
            Mill_AmtWO_TCS,
            newsbno,
            newsbdate,
            einvoiceno,
            ackno,
            commisionid,
            brandcode,
            Cash_diff,
            CashDiffAc,
            TDSAc,
            CashDiffAcId,
            TDSAcId,
            TDSRate,
            TDSAmt,
            TDSCut,
            tenderid,
            MemoGSTRate,
            RCMCGSTAmt,
            RCMSGSTAmt,
            RCMIGSTAmt,
            RCMNumber,
            EwayBillValidDate,
            SaleTDSRate,
            PurchaseTDSRate,
            PurchaseRate,
            SBNarration,
            MailSend,
            ISEInvoice,
            IsPayment,
            Do_DATE,
            Insured,
            vehicle_reached,
            reached_date,
            Insurance,
            ic1,
            grade1,
            quantal1,
            packing1,
            bags1,
            mill_rate1,
            sale_rate1,
            purc_no1,
            purc_order1,
            itemcode1,
            PurchaseRate1,
            mill_amount1,
            mill_amountTCS1,
            tenderdetailid1,
            GT_Remark,
            SB_Other_Amount,

        } = req.body;
        try {
            const DataDeliveryOrder = await DeliveryOrder.update({

                tran_type,
                doc_no,
                desp_type,
                doc_date,
                mill_code,
                grade,
                quantal,
                packing,
                bags,
                mill_rate,
                sale_rate,
                Tender_Commission,
                diff_rate,
                diff_amount,
                amount,
                DO,
                voucher_by,
                broker,
                company_code,
                Year_Code,
                Branch_Code,
                purc_no,
                purc,
                purc_order,
                purc_type,
                truck_no,
                transport,
                less,
                less_amount,
                final_amout,
                vasuli,
                narration1,
                narration2,
                narration3,
                narration4,
                narration5,
                excise_rate,
                memo_no,
                freight,
                adv_freight1,
                driver_no,
                driver_Name,
                voucher_no,
                voucher_type,
                GETPASSCODE,
                tender_Remark,
                vasuli_rate,
                vasuli_amount,
                to_vasuli,
                naka_delivery,
                send_sms,
                Itag,
                Ac_Code,
                FreightPerQtl,
                Freight_Amount,
                Freight_RateMM,
                Freight_AmountMM,
                Memo_Advance,
                Paid_Rate1,
                Paid_Amount1,
                Paid_Narration1,
                Paid_Rate2,
                Paid_Amount2,
                Paid_Narration2,
                Paid_Rate3,
                Paid_Amount3,
                Paid_Narration3,
                MobileNo,
                Created_By,
                Modified_By,
                UTR_No,
                UTR_Year_Code,
                Carporate_Sale_No,
                Carporate_Sale_Year_Code,
                Delivery_Type,
                WhoseFrieght,
                SB_No,
                Invoice_No,
                vasuli_rate1,
                vasuli_amount1,
                Party_Commission_Rate,
                MM_CC,
                MM_Rate,
                Voucher_Brokrage,
                Voucher_Service_Charge,
                Voucher_RateDiffRate,
                Voucher_RateDiffAmt,
                Voucher_BankCommRate,
                Voucher_BankCommAmt,
                Voucher_Interest,
                Voucher_TransportAmt,
                Voucher_OtherExpenses,
                CheckPost,
                SaleBillTo,
                Pan_No,
                Vasuli_Ac,
                LoadingSms,
                GstRateCode,
                GetpassGstStateCode,
                VoucherbyGstStateCode,
                SalebilltoGstStateCode,
                GstAmtOnMR,
                GstAmtOnSR,
                GstExlSR,
                GstExlMR,
                MillGSTStateCode,
                TransportGSTStateCode,
                EWay_Bill_No,
                Distance,
                EWayBillChk,
                MillInvoiceNo,
                Purchase_Date,
                mc,
                gp,
                st,
                sb,
                tc,
                itemcode,
                cs,
                ic,
                tenderdetailid,
                bk,
                docd,
                vb,
                va,
                carporate_ac,
                ca,
                mill_inv_date,
                mill_rcv,
                saleid,
                MillEwayBill,
                TCS_Rate,
                Sale_TCS_Rate,
                Mill_AmtWO_TCS,
                newsbno,
                newsbdate,
                einvoiceno,
                ackno,
                commisionid,
                brandcode,
                Cash_diff,
                CashDiffAc,
                TDSAc,
                CashDiffAcId,
                TDSAcId,
                TDSRate,
                TDSAmt,
                TDSCut,
                tenderid,
                MemoGSTRate,
                RCMCGSTAmt,
                RCMSGSTAmt,
                RCMIGSTAmt,
                RCMNumber,
                EwayBillValidDate,
                SaleTDSRate,
                PurchaseTDSRate,
                PurchaseRate,
                SBNarration,
                MailSend,
                ISEInvoice,
                IsPayment,
                Do_DATE,
                Insured,
                vehicle_reached,
                reached_date,
                Insurance,
                ic1,
                grade1,
                quantal1,
                packing1,
                bags1,
                mill_rate1,
                sale_rate1,
                purc_no1,
                purc_order1,
                itemcode1,
                PurchaseRate1,
                mill_amount1,
                mill_amountTCS1,
                tenderdetailid1,
                GT_Remark,
                SB_Other_Amount,


            },
                {
                    where: { doidnew },
                }
            );
            if (DeliveryOrder[0] === 0) {
                return res.status(404).json({ error: 'doidnew not found' })
            }
            res.status(201).json({ message: 'Group update successfully', DataDeliveryOrder });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', error });
            console.log(error)
        }
    },

    //delete record from database by group_Code
    deleteDeliveryOrder: async (req, res) => {
        const { doid } = req.query;

        try {
            const deletedRows = await DeliveryOrder.destroy({
                where: { doid },
            });

            if (deletedRows === 0) {
                return res.status(404).json({ error: 'Group not found' });
            }

            res.json({ message: 'Group deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
            console.log(error)
        }
    },

    //insert headdetail
    insertHeadDetail: async (req, res) => {
        try {
          const { headData, detailData } = req.body;
          const createdHead = await DeliveryOrder.create(headData);
          detailData.doid = createdHead.doid;

          if(createdHead.desp_type === "DI"){
            const createdDetails = await Promise.all(
                detailData.map(async (item) => {
                  item.doid = createdHead.doid;
                  return await Detail.create(item);
                })
              );
              console.log({createdDetails} )
          }
          res.status(201).json({ message: 'Data Inserted successfully', head: createdHead, });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error', message: error.message });
          console.log(error);
        }
      },

      //multiple conditions
      insertHeadDetailMultiple: async (req, res) => {
        try {
          const { headData, detailData } = req.body;

          const createdHead = await DeliveryOrder.create(headData);

          detailData.forEach(async (item) => {
            item.doid = createdHead.doid;
            switch (item.RowAction) {
              case "A":  
                await Detail.create(item);
                break;
              case "E": 
                if (item.dodetailid) {
                  await Detail.update(item, {
                    where: { dodetailid: item.dodetailid },
                  });
                }
                break;
              case "D": 
                if (item.dodetailid) {
                  await Detail.destroy({
                    where: { dodetailid: item.dodetailid },
                  });
                }
                break;
              default:
                break;
            }
          });
          res.status(201).json({ message: 'Data Inserted successfully', head: createdHead,detail:detailData });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error', message: error.message });
          console.log(error);
        }
      },

};
module.exports = DeliveryOrderController;
