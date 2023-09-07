const express = require('express');
const GroupMasterControllers = require('../Controllers/Master/Acccount Information/FinicialGroups');
const getSingleRecord  = require('../Controllers/Common/NavigationApi') ;

const router = express.Router();
router.get('/', GroupMasterControllers.getAllGroups);
router.get('/getsinglerecord', GroupMasterControllers.getGroupById);
router.post('/postgroupmaster', GroupMasterControllers.createGroup);
router.put('/updategroupmaster', GroupMasterControllers.updateGroup);
router.delete('/deletegroupmaster', GroupMasterControllers.deleteGroup);
module.exports = router;