const router = require("express").Router();

const medicineController = require("../controller/medicine.controller");
const auth = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

// Public routes
router.get("/", medicineController.getMedicines);
router.get("/:id", medicineController.getMedicineById);

// Protected routes (Admin only)
router.post("/", auth, isAdmin, medicineController.addMedicine);
router.put("/:id", auth, isAdmin, medicineController.updateMedicine);
router.delete("/:id", auth, isAdmin, medicineController.deleteMedicine);

module.exports = router;
