const express = require('express');
const router = express.Router();
const userController = require('../../../controller/user/userController');

router.route('/actif') 
    .get(userController.getAllUserActif);

router.route('/reactivation')
    .post(userController.reactivationUser);

router.route('/desactivatin')
    .post(userController.desactivationUser);

router.route('/inactif')
    .get(userController.getAllUserInactif);

module.exports = router;