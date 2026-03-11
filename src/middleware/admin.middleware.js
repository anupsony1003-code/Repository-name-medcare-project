module.exports = (req, res, next) => {
    // Check if user is authenticated first
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    
    if (req.user.role !== "Admin") {
        return res.status(403).json({ message: "Admin access required" });
    }
    next();
};
