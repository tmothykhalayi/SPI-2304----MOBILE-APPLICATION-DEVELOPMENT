// validationMiddleware.js - Middleware for validating product data

const { body, validationResult } = require('express-validator');

const validateProduct = [
  body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
  body('description').isString().withMessage('Description must be a string').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number').notEmpty().withMessage('Price is required'),
  body('category').isString().withMessage('Category must be a string').notEmpty().withMessage('Category is required'),
  body('inStock').isBoolean().withMessage('inStock must be a boolean').optional(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateProduct,
  validate,
};