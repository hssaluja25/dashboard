# eCommerce Dashboard

Assignment submission by Harpreet for the Juspay UI Developer role.

This is a modern React dashboard application featuring a Dashboard page and an Orders page, built with Vite, React, Redux, and Recharts. The app demonstrates clean UI patterns, state management, and interactive data tables.

**Live Demo:** [https://dashboard-iota-gray-41.vercel.app/](https://dashboard-iota-gray-41.vercel.app/)

## Features

- **Dashboard Page:**  
  Overview of KPIs, revenue charts, projections, top-selling products, and more.

- **Orders Page:**  
  - **Searching:** Filter orders by any field.
  - **Sorting:** Sort orders by Order ID.
  - **Pagination:** Browse orders with page navigation.
  - **Dark & Light Theme:** Toggle between dark and light modes (theme stored in Redux).

- **Responsive Layout:**  
  Sidebars, cards, and charts adapt to different screen sizes.

## Project Structure

The codebase is organized for scalability and clarity:

- **src/atoms/**  
  Smallest reusable UI components (e.g., `KpiCard`, `UserAvatar`).

- **src/molecules/**  
  Composite components built from atoms (e.g., `Header`, `OrderTable`, `DashboardsPicker`).

- **src/pages/**  
  Top-level route components (`dashboard.jsx`, `Orders.jsx`).

- **src/models/**  
  Mock data and data models.

- **src/store/**  
  Redux store and slices (theme state).

- **src/assets/**  
  SVGs and static assets.

## Setup Instructions

1. Clone the repository:

```sh
git clone https://github.com/hssaluja25/dashboard.git
cd dashboard
```

2. Install dependencies:

```sh
npm install
```

3. Run the development server:

```sh
npm run dev
```

4. Build for production:

```sh
npm run build
```

5. Preview the production build:

```sh
npm run preview
```

## Tech Stack

- React 19 + Vite
- Redux Toolkit (for theme state)
- Recharts (for charts)
- React Router (for routing)
