const express = require('express');
const router = express.Router();
const contribuableController = require('../../../controller/espace_contribuable/contribuableController');

router.route('/contribuable')
    .put(contribuableController.updateContribuablePhysique)
    .post(contribuableController.setContribuableMorale);

module.exports = router;