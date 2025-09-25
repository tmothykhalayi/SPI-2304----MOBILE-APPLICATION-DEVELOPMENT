# Week 2 Express.js API

## Overview
This project is a RESTful API built using Express.js that implements standard CRUD operations for managing products. It includes proper routing, middleware implementation, and error handling.

## Project Structure
```
week-2-express-js
├── src
│   ├── app.js                # Initializes the Express application and sets up middleware
│   ├── server.js             # Entry point for the application, starts the server
│   ├── config
│   │   └── index.js          # Configuration settings (environment variables, etc.)
│   ├── controllers
│   │   └── productController.js # Handles CRUD operations for products
│   ├── middleware
│   │   ├── authMiddleware.js  # Authentication middleware
│   │   ├── errorMiddleware.js  # Global error handling middleware
│   │   ├── loggerMiddleware.js  # Request logging middleware
│   │   └── validationMiddleware.js # Validates incoming request data
│   ├── models
│   │   └── Product.js         # Defines the Product model
│   ├── routes
│   │   ├── index.js           # Main application routes
│   │   └── productRoutes.js    # Routes for product-related operations
│   └── utils
│       ├── errors.js          # Custom error classes
│       └── helpers.js         # Utility functions
├── .env                       # Environment variables
├── .env.example               # Example of required environment variables
├── .gitignore                 # Files and directories to ignore by Git
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd week-2-express-js
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and fill in the necessary environment variables.

4. Start the server:
   ```
   npm run dev
   ```

5. Access the API at `http://localhost:3000`.

## API Documentation
- **GET /api/products**: List all products
- **GET /api/products/:id**: Get a specific product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update an existing product
- **DELETE /api/products/:id**: Delete a product

## Usage Examples
- To create a new product, send a POST request to `/api/products` with the product data in the request body.
- To retrieve all products, send a GET request to `/api/products`.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.