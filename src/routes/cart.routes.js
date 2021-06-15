const router = require("express").Router();
const cartController = require("../controllers/cart.controller");

router.post(`/`, cartController.create);
router.get(`/:id`, cartController.get);
router.put(`/:id`, cartController.update);
router.delete(`/:id`, cartController.delete);

module.exports = router;