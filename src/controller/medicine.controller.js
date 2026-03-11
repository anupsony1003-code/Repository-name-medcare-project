const medicineService = require("../services/medicine.service");

exports.addMedicine = async (req, res) => {
    try {
        const medicine = await medicineService.createMedicine(req.body);
        res.status(201).json(medicine);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicines = async (req, res) => {
    try {
        const medicines = await medicineService.getAllMedicines();
        res.json(medicines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMedicineById = async (req, res) => {
    try {
        const medicine = await medicineService.getMedicineById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.json(medicine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMedicine = async (req, res) => {
    try {
        const medicine = await medicineService.updateMedicineById(req.params.id, req.body);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.json({ message: "Medicine updated", medicine });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMedicine = async (req, res) => {
    try {
        const medicine = await medicineService.deleteMedicineById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.json({ message: "Medicine deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
