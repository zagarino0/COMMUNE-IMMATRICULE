const express = require('express');
const router = express.Router();
const contribuableController = require('../../../controller/espace_contribuable/contribuableController');

router.route('/')
    .put(contribuableController.updateContribuable)
    .post(contribuableController.setContribuable);

router.route('/login')
    .post(contribuableController.authContribuable);

router.route('/bloque')
    .post(contribuableController.getContribuablebloque);

router.route('/debloque')
    .post(contribuableController.getContribuableNonBloque);

router.route('/validation/miseajour')
    .post(contribuableController.validationMiseAJour)

router.route('/validation/contribuable')
    .post(contribuableController.validationContribuable);

router.route('/activite/cessation')
    .post(contribuableController.cessationActivite);

router.route('/activite/reprise')
    .post(contribuableController.repriseActivite);

router.route('/deblockage')
    .post(contribuableController.debloquageContribuable);

module.exports = router;