const express = require('express');
const router = express.Router();
const clientController = require('../../../controller/client/clientController');

router.route('/')
    .get(clientController.getAllclients)
    .post(clientController.addnewClient)
    .put(clientController.updateClient)
    .delete(clientController.deleteClient);

router.route('/:nif')
    .get(clientController.getClient);

router.route('/contribuable')
    .post(clientController.getContribuableByReference);

router.route('/validation/contribuable')
    .post(clientController.validationContribuable);

router.route('/deblockage')
    .post(clientController.deblockageContribuable);

module.exports = router;