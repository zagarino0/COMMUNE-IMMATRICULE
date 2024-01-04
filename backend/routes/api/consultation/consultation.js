const express = require('express');
const router = express.Router();
const consultationController = require('../../../controller/consultation/consultationController');

router.route('/contribuable/bloque')
    .get(consultationController.getContribuablebloque);

router.route('/contribuable/nonbloque')
    .get(consultationController.getContribuableNonBloque);

router.route('/contribuable/avalide')
    .get(consultationController.getListeDemandeAValide);

router.route('/contribuable/miseajouravalide')
    .get(consultationController.getListeMiseAJourAValide);


module.exports = router;