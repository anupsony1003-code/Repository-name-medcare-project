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

exports.getAllUsers = async () => {
    return await User.find();
};