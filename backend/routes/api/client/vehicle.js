const express = require('express');
const router = express.Router();
const vehicleController = require('../../../controller/client/vehicleController');

router.route('/')
    .get(vehicleController.getAllVehicles)
    .post(vehicleController.addNewVehicle)
    .delete(vehicleController.deleteVehicle);

router.route('/:immatriculation')
    .get(vehicleController.getVehicle);

router.route('/:id_vehicule')
    .put(vehicleController.updateVehicle);

router.route('/deuxdates')
    .post(vehicleController.getListeVehiculeByTwoDates);

router.route('/consultation')
    .post(vehicleController.getVehicleByNifContribuable);

router.route('/research')
    .post(vehicleController.getVehicleByAll);

module.exports = router;