const express = require('express');
const router = express.Router();
const assujetissementController = require('../../../controller/client/assujetissementController');

router.route('/')
    .post(assujetissementController.setAssujetissement);

router.route('/:id_contribuable')
    .get(assujetissementController.getAssujetissementById);

router.route('/:id_assujetissement')
    .put(assujetissementController.updateAssujetissement);

module.exports = router;