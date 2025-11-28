# SwapX – Buy & Sell New & Used Products

SwapX is a modern, responsive marketplace platform built using Next.js (App Router). Users can buy and sell both new and second-hand products. The app includes Firebase Authentication, protected routes, product management, product details, sorting, search, and a clean responsive UI.

## Live Demo
https://swapx-clint-2cmx.vercel.app/

## Features

### Public Pages
- Home page with hero and sections
- Products listing page (search + sort)
- Product details page
- About page

### Authentication (Firebase)
- Email/Password login
- Google login
- Protected routes using a custom ProtectedRoute component

### Product Features
- Add new products
- Manage user-added products (view/delete)
- Search products
- Sort by price (Low → High / High → Low)
- Image preview modal
- Responsive UI

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- TailwindCSS
- Firebase Authentication
- SweetAlert2

### Backend
- Node.js + Express API + Mongodb

## Installation & Setup

### 1. Install dependencies
npm install

### 2. Create a `.env.local` file and add:
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_API_URL=https://your-backend-api.com

### 3. Start development server
npm run dev

### 4. Build for production
npm run build
npm start


## Route Summary

### Public Routes
/               → Home page
/about          → About page
/products       → Products list
/products/[id]  → Product details
/login          → Login page
/signup         → Signup page

### Protected Routes
/add-product      → Add product
/manage-products  → Manage user products
/profile          → Update user profile

## Requirements Completed
- Fully responsive landing page
- Sticky navbar with login/logout
- Firebase authentication (Google + Email)
- Protected add/manage product routes
- Product details page
- Sorting and search
- Clean, modern UI with TailwindCSS
- Firebase Auth integration
- Image preview modal

## Deployment
Frontend: Vercel,

Backend: Vercel 


