const express = require('express');
const router = express.Router();
const siegeController = require('../../../controller/espace_contribuable/siegeController');

router.route('/')
    .post(siegeController.setSiege);

router.route('/:id_contribuable')
    .put(siegeController.updateSiege);


module.exports = router;
