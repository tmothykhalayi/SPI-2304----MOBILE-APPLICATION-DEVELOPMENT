// filepath: week-2-express-js/src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/products - List all products
router.get('/products', productController.getAllProducts);

// GET /api/products/:id - Get a specific product by ID
router.get('/products/:id', productController.getProductById);

// POST /api/products - Create a new product
router.post('/products', authMiddleware, validationMiddleware, productController.createProduct);

// PUT /api/products/:id - Update an existing product
router.put('/products/:id', authMiddleware, validationMiddleware, productController.updateProduct);

// DELETE /api/products/:id - Delete a product
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;