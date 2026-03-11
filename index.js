require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const useragent = require("express-useragent");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(useragent.express());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ DB ERROR:", err));

// Routes
app.use("/api/users", require("./src/routes/user.routes"));
app.use("/api/medicines", require("./src/routes/medicine.routes"));

// Test Route
app.get("/", (req, res) => {
  res.send("Server Working");
});

// 404 Handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
