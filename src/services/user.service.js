const User = require("../models/user");

exports.createUser = async (data) => {
    const user = new User(data);
    return await user.save();
};

exports.findUserByUid = async (uid) => {
    return await User.findOne({ uid });
};

exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

exports.findUserById = async (id) => {
    return await User.findById(id);
};

exports.getAllUsers = async () => {
    return await User.find();
};

exports.updateUserById = async (id, data) => {
    return await User.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true, runValidators: true }
    );
};

exports.deleteUserById = async (id) => {
    return await User.findByIdAndDelete(id);
};
