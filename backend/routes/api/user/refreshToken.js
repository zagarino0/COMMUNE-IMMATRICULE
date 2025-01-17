const express = require('express');
const router = express.Router();
const refreshTokenController = require('../../../controller/user/refreshTokenController');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;