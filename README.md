# Xantura React Developer Test

This repository contains the Xantura mini product dashboard task built with React, TypeScript, Vite, React Router, and Tailwind-style utility classes.

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

Open the app in the browser at:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- This project is the Xantura React Developer Test submission.
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
- `npm run build` — build production assets
- `npm run preview` — preview production build
- `npm run lint` — run ESLint checks
- `npm test` — run tests
