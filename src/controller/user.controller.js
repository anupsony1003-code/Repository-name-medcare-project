const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("../services/user.service");
exports.register = async (req, res) => {
    try {
        const { uid, name, email, password, date, phonenumber, address, city, country, role } = req.body;

        const hashed = await bcrypt.hash(password, 10);

        const user = await userService.createUser({
            uid,
            name,
            email,
            password: hashed,
            date,
            phonenumber,
            address,
            city,
            country,
            role
        });

        const { password: hashedPassword, ...userWithoutPassword } = user.toObject();
        res.status(201).json({ message: "User Registered", user: userWithoutPassword });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { uid, password } = req.body;

        const user = await userService.findUserByUid(uid);
        if (!user) return res.status(404).json({ message: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid Password" });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ message: "Login Success", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};