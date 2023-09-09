const express = require('express');
const GroupMasterControllers = require('../Master/Group Master/FinicialGroupMasterController');
const DeliveryOrderController = require('../SugarRelated/Delivery Order/DeliverOrderController');
const headDetailController = require('../HeadDetail/HeadDetailController')


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
router.put('/updatedeliveryorder', DeliveryOrderController.UpdateDeliveryOrder);
router.delete('/deletedeliveryorder', DeliveryOrderController.deleteDeliveryOrder);

//HeadDetail Route
router.post('/insertheaddetail', headDetailController.insertHeadDetail);


module.exports = router;