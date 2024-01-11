const express = require('express');
const router = express.Router();
const etablissementcontroller = require('../../../controller/espace_contribuable/etablissementController');

router.post('/', etablissementcontroller.setEtablissements);

module.exports = router;