import { Link } from 'react-router-dom';
import type { Product } from '../api';
import { useProductContext } from '../context/ProductContext';

interface ProductCardType {
	product: Product
}

export const ProductCard = ({ product }: ProductCardType) => {
	const { id, image, title, category, price } = product;

	const { setSelectedProductId } = useProductContext()

	return (
		<Link
			to={`/product/${product.id}`}
			onClick={() => setSelectedProductId(id)}
			className="flex flex-col h-full bg-white rounded-lg shadow p-4 hover:shadow-lg"
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

				<p className="text-sm text-gray-500">
					{category}
				</p>

				<div className="mt-auto pt-3">
					<span className="font-bold">£{price}</span>
				</div>
			</div>

		</Link>
	)

}