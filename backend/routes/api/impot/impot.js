const express = require('express');
const router = express.Router();
const impotController = require('../../../controller/impot/impotController');

router.route('/')
    .get(impotController.getImpot)
    .post(impotController.setImpot);

router.route('/:code')
    .get(impotController.getImpotsById)
    .put(impotController.updateImpot)
    .delete(impotController.deleteImpot);

module.exports = router;