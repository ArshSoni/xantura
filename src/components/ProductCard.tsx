import { Link } from 'react-router-dom';
import type { Product } from '../api';

interface ProductCardType {
	product: Product
}

export const ProductCard = ({ product }: ProductCardType) => {
	const { image, title, category, price } = product;

	return (
		<Link
			to={`/product/${product.id}`}
			className="flex flex-col items-stretch bg-white rounded-lg shadow p-4 hover:shadow-lg">
			<img
				className="h-40 w-full object-contain"
				src={image}
				alt={title}
			/>

			<h4 className="mt-3 font-semibold">{title}</h4>
			<p className="text-sm">{category}</p>

			<div className="mt-2">
				<span className="font-bold">£{price}</span>
			</div>
		</Link>
	)

}