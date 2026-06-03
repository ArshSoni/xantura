import { useState, useMemo } from 'react'
import './App.css'

import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts();

  console.log(products, error, loading);

  const renderProducts = useMemo(() => {
    if ( !products ) return;

    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>{p.category}</p>
            <p>{p.image}</p>
            <p>{p.description}</p>
          </div>
        ))}
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
