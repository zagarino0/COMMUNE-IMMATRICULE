const express = require('express');
const router = express.Router();
const etablissementcontroller = require('../../../controller/espace_contribuable/etablissementController');

router.route('/')
    .post(etablissementcontroller.setEtablissements);

router.route('/:id_contribuable')
    .get(etablissementcontroller.getEtablissementByIdContribuable);

router.route('/:id_etablissement')
    .get(etablissementcontroller.getEtablissementById)
    .put(etablissementcontroller.updateEtablissement);

router.route('/avalide')
    .post(etablissementcontroller.setOneEtablissementNonValide);

router.route('/avalide/:id_etablissement')
    .put(etablissementcontroller.updateEtablissementAValide)
    .delete(etablissementcontroller.deleteEtablissementNonValide);

router.route('/contribuable/:id_contribuable')
    .put(etablissementcontroller.updateEtablissementByContribuable);


module.exports = router;