# ecommerce-koa-app

## Overview
This project is a Koa.js application that serves as an e-commerce API for managing products. It allows users to perform CRUD operations on products and provides a simple HTML interface for viewing product details.

## Project Structure
```
ecommerce-koa-app
├── src
│   ├── app.js                     # Entry point of the application
│   ├── products.json              # JSON file containing product data
│   ├── controllers                # Contains controller functions for handling requests
│   │   └── productsController.js   # Controller for product-related operations
│   ├── middleware                 # Contains middleware functions
│   │   └── validateInput.js       # Middleware for validating product input
│   ├── routes                     # Contains route definitions
│   │   └── products.js            # Routes for product-related operations
│   ├── utils                      # Utility functions
│   │   └── generateProducts.js     # Function to generate fake product data
│   └── views                      # EJS templates for rendering HTML
│       ├── product.ejs            # Template for displaying a single product
│       └── products.ejs           # Template for displaying a list of products
├── package.json                   # NPM configuration file
└── README.md                      # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-koa-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Generate initial product data:
   ```
   node src/utils/generateProducts.js
   ```

4. Start the application:
   ```
   node src/app.js
   ```

5. Access the application in your browser at `http://localhost:3000/api/products`.

## Usage
- **GET /api/products**: Retrieve a list of all products.
- **GET /api/product/:id**: Retrieve a single product by ID.
- **POST /api/products**: Create a new product (requires valid input).
- **PUT /api/product/:id**: Update an existing product (requires valid input).
- **DELETE /api/product/:id**: Delete a product by ID.

## Notes
- Ensure that you have Node.js and npm installed on your machine.
- The project uses the `yup` library for input validation and `faker` for generating fake product data.
- The views are rendered using EJS templates, which can be customized as needed.