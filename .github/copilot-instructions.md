# Copilot Instructions for Moonwear

## Project Overview
Moonwear is a React + Vite web app for a Gen-Z-focused clothing store. It features product browsing, cart management, and a modern, pastel-themed UI. The app uses React Router for navigation, Tailwind CSS for styling, and localStorage for cart persistence.

## Key Architecture & Data Flow
- **Entry Point:** `src/App.jsx` sets up layout and navigation.
- **Routing:** Defined in `src/asset/MainRoutes.jsx` using React Router (`react-router-dom`). Main pages: Home, Product, Cart, Details, About.
- **Navigation Bar:** `src/asset/Navlink.jsx` provides top-level navigation.
- **Product Data:** Sourced from `src/asset/products.json`. All product listings and details reference this file.
- **Product Listing:** `src/pages/Card.jsx` displays products and handles `Add to Cart` logic. Cart items are stored in `localStorage` under `cartItems`.
- **Cart:** `src/pages/Cart.jsx` reads from `localStorage`, allows item removal, and displays cart contents.
- **Product Details:** `src/pages/Details.jsx` shows individual product info and supports adding to cart.
- **Home Page:** `src/pages/Home.jsx` features a trending slider (`Slide.jsx`) and a call-to-action for shopping.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (uses Vite)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint, config in `eslint.config.js`)
- **No built-in tests** (as of July 2025)

## Project-Specific Patterns & Conventions
- **Styling:** Tailwind CSS is used throughout. Custom pastel gradients and rounded corners are common.
- **Notifications:** `react-toastify` is used for user feedback (e.g., add/remove cart). Toasts are styled with custom colors and appear top-center.
- **Cart State:** Cart is managed via `localStorage` (not React context or Redux). Always update `localStorage` after cart changes.
- **Routing:** All navigation uses React Router. Product details are accessed via `/product/details/:id`.
- **Component Structure:** Pages are in `src/pages/`, shared UI in `src/asset/`.
- **No TypeScript** (JSX only).

## Integration Points & External Dependencies
- **React 19, React Router 7, Vite, Tailwind CSS, React Toastify, Swiper** (for product slider)
- **No backend/API integration**; all data is local/static.

## Examples
- **Add to Cart:** See `addToCart` in `Card.jsx` and `Details.jsx`.
- **Remove from Cart:** See `removeFromCart` in `Cart.jsx`.
- **Product Data Usage:** See `products.json` and how it's imported in `Card.jsx`, `Details.jsx`, `Slide.jsx`.

## Quick Reference
- **Main UI:** `App.jsx`, `MainRoutes.jsx`, `Navlink.jsx`
- **Pages:** `Home.jsx`, `Product.jsx`, `Card.jsx`, `Details.jsx`, `Cart.jsx`, `About.jsx`, `Slide.jsx`
- **Data:** `products.json`
- **Styling:** Tailwind classes, custom gradients
- **Notifications:** `react-toastify`

---
If any section is unclear or missing, please provide feedback so instructions can be improved.
