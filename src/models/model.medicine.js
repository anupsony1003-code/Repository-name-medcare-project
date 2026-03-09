const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    requiresPrescription: Boolean
}, { timestamps: true });

module.exports = mongoose.model("Medicine", medicineSchema);