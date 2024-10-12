# Product Listing Application

## Overview

This is a simple product listing application built using Laravel for the backend and React.js with TypeScript for the frontend. The application fetches a list of products from a third-party API via the Laravel backend and displays them on a dynamic, searchable product listing page.

## Features

- **Third-Party API Integration**: Fetch products from the [Dummy Products API](https://dummyjson.com/products).
- **Product Listing**: Displays product information including title, description, image, and price.
- **Dynamic Search**: Allows users to search products by typing keywords without reloading the page.
- **Responsive Design**: Uses Tailwind CSS to provide a mobile-friendly and responsive UI.

## Technologies Used

- **Backend**: Laravel (PHP)
- **Frontend**: React.js with TypeScript
- **UI Library**: Tailwind CSS
- **HTTP Client**: Axios (for API calls)
- **API**: [Dummy Products API](https://dummyjson.com/products)

## Installation and Setup

### Prerequisites

- PHP 8.x or higher
- Node.js (version 16.x or higher)
- Composer
- NPM or Yarn
- MySQL (or any other preferred database)

### Backend (Laravel) Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/leomer21/simple-product-listing-laravel-react.git product-listing
   cd product-listing
   ```
2. Install PHP dependencies:
    ```bash
    composer install
    ```
3. Set up environment variables:
- Copy .env.example to .env:
    ```bash
    cp .env.example .env
    ```
- Configure the .env file (database, API keys, etc.).

4. Generate the application key:
    ```bash
    php artisan key:generate
    ```
5. Serve the Laravel application:

    ```bash
    php artisan serve
    ```
    The Laravel backend will be running on http://localhost:8000.

### Frontend (React.js) Setup

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```
2. Install JavaScript dependencies:

    ```bash
    npm install
    # or if using yarn
    yarn install
    ```
3. Start the React application:

    ```bash
    npm start
    # or
    yarn start
    ```
    The frontend will be running on http://localhost:3000.

### CORS Configuration

To allow communication between the backend and frontend, make sure to enable CORS in the Laravel application. You can adjust the CORS settings in config/cors.php.

### API Integration

The Laravel backend uses the Dummy Products API to fetch products. The API endpoint is defined in the ```ProductController.php``` file, and the frontend fetches data from the backend endpoint: http://localhost:8000/api/products.

## Project Structure
```bash
product-listing/
├── backend/
│   ├── app/
│   ├── config/
│   ├── public/
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

### Backend (Laravel)
- API Route: /api/products
- Controller: ProductController.php handles the third-party API integration.

### Frontend (React.js with TypeScript)
- Main Component: ProductList.tsx contains the product listing and search logic.
- Styling: The project uses Tailwind CSS for a clean and responsive UI.

### Testing
- Ensure that both backend and frontend are running simultaneously.
- Navigate to http://localhost:5173 to view the product listing page.
- Type in the search bar to filter products dynamically.

## Future Improvements
- Debounced Search: Add debounce functionality to optimize search queries.
- Error Handling: Enhance error handling on both frontend and backend for better user experience.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes. Contributions are welcome!

## License

This project is licensed under the MIT License.

## Contact
- Author: Leomer Giray Romero
- Email: leomerromero42@gmail.com
- LinkedIn: https://linkedin.com/in/leomer-romero