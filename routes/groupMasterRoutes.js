const express = require('express');
const GroupMasterControllers = require('../Master/Group Master/FinicialGroupMasterController');
const DeliveryOrderController = require('../SugarRelated/Delivery Order/DeliverOrderController');
//const headDetailController = require('../HeadDetail/HeadDetailController');
const HeadDoDetailController =require("../HeadDetail/HeadDoDetailController");


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
router.post('/insertmultiple', DeliveryOrderController.insertHeadDetailMultiple);

//DoDetail Route
//  router.post('/insert', headDetailController.insertHeadDetail);
//  router.put('/updateheaddetail', headDetailController.updateHeadDetail);
//  router.delete('/deleteheaddetail', headDetailController.deleteHeadDetail);


 //headdodetailController
 router.get('/getcombinedata', HeadDoDetailController.getCombinedData);
 router.get('/getdata', HeadDoDetailController.getOne);
router.post('/loaddatado', HeadDoDetailController.postData);
router.put('/updatehead', HeadDoDetailController.updateHeadData);

module.exports = router;