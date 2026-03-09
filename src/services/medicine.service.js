const Medicine = require("../models/model.medicine");

exports.createMedicine = async (data) => {
    return await Medicine.create(data);
};

exports.getAllMedicines = async () => {
    return await Medicine.find();
};