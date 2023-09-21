const express = require('express');
const GroupMasterControllers = require('../Master/Group Master/FinicialGroupMasterController');
const DeliveryOrderController = require('../SugarRelated/Delivery Order/DeliverOrderController');
// const headDetailController = require('../HeadDetail/HeadDetailController');
const HeadDoDetailController =require("../HeadDetail/HeadDoDetailController");
const SugarPurchaseController = require('../Inword/SugarPurchase/SugarPurchaseController');
const SugarSalesRoutes = require("../Outword/SugarSalesController");
const TenderHeadDetailController = require('../BusinessRelated/TenderPurchase/TenderHeaddetailController')
const UtrHeadDetailController = require("../BusinessRelated/UtrEntry/UtrHeadDetailController")


const router = express.Router();
router.get('/', GroupMasterControllers.getAllGroups);
router.get('/getsinglerecord', GroupMasterControllers.getGroupById);
router.post('/postgroupmaster', GroupMasterControllers.createGroup);
router.put('/updategroupmaster', GroupMasterControllers.updateGroup);
router.delete('/deletegroupmaster', GroupMasterControllers.deleteGroup);

//Delivery Order Routes
router.get('/delivery', DeliveryOrderController.getAll);
router.get('/getone', DeliveryOrderController.getOne);
router.post('/postdeliveryorder', DeliveryOrderController.InsertDeliveryOrder);
router.post('/insertheaddetail', DeliveryOrderController.insertHeadDetail);
router.put('/updatedeliveryorder', DeliveryOrderController.UpdateDeliveryOrder);
router.delete('/deletedeliveryorder', DeliveryOrderController.deleteDeliveryOrder);

//DoDetail Route
//  router.post('/insert', headDetailController.insertHeadDetail);
//  router.put('/updateheaddetail', headDetailController.updateHeadDetail);
//  router.delete('/deleteheaddetail', headDetailController.deleteHeadDetail);


 //headdodetailController
 router.get('/getcombinedata', HeadDoDetailController.getCombinedData);
 router.get('/getone', HeadDoDetailController.getOne);
router.post('/insertheaddeatil', HeadDoDetailController.postData);
router.put('/updatehead', HeadDoDetailController.updateHeadData);

//SugarPurchaseControllers
router.get('/sugargetdata', SugarPurchaseController.getCombinedData);
router.get('/sugarone', SugarPurchaseController.getOne);
router.post('/insertsugarpurchase', SugarPurchaseController.InsertSugarPurchase);
router.put('/updatesugarpurchase', SugarPurchaseController.UpdateSugarPurchase);


//SugarSalesController
router.get('/sugarsales', SugarSalesRoutes.getCombinedData);
router.get('/sugarsalesone', SugarSalesRoutes.getOne);
router.post('/insertsugarsales', SugarSalesRoutes.InsertSugarSales);
router.put('/updatesugarsales', SugarSalesRoutes.UpdateSugarPurchase);

//Tender Head Detail Routes
router.get('/getonedata', TenderHeadDetailController.getOne);
router.get('/getutilitydata', TenderHeadDetailController.getUtilityData);
router.get('/getalltender', TenderHeadDetailController.getCombinedData);
router.post('/inserttender', TenderHeadDetailController.InsertTenderHeadDetail);
router.put('/updatetender', TenderHeadDetailController.UpdateSugarPurchase);


//Utr Head Detail Routes
router.get('/getutrhead', UtrHeadDetailController.getOne);
router.get('/getutrall', UtrHeadDetailController.getCombinedData);
router.post('/insertutrheaddetail', UtrHeadDetailController.InsertUtrHeadDetail);
router.put('/updateutr', UtrHeadDetailController.UpdateSugarPurchase);

module.exports = router;