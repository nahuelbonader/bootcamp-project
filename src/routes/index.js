const express = require('express');
const authController = require('../controllers/auth.controller');
const homeController = require('../controllers/home.controller');
const router = express.Router();

const version = 'v1';

router.get(`/home`, homeController.get);
router.post(`/${version}/login`, authController.authenticate)

module.exports = { router };
