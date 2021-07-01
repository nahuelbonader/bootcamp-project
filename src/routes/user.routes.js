const router = require("express").Router();
const userController = require("../controllers/user.controller");

// Users 

router.post(`/`, userController.create);
router.get(`/:id`, userController.get);
router.put(`/:id`, userController.update);
router.delete(`/:id`, userController.delete);

module.exports = router;
