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

router.route('/contribuable/veille')
    .get(etatController.getContribuableVeilleuse)
    .post(etatController.getContribuableVeilleuseByReferenceFiscal);

router.route('/contribuable/eveille')
    .get(etatController.getContribuableEveille)
    .post(etatController.getContribuableEveilleByReferenceFiscal);

router.route('/contribuable/domri')
    .post(etatController.getCessationContribuable);

router.route('/contribuable/cesse')
    .get(etatController.getCessationContribuable)
    .post(etatController.getCessationContribuableByAll);

router.route('/contribuable/reprise')
    .get(etatController.getAllContribuableReprise);
    

router.route('/contribuable/cesse/:id_contribuable')
    .get(etatController.getCessationContribuableById),

router.route('/contribuable/radie')
    .get(etatController.getContribuableRadies)
    .post(etatController.getContribuableRadieByAll);

router.route('/contribuable/radie/:id')
    .get(etatController.getContribuableRadieById);


module.exports = router;