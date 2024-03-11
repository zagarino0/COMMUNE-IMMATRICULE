const express = require('express');
const router = express.Router();
const consultationController = require('../../../controller/consultation/consultationController');

router.route('/contribuable/bloque')
    .get(consultationController.getAllContribuableBloque)
    .post(consultationController.getContribuablebloque);

router.route('/contribuable/valide')
    .get(consultationController.getAllContribuableValide)

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

router.route('/contribuable/veille')
    .get(consultationController.getAllContribuableInactif)

router.route('/contribuable/debloque')
    .get(consultationController.getAllContribuableDeBloque);

module.exports = router;