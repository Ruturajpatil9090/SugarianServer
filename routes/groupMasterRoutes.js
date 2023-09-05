const express = require('express');
const GroupMasterControllers = require('../Controllers/Master/Acccount Information/FinicialGroups');
const getSingleRecord  = require('../Controllers/Common/NavigationApi') ;

const router = express.Router();
router.get('/', GroupMasterControllers.getAllGroups);
router.get('/singlerecord',getSingleRecord);
router.get('/:id', GroupMasterControllers.getGroupById);
router.post('/', GroupMasterControllers.createGroup);
router.put('/:id', GroupMasterControllers.updateGroup);
router.delete('/:id', GroupMasterControllers.deleteGroup);
module.exports = router;