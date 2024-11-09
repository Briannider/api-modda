require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./db/mongoose");
const Product = require("./model/products");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Route Handlers
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(product);
  } catch (err) {
    res.status(400).send({ error: "Invalid product ID" });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(400).send({ error: "Failed to create product" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(deletedProduct);
  } catch (err) {
    res.status(400).send({ error: "Invalid product ID" });
  }
};

// Routes
app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.post("/products", addProduct);
app.delete("/products/:id", deleteProductById);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
