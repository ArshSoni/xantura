import { useState, useMemo } from 'react'
import './App.css'

import { useProducts } from './hooks/useProducts'
import { ProductCard } from './components/ProductCard';

function App() {
  const { products, loading, error } = useProducts();

  console.log(products, error, loading);

  const renderProducts = useMemo(() => {
    if ( !products ) return;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard product={p} /> )}
      </div>
    )
  }, [products])

  return (
    <>
      <section id="center">
        {loading && <p>Loading</p>}
        {error && <p>There was an issue getting the products, please try again later.</p>}

        {renderProducts}
      </section>
    </>
  )
}

export default App
