import { useEffect, useState } from 'react';
import { getProducts, type Product } from '../api';

export const useProducts = () => {
	const [products, setProducts] = useState<Product[] | null>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setError(false);

				const productRes = await getProducts();
				if ( !productRes ) throw new Error();

				setProducts(productRes);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, []);

	return {
		products,
		loading,
		error
	}

}