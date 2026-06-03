import { useEffect, useState } from 'react';
import { getProducts, type Product } from '../api';

export const useProducts = (id?: string) => {
	const [products, setProducts] = useState<Product[] | null>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setError(false);

				const productRes = await getProducts(id);
				if ( !productRes ) throw new Error();

				setProducts(productRes);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, [id]);

	return {
		products,
		loading,
		error
	}

}