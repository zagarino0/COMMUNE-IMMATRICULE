const express = require('express');
const router = express.Router();
const siegeController = require('../../../controller/espace_contribuable/siegeController');

router.route('/')
    .post(siegeController.setSiege);

router.route('/:id_siege')
    .get(siegeController.getSiegeById)
    .put(siegeController.updateSiege);

router.route('/contribuable/:id_contribuable')
    .get(siegeController.getSiegeByIdContribuable);


module.exports = router;
