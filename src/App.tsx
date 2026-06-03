import { useState, useMemo } from 'react'
import './App.css'

import { useProducts } from './hooks/useProducts'
import { ProductCard } from './components/ProductCard';
import { SearchBar } from './components/SearchBar';

function App() {
  const [searchText, setSearchText] = useState('');

  const { products, loading, error } = useProducts();

  console.log(products, error, loading);

  const filter = useMemo(() => {
    if ( !products ) return [];

    if (searchText) {
      return [...products].filter(p => p.title.toLowerCase().includes(searchText));
    }

    return products;
  }, [products, searchText])

    const renderProducts = useMemo(() => {
    if ( !filter ) return;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filter.map(p => <ProductCard product={p} /> )}
      </div>
    )
  }, [filter]);

  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>There was an issue getting the products, please try again later.</p>
  }

  return (
    <>
      <section id="center">
        <SearchBar value={searchText} onChange={setSearchText}/>
        {renderProducts}
      </section>
    </>
  )
}

export default App
