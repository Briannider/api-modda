require("dotenv").config();
const mongoose = require("mongoose");

// Construct the MongoDB URI
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}`;

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Optional: export mongoose connection to use in other parts of your application
module.exports = mongoose;
