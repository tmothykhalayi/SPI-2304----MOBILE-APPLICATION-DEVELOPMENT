
const { v4: uuidv4 } = require('uuid');
const Product = require('../models/Product');

// Get all products
exports.getAllProducts = (req, res) => {
    res.json(Product.getAll());
};

// Get a specific product by ID
exports.getProductById = (req, res) => {
    const product = Product.getById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

// Create a new product
exports.createProduct = (req, res) => {
    const newProduct = {
        id: uuidv4(),
        ...req.body
    };
    Product.create(newProduct);
    res.status(201).json(newProduct);
};

// Update an existing product
exports.updateProduct = (req, res) => {
    const updatedProduct = Product.update(req.params.id, req.body);
    if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const deleted = Product.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
};