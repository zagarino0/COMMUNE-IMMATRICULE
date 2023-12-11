const express = require('express');
const router = express.Router();
const actionnaireController = require('../../../controller/espace_contribuable/actionnaireController');

router.route('/actionnaire')
    .post(actionnaireController.setActionnaire);

module.exports = router;