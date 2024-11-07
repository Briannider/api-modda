require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Product = require('./model/products');

app.use(express.json());

// Read-- Mostrar todos los productos
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.set('Access-Control-Allow-Origin', '*');
        res.send(products);
    } catch (err) {
        res.status(404).send(err);
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(product);
    } catch (err) {
        res.status(404).send(err);
    }
})

// Create -- Agregar productos
app.post('/product', async (req, res) => {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.set('Access-Control-Allow-Origin', '*');
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete -- Borrar un producto
app.delete('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(deletedProduct);
    } catch (err) {
        res.status(404).send(err);
    }
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});

