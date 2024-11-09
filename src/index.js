const express = require('express');
const app = express();
const { PORT, MONGODB_URI } = process.env;
const mongoose = require('./db/mongoose');
const Product = require('./model/products');

app.use(express.json());

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.set('Access-Control-Allow-Origin', '*');
        res.send(products);
    } catch (err) {
        res.status(404).send(err);
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(product);
    } catch (err) {
        res.status(404).send(err);
    }
}

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.set('Access-Control-Allow-Origin', '*');
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(deletedProduct);
    } catch (err) {
        res.status(404).send(err);
    }
}

app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.post('/product', addProduct);
app.delete('/product/:id', deleteProductById);

app.listen(PORT, () => {
    console.log(`Funcionando en http://localhost:${PORT}`);
});


