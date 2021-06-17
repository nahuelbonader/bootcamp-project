const router = require("express").Router();
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes")

// Users 

router.use(`/usuarios`, userRoutes);

// Login 
router.use(`/login`, authRoutes);

module.exports = router;