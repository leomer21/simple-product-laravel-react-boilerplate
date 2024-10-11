# Backend API for Product Listing

This repository contains the backend API built with **Laravel** for a product listing application. The API provides endpoints to fetch product data and supports searching for products.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

### Prerequisites

-   PHP >= 8.2
-   Composer
-   Laravel >= 11.9
-   MySQL or another database of your choice

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/product-listing-backend.git
    cd product-listing-backend
    ```
2. Install dependencies:
    ```bash
    composer install
    ```
3. Set up your .env file:
    ```bash
    cp .env.example .env
    ```
4. Generate the application key:
    ```bash
    php artisan key:generate
    ```
5. Start the development server:
    ```bash
    php artisan serve
    ```
