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
    const medicines = await medicineService.getAllMedicines();
    res.json(medicines);
};