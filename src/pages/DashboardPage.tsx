import { useState, useMemo } from 'react';
import { useProducts, type ProductType } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { Filters, type SortType } from '../components/Filters';

export const DashboardPage = () => {
	const [searchText, setSearchText] = useState('');
	const [filterType, setFilterType] = useState<SortType | ''>('');

  const { products, loading, error } = useProducts();


	const filteredProducts = useMemo(() => {
		if ( !products ) return [];

		const filtered = [...products]
			.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))

		switch (filterType) {
			case 'asc':
				return [...filtered].sort((a, b) => a.price - b.price);
			case 'desc':
				return [...filtered].sort((a, b) => b.price - a.price);
			default:
				return filtered;
		}
	}, [products, searchText, filterType])

  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>There was an issue getting the products, please try again later.</p>
  }

  return (
    <>
      <section id="center">
				<div className="flex gap-4 mb-6 justify-center">
					<SearchBar value={searchText} onChange={setSearchText}/>
					<Filters value={filterType} onChange={setFilterType} />
				</div>


        {filteredProducts.length === 0 ? (
					<div>No results found</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{filteredProducts.map((p: ProductType) =>
							<ProductCard key={p.id} product={p} />
						)}
					</div>
				) }
      </section>
    </>
  )
}