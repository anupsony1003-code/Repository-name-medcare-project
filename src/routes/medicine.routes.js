const router = require("express").Router();

const medicineController = require("../controller/medicine.controller");
const auth = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

router.post("/", auth, isAdmin, medicineController.addMedicine);
router.get("/", medicineController.getMedicines);

module.exports = router;