const express = require('express');
const router = express.Router();
const dirigeantController = require('../../../controller/espace_contribuable/dirigeantController');


router.route('/')
    .post(dirigeantController.setDirigeant);

module.exports = router;