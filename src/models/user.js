const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "User"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;