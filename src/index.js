require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Product = require('./model/products');

app.use(express.json());

// Read-- Mostrar todos los productos
app.get('/products', (req, res) => {
    Product.find()
        .then((result) => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    Product.findById(id)
    .then((result) => {
        res.set('Access-Control-Allow-Origin', '*')
        res.send(result)
    })
    .catch(err => res.status(404).send(err));
})
// Create -- Agregar productos
app.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() => {
            res.set('Access-Control-Allow-Origin', '*')
            res.status(201).send(product);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

//  Delete -- Borrar un producto

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});
