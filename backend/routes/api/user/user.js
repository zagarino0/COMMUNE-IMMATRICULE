const express = require('express');
const router = express.Router();
const userController = require('../../../controller/user/userController');

router.route('/actif') 
    .get(userController.getAllUserActif);

router.route('/reactivation')
    .post(userController.reactivationUser);

router.route('/desactivatin')
    .post(userController.desactivationUser);

module.exports = router;