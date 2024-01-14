const express = require('express');
const router = express.Router();
const actionController = require('../../../controller/user/actionController');

router.route('/')
    .get(actionController.getAllAction)
    .post(actionController.getActionByAll);

router.route('/:id_user')
    .get(actionController.getActionByUserId);

module.exports = router;