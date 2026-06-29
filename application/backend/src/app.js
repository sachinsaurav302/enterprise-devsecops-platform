const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Security headers
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// HTTP request logging
app.use(morgan("dev"));

// API Routes
app.use("/api/v1/health", healthRoutes);

module.exports = app;