const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

const version = 'v1';

router.post(`/${version}/`, authController.authenticate);

module.exports = router;