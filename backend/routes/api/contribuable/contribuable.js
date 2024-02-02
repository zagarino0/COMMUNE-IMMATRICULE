const express = require('express');
const router = express.Router();
const contribuableController = require('../../../controller/espace_contribuable/contribuableController');

router.route('/')
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

router.route('/rejetcontribuable')
    .post(contribuableController.rejetContribuable);

router.route('/rejetmiseajour')
    .post(contribuableController.rejetMiseAJourContribuable);

router.route('/miseenveille')
    .post(contribuableController.miseEnVeilleuseContribuable);

router.route('/reveille')
    .post(contribuableController.reveilleContribuable);

router.route('/:id')
    .get(contribuableController.getContribuableById)
    .put(contribuableController.updateContribuable)
    .delete(contribuableController.deleteContribuable);

module.exports = router;