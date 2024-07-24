`Ecommerce Backend API Documentation`

# Tech Stack And Tools

-   `Node.js`: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.
-   `Express.js`: A fast, unopinionated, minimalist web framework for Node.js, used for building APIs and web applications.
-   `MongoDB`: A NoSQL database used for storing data in a flexible, JSON-like format.
-   `Mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to model application data and interact with the database.
-   `Render`: A cloud platform for deploying and scaling web applications, providing simplicity and scalability.
-   `Stripe`: A payment gateway used to facilitate secure online payments between customers and Admin.
-   `Multer`: A middleware used to handle file uploads in Node.js applications, used to upload images and files to the server.
-   `Nodemailer`: A module used to send emails from the application to users for account verification, order confirmation, and other events.
-   `Winston`: A logging library used to log application behavior and performance to track errors and debug issues.
-   `Morgan`: An HTTP request logger middleware used to log HTTP requests and responses for debugging and monitoring.


## Core Features

- `User Authentication`: Authenticates users using JWT (JSON Web Tokens).
- `Product Management`: Allows Admin to create, update, and delete products.
- `Product Listing`: Displays products with details such as name, price, description, and images.
- `Shopping Cart`: Enables customers to add products to a cart, view the cart, and proceed to checkout.
- `Order Management`: Allows Admin to manage orders, view order details, and update order status.
- `Payment Gateway Integration`: Integrates with Stripe for secure online payments between customers and Admin.
- `User Profile`: Allows users to manage their profiles, update personal information, and view order history.
- `Search and Filter`: Enables customers to search for products based on keywords, categories, and other criteria.
- `Product Reviews`: Allows customers to leave reviews and ratings for products.
- `Order Tracking`: Enables customers to track the status of their orders.

## Additional Features

- `Email Notifications`: Sends automated email notifications to users for account verification, order confirmation, and other events.
- `Logging and Monitoring`: Includes logging functionality using Winston and Morgan to track application behavior and performance.
- `Error Handling`: Implements error handling mechanisms to catch and handle exceptions gracefully, providing informative error messages to users.
- `API Documentation`: Provides comprehensive documentation for APIs using tools like Swagger to facilitate code maintenance and collaboration.
- `Code Version Control`: Utilizes version control systems such as Git to track code changes.
- `Environment Configuration`: Utilizes environment variables to manage configuration settings and sensitive information, ensuring security and flexibility.

# Architecture 

The backend follows a modular, scalable, and maintainable architecture, Express.js, and MongoDB. The architecture is designed to ensure code reusability, separation of concerns, and scalability to accommodate future growth and changes in the application's requirements.

## Model-View-Controller (MVC) Pattern

The backend architecture of `ecommerce` follows the Model-View-Controller (MVC) pattern, which divides the application into three main components:

-   `Models`: Represents the data structure of the application, interacts with the database using Mongoose, and defines the schema for each resource.
-   `Controllers`: Processes incoming requests, interacts with services, and returns responses to clients.
-   `Routes`: Defines the API endpoints, maps HTTP methods to controller actions, and provides a standardized interface for clients to interact with the application.

## Database Schema

The database used for `ecommerce` is MongoDB, a NoSQL database that stores data in a flexible, JSON-like format.

The database schema for `ecommerce` consists of the following collections:

-   `Users`: Stores user information such as name, email, password, and order history.
-   `Products`: Stores product information such as name, price, description, images, and seller details.
-   `Orders`: Stores order information such as customer details, product details, order status, and payment details.
-   `Reviews`: Stores review information such as product ID, customer ID, rating, comment, and timestamps.
-   `Carts`: Stores cart information such as user ID, product ID, quantity, and total cart price.
-   `Categories`: Stores category information such as name, description, and subcategories.
-   `Subcategories`: Stores subcategory information such as name, description, and parent category.
-   `Brands`: Stores brand information such as name, description, and products.
-   `Coupons`: Stores coupon information such as name, expiration date, discount amount, and usage limit.


## RESTful API Design 

The API design for `ecommerce` follows RESTful principles, with clear and predictable URL structures, HTTP methods, and status codes. The API endpoints are organized into resource-based routes, with each route corresponding to a specific resource or entity in the system. The API design includes the following key features:


-   `Resource-Based Routes`: Organizes API endpoints into resource-based routes such as /users, /products, and /orders.
-   `CRUD Operations`: Implements Create, Read, Update, and Delete operations for all resources using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.
-   `Pagination and Filtering`: Supports pagination and filtering for listing resources.
-   `Search and Sorting`: Allows users to search for resources based on keywords, categories, and other criteria, enhancing resource discovery.
-   `Error Handling`: Provides informative error messages, status codes, and error responses to help clients understand and handle errors effectively.

## Modular Structure

-   **Controllers**: Handle incoming requests, process data, and send responses to clients.
-   **Models**: Define data structures and schemas for MongoDB collections using Mongoose.
-   **Routes**: Define API endpoints, route requests to controllers, and handle HTTP methods.
-   **Middleware**: Implement custom middleware functions for authentication, validation, error handling, etc.
-   **Exceptions**: Define custom exception classes to handle errors and exceptions in the application.
-   **Utils**: Contain utility functions, helper classes, and third-party integrations to assist with common tasks.
-   **DB**: Contain data access objects (DAOs) to interact with the MongoDB database.
-   **Docs**: Define Swagger documentation files for API endpoints and models.

## Error Handling

The backend architecture of `ecommerce` includes a robust error handling mechanism to catch and handle exceptions gracefully, providing informative error messages, status codes, and error responses to clients. The error handling mechanism includes the following key features:

-   `Custom Exceptions`: Defines custom exception classes to handle errors and exceptions in the application, providing detailed error messages and status codes.
-   `Error Middleware`: Implements error middleware functions to catch and handle exceptions, log errors, and send error responses to clients.
-   `Global Error Handling`: Centralizes error handling logic in a global error handler middleware to ensure consistent error responses across the application.
-   `Error Logging`: Logs errors and exceptions to track application behavior, monitor performance, and debug issues effectively.
-   `Error Response Format`: Standardizes error responses with a consistent format, including status codes, error messages, error details, and stack traces.


## API Endpoints 

### Authentication

-  `POST /auth/signup`: Register a new user
-  `POST /auth/login`: Login a user
-  `POST /auth/logout`: Logout a user
-  `POST /auth/forgot-password`: Forgot password
-  `POST /auth/reset-password`: Reset password
-  `POST /auth/verify-reset-code`: Verify password reset code

### User

- `GET /users/me`: Get current user profile
- `PATCH /users/me`: Update current user profile
- `DELETE /users/me`: Delete current user profile

### Product

- `GET /products`: Get all products
- `GET /products/:id`: Get a product by id
- `POST /products`: Create a new product
- `PUT /products/:id`: Update a product
- `DELETE /products/:id`: Delete a product

### Cart

- `GET /cart`: Get current user's cart
- `POST /cart`: Add a product to the cart
- `PUT /cart/:id`: Update quantity of a product in the cart
- `DELETE /cart/:id`: Remove a product from the cart
- `DELETE /cart`: Clear the cart

### Order

- `GET /orders`: Get all orders
- `GET /orders/:id`: Get an order by id
- `POST /orders`: Create a new order
- `PUT /orders/:id`: Update an order
- `DELETE /orders/:id`: Delete an order

### Review

- `GET /reviews`: Get all reviews
- `GET /reviews/:id`: Get a review by id
- `POST /reviews`: Create a new review
- `PUT /reviews/:id`: Update a review
- `DELETE /reviews/:id`: Delete a review

# Project Structure

```bash
ecommerce/

