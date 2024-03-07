const express = require('express');
const router = express.Router();
const consultationController = require('../../../controller/consultation/consultationController');

router.route('/contribuable/bloque')
    .get(consultationController.getAllContribuableBloque)
    .post(consultationController.getContribuablebloque);


router.route('/contribuable/deuxdates')
    .post(consultationController.getContribuableByTwoDates);

router.route('/contribuable/nonbloque')
    .get(consultationController.getContribuableNonBloque);

router.route('/contribuable/avalide')
    .get(consultationController.getListeDemandeAValide)
    .post(consultationController.getListeDemandeAValideByAll);

router.route('/contribuable/miseajouravalide')
    .get(consultationController.getListeMiseAJourAValide)
    .post(consultationController.getListeMiseAJourAValideByAll);

router.route('/contribuable/referencefiscal')
    .post(consultationController.getContribuableByRef);

module.exports = router;