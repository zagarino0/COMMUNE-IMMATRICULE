const express = require('express');
const router = express.Router();
const contribuableController = require('../../../controller/espace_contribuable/contribuableController');

router.route('/')
    .put(contribuableController.updateContribuablePhysique)
    .post(contribuableController.setContribuableMorale);

router.route('/login')
    .post(contribuableController.authContribuable);

router.route('/bloque')
    .post(contribuableController.getContribuablebloque);

router.route('/debloque')
    .post(contribuableController.getContribuableNonBloque);

module.exports = router;