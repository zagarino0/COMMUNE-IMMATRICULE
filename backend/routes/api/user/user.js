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

router.route('/actif/code')
    .post(userController.getUserActifByCode);

router.route('/actif/:id_user')
    .get(userController.getUserActifById);

router.route('/inactif/code')
    .post(userController.getUserInactifByCode);

router.route('/inactif/:id_user')
    .get(userController.getUserInactifById)

module.exports = router;