const express = require('express');
const router = express.Router();
const siegeController = require('../../../controller/espace_contribuable/siegeController');

router.route('/')
    .report(siegeController.setSiege);

module.exports = router;
