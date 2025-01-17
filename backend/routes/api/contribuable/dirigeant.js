const express = require('express');
const router = express.Router();
const dirigeantController = require('../../../controller/espace_contribuable/dirigeantController');


router.route('/')
    .post(dirigeantController.setDirigeant);

router.route('/:id_dirigeant')
    .get(dirigeantController.getDirigeantById)
    .put(dirigeantController.updateDirigeant);

router.route('/contribuable/:id_contribuable')
    .get(dirigeantController.getDirigeantByIdContribuable);

router.route('/avalide')
    .post(dirigeantController.setOneDirigeantNonValide);

router.route('/avalide/:id_dirigeant')
    .put(dirigeantController.updateDirigeantAValide)
    .delete(dirigeantController.deleteDirigeantsNonValide)

router.route('/contribuable/:id_dirigeant')
    .put(dirigeantController.updateDirigeantByContribuable);

module.exports = router;