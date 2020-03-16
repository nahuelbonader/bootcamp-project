const express = require('express');
const userController = require('./controllers/user.controller');
const router = express.Router();
const version = 'v1';

/* User */

router.post(`/${version}/users`, userController.signUp);
router.put(`/${version}/users/:id`, userController.update);
router.delete(`/${version}/users/:id`, userController.delete);
router.get(`/${version}/users/:id`, userController.get);

module.exports = {router, version};
