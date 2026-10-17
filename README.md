# SHOP.CO — Modern E-Commerce Platform

A production-grade, highly responsive E-Commerce web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Implemented to 1:1 pixel accuracy from the official [Figma E-Commerce Design System](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1/E-commerce-Website-Template--Freebie---Community-?node-id=20-2&m=dev) adhering strictly to **Clean Architecture** and **SOLID Principles**.

---

## 🎨 Figma Design Reference

| Screen | Viewport | Figma Node ID | Link |
| :--- | :--- | :--- | :--- |
| **Homepage** | Desktop (1440px) | `20:2` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=20-2) |
| **Homepage** | Mobile (390px) | `35:740` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=35-740) |
| **Category / Catalog** | Desktop (1440px) | `26:855` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=26-855) |
| **Category / Catalog** | Mobile (390px) | `38:234` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=38-234) |
| **Mobile Filters Drawer**| Mobile (390px) | `38:679` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=38-679) |
| **Product Detail Page** | Desktop (1440px) | `1:2` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=1-2) |
| **Product Detail Page** | Mobile (390px) | `35:1062` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=35-1062) |
| **Cart Page** | Desktop (1440px) | `31:32` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=31-32) |
| **Cart Page** | Mobile (390px) | `39:1045` | [View Design](https://www.figma.com/design/ceH1xFOmkUPnrTD82YXwU1?node-id=39-1045) |

---

## ⚡ Core Features

* **Homepage (`/`)**:
  * Hero banner with high-resolution photography, headline typography, CTA, and real-time live stats counters.
  * Vector brand banner featuring Versace, Zara, Gucci, Prada, and Calvin Klein.
  * Dynamic showcases for **New Arrivals** and **Top Selling** with price, discount badges, and rating stars.
  * Interactive **Browse by Dress Style** grid (Casual, Formal, Party, Gym).
  * **Our Happy Customers** verified testimonials carousel with directional navigation.

* **Product Catalog & Filtering (`/category`)**:
  * Comprehensive desktop sidebar and mobile bottom-sheet drawer (`38:679`).
  * Real-time filtering by **Category**, **Price Range ($50–$300)**, **10 Color Swatches**, **Sizes (XX-Small to 4X-Large)**, and **Dress Styles**.
  * Sorting by Popularity, Price (Low to High / High to Low), and Highest Rating.
  * URL query-parameter synchronization and reusable pagination bar.

* **Product Detail Page (`/product/[id]`)**:
  * Multi-image thumbnail gallery with instant preview switcher.
  * Interactive color picker, size selector, and quantity stepper.
  * Add to cart flow with real-time feedback toast alert.
  * Tabbed information suite: **Product Details**, **Verified Customer Reviews (451)**, and **FAQs**.
  * Dynamic **"You Might Also Like"** recommendation engine.

* **Shopping Cart & Checkout (`/cart`)**:
  * Persistent global state (`CartContext` backed by `LocalStorageAdapter`).
  * Item deletion, quantity modifiers, and real-time order calculation.
  * Automated 20% discount calculation, delivery fees, and custom promo-code support.
  * Direct checkout flow with order confirmation screen.

* **Resilience & UX States**:
  * **Brand Favicon & App Icons:** Custom SVG vector favicon and Apple touch icon.
  * **Skeleton Loaders:** Tailored `loading.tsx` skeletons for root, catalog, PDP, and cart.
  * **Error Boundaries:** `error.tsx` catching runtime exceptions with recovery actions.
  * **404 Not Found:** Branded `not-found.tsx` with navigation shortcuts and recommended items.

---

## 🏛️ Architecture & SOLID Principles

The project follows strict **Clean Architecture** patterns:

```
src/
├── app/                  # Next.js App Router (Pages, Layout, Loading, Error, 404)
├── components/           # UI Presentation Layer (Single Responsibility)
│   ├── cart/            # Cart item row, order summary, confirmation
│   ├── category/        # Filter panels, drawer, pagination
│   ├── home/            # Hero, brands, dress style, testimonials
│   ├── layout/          # Navbar, top banner, footer, newsletter
│   ├── product/         # Product gallery, details, reviews
│   └── ui/              # Reusable atoms (ProductCard, RatingStars)
├── constants/            # Immutable domain configurations (Brands, Filters)
├── context/              # Application state providers (CartContext)
├── data/                 # Raw seed datasets
├── hooks/                # Business logic hooks (useProductFilters, usePagination)
├── lib/                  # Infrastructure adapters (LocalStorageAdapter)
├── services/             # Domain services (ProductService, PricingService)
└── types/                # Domain models and interfaces
```

### Applied Design Patterns:
1. **Repository Pattern (`ProductService`)**: Decouples UI components from raw data querying and filtering logic.
2. **Strategy Pattern (`PricingService`)**: Extensible discount calculation strategies without mutating cart consumers (Open/Closed Principle).
3. **Adapter Pattern (`LocalStorageAdapter`)**: Adheres to Dependency Inversion by providing safe client storage that gracefully handles SSR environments.
4. **Single Responsibility**: Each component manages exactly one presentation or layout concern.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router, Turbopack)
* **Library:** React 19
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React & Handcrafted Brand SVGs
* **Typography:** Fontshare Satoshi & Integral CF Display

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed.

### 2. Installation
```bash
git clone https://github.com/jihanurrahman33/shop.git
cd shop
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Linting
```bash
# Run ESLint validation
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License
MIT License. Built for demonstration and educational purposes.
