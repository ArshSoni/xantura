# Xantura React Developer Test

Xantura mini product dashboard task built with React, TypeScript, Vite, React Router, and Tailwind

## What this project includes

- Product list fetched from the Fake Store API
- Search and sort controls
- Responsive card grid layout
- Detail view on a separate route
- Shared state using React Context
- Loading, error, and empty states handled

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Notes

- The app uses client-side rendering and React Router for navigation.
- Shared UI state is managed in `src/context/ProductProvider.tsx`.
- Product data is fetched in `src/hooks/useProducts.ts`.

## Project structure

- `src/pages/` — page-level components
- `src/components/` — reusable UI components
- `src/context/` — shared state provider and hook
- `src/hooks/` — data-fetching hook
- `src/api/` — API definitions and fetch helpers
- `src/helpers/` — utility functions

## Helpful commands

- `npm run dev` — run development server
- `npm test` — run tests
