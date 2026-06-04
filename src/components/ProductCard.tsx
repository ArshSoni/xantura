import { Link } from 'react-router-dom';
import type { Product } from '../api';
import { useProductContext } from '../context/ProductContext';
import { formatCategory, getCategoryColour } from '../helpers';

interface ProductCardType {
	product: Product
}

export const ProductCard = ({ product }: ProductCardType) => {
	const { id, image, title, category, price } = product;

	const { setSelectedProductId } = useProductContext();


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

				<p className={`absolute top-0 right-3 pl-2 pr-2 p-1 rounded-2xl text-xs text-white ${getCategoryColour(category)}`}>
					{formatCategory(category)}
				</p>

				<div className="mt-auto pt-3">
					<span className="font-bold">£{price.toFixed(2)}</span>
				</div>
			</div>

		</Link>
	)

}