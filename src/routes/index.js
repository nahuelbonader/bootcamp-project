const router = require("express").Router();
const userRoutes = require("./user.routes");

router.use(`/usuarios`, userRoutes);

module.exports = router;
