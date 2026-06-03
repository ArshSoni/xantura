// import { useState } from 'react'
import './App.css'

import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts();

  console.log(products, error, loading);

  return (
    <>
      <section id="center">
        {loading && <p>Loading</p>}
        {error && <p>There was an issue getting the products, please try again later.</p>}

        {products && products.length > 0 && <p>Data loaded</p>}
      </section>
    </>
  )
}

export default App
