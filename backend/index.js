const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
const mongodb = require("./mongooseConnect");

mongodb();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Define API routes
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/CartOrderData"));
app.use("/api", require("./routes/CustOrderData"));

// Serve static files for the frontend
app.use(express.static(path.join(__dirname, "frontend/build")));

// Serve the index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
