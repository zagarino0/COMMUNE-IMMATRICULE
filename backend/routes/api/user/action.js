const express = require('express');
const router = express.Router();
const actionController = require('../../../controller/user/actionController');

router.route('/')
    .post(actionController.getAllAction);

module.exports = router;