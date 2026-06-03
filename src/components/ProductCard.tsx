import { Link } from 'react-router-dom';
import type { Product } from '../api';
import { useProductContext } from '../context/ProductContext';

interface ProductCardType {
	product: Product
}

export const ProductCard = ({ product }: ProductCardType) => {
	const { id, image, title, category, price } = product;

	const { setSelectedProductId } = useProductContext();

	const formatLabel = (category: string): string => {
		return category.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	return (
		<Link
			to={`/product/${product.id}`}
			onClick={() => setSelectedProductId(id)}
			className="flex flex-col h-full bg-white rounded-lg shadow p-4 hover:shadow-lg relative"
		>
			<img
				className="h-40 w-full object-contain"
				src={image}
				alt={title}
			/>

			<div className="flex flex-col flex-1">
				<h4 className="mt-3 font-semibold line-clamp-2">
					{title}
				</h4>

				<p className="absolute top-0 right-3 pl-2 pr-2 p-1 bg-amber-700 rounded-2xl text-xs text-white">
					{formatLabel(category)}
				</p>

				<div className="mt-auto pt-3">
					<span className="font-bold">£{price}</span>
				</div>
			</div>

		</Link>
	)

}