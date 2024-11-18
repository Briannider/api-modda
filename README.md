# Modda API

This API provides a platform for managing and accessing a wide range of fashion products, including jackets, scarves, boots, hoodies, and beanies. Designed to work seamlessly with a web application, this API allows for robust handling of product data, categories, and search functionalities for a smooth and engaging user experience.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Products](#products)
  - [Categories](#categories)
  - [Search](#search)
- [Response Structure](#response-structure)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [License](#license)

---

## Features

- **Product Management**: Add, update, retrieve, and delete products in various fashion categories.
- **Category Browsing**: View fashion categories like jackets, scarves, boots, hoodies, and beanies.
- **Search Functionality**: Enable advanced search filters to locate products by category, price, size, and color.
- **Scalable Architecture**: Designed for scalability to handle high traffic through load balancing.
  
## Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Briannider/api-modda
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Environment Configuration**: Add your environment variables (e.g., `API_KEY`, `DATABASE_URL`) in a `.env` file.
4. **Run the API**:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST** `/auth/register`  
  Registers a new user.

- **POST** `/auth/login`  
  Authenticates a user and returns a token.

### Products

- **GET** `/products`  
  Retrieves a list of all products, with optional filters for category, size, color, and price.

- **GET** `/products/{id}`  
  Retrieves a single product by ID.

- **POST** `/products`  
  Adds a new product. Requires authentication and admin permissions.

- **PUT** `/products/{id}`  
  Updates an existing product by ID. Requires authentication and admin permissions.

- **DELETE** `/products/{id}`  
  Deletes a product by ID. Requires authentication and admin permissions.

### Categories

- **GET** `/categories`  
  Lists all available categories (e.g., jackets, scarves, boots).

### Search

- **GET** `/search?query={search_term}`  
  Searches for products by name or description. Filters can be applied.

## Response Structure

All responses follow this JSON format:

```json
{
  "success": true,
  "data": {},
  "message": "Request was successful."
}