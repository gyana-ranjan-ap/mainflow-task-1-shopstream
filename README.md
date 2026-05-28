# ShopStream Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Copy `.env.example` and add your MongoDB URI and JWT secret.

### 3. Start Server
```bash
npm run dev
```

Server runs on:
```bash
http://localhost:5000
```

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Products
- GET `/api/products`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`

### Cart
- POST `/api/cart`
- GET `/api/cart`
- DELETE `/api/cart/:productId`