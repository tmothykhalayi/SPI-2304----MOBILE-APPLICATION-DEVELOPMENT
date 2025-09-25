// src/app.js - Initializes the Express application, sets up middleware, and imports routes

const express = require('express');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware setup
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;