├── server/
│   ├── controller/
│   │   ├──  addressController.js
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   ├── reviewController.js
│   │   ├── userController.js
│   │   ├── addressController.js
│   │   ├── couponController.js
│   │   ├── handlersFactory.js
│   │   ├── wishlistController.js
│   │   ├── categoryController.js
│   │   ├── subcategoryController.js
│   │   ├── brandController.js
│   ├── database/
│   │   ├── dbConnectoin.js
│   ├── middleware/
│   │   ├── errorMiddleware.js
│   │   ├── uploadImageMiddlewar.js
│   │   ├── validatorMiddleware.js
│   ├── model/
│   │   ├── cartModel.js
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   ├── reviewModel.js
│   │   ├── userModel.js
│   │   ├── couponModel.js
│   │   ├── wishlistModel.js
│   │   ├── categoryModel.js
│   │   ├── subcategoryModel.js
│   │   ├── brandModel.js
│   ├── routes/
│   │   ├── addressRoutes.js
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   ├── couponRoutes.js
│   │   ├── wishlistRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── subcategoryRoutes.js
│   │   ├── brandRoutes.js
│   ├── utils/
│   │   ├── dummyData/
│   │       ├── products.json
│   │       ├── seeder.js
│   │   ├── validators/
│   │       ├── authValidator.js
│   │       ├── cartValidator.js
│   │       ├── orderValidator.js
│   │       ├── productValidator.js
│   │       ├── reviewValidator.js
│   │       ├── userValidator.js
│   │       ├── categoryValidator.js
│   │       ├── subcategoryValidator.js
│   │       ├── brandValidator.js
│   │   ├── apiError.js
│   │   ├── apiFeatures.js
│   │   ├── createToken.js
│   │   ├── sendEmail.js
├── index.js
├── config.env
├── .gitignore
├── .prettierrc
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
```

# Getting Started 🚀

## Prerequisites 📋

-   Node.js installed on your local machine.
-   MongoDB installed on your local machine or MongoDB Atlas account.
-   Stripe account for payment gateway integration.

## Installation 🔧

1. Clone the repository:

```bash
git clone https://github.com/MangOo22/ecommerce-app.git

cd ecommerce-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `config.env` file in the root directory and add the following environment variables:

4. Start the application:

```bash
npm run dev
```
