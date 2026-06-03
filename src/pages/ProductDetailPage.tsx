import { useParams, Link } from 'react-router-dom';

import { useProducts } from '../hooks/useProducts';
import type { Product } from '../api';

export const ProductDetailPage = () => {
	const { id } = useParams();
	const { products } = useProducts();

	const foundProduct = products?.find((p: Product) => p.id === Number(id));

	if ( !foundProduct ) {
		return (
			<div className="p-6">Product not found</div>
		)
	}
	return (
		<div>
			<Link to="/" className="underline">Back</Link>
			<img src={foundProduct.image} alt={foundProduct.title} />

			<h1 className="text-3xl font-bold mt-6">{foundProduct.title}</h1>
			<p className="mt-4">{foundProduct.description}</p>
			<p className="mt-4 text-xl">£{foundProduct.price}</p>
		</div>
	)
}