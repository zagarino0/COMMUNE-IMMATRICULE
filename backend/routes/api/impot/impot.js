const express = require('express');
const router = express.Router();
const impotController = require('../../../controller/impot/impotController');

router.route('/')
    .get(impotController.getImpot);

router.route('/:code')
    .get(impotController.getImpotsById);

module.exports = router;