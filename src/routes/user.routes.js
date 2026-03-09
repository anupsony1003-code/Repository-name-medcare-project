const router = require("express").Router();
const userController = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", authMiddleware, isAdmin, userController.getUsers);
module.exports = router;