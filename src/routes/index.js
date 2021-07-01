const router = require("express").Router();
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes")
const middleware = require('../middlewares/validateAuthentication')
const acl = require('express-acl');

/**
 * Authorization
 */

acl.config({
    baseUrl: "",
    path: "src"
})

// Login 
router.use(`/login`, authRoutes);

// Users 
router.use(`/users`, middleware.validateAuthentication, acl.authorize, userRoutes);

module.exports = router;