const express = require('express');
const router = express.Router();
const historyController = require('../../../controller/espace_contribuable/historyController');

router.route('/contribuable')
    .get(historyController.getAllHistoryContribuable);

module.exports = router;