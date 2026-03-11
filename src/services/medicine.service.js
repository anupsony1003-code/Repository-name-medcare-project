const Medicine = require("../models/model.medicine");

exports.createMedicine = async (data) => {
    return await Medicine.create(data);
};

exports.getAllMedicines = async () => {
    return await Medicine.find();
};

exports.getMedicineById = async (id) => {
    return await Medicine.findById(id);
};

exports.updateMedicineById = async (id, data) => {
    return await Medicine.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true, runValidators: true }
    );
};

exports.deleteMedicineById = async (id) => {
    return await Medicine.findByIdAndDelete(id);
};
