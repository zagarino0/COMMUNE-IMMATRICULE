const express = require('express');
const router = express.Router();
const etatController = require('../../../controller/espace_administrateur/etatController');

router.route('/contribuable/valide')
    .get(etatController.getAllContribuableValide)
    .post(etatController.getContribuableValideByReferenceFiscal);

router.route('/contribuable/rejete')
    .get(etatController.getDemandeImmatriculationRejete)
    .post(etatController.getDemandeImmatriculationRejeteByReferenceFiscal);

router.route('/contribuable/actif')
    .get(etatController.getContribuableActif)
    .post(etatController.getContribuableActifByReferenceFiscal);

router.route('/contribuable/nouvellementimmatricule')
    .get(etatController.getContribuableNouvellementImmatricule)
    .post(etatController.getDemandeImmatriculationRejeteByReferenceFiscal);


module.exports = router;