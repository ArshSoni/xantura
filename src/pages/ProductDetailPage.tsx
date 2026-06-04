import { useParams, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { Spinner } from '../components/Spinner';
import { formatCategory, getCategoryColour } from '../helpers';

export const ProductDetailPage = () => {
	const { id } = useParams();
	const {
		products,
		productsLoading: loading,
		setSelectedProductId
	} = useProductContext();

	const foundProduct = products?.find(p => p.id === Number(id));

	if ( loading ) {
		return <Spinner />
	}

	return (
		<section className="min-h-screen flex flex-col items-center justify-center left-0 right-0 fixed">
			<div className="w-full max-w-175 p-8 border-2 border-gray-100 rounded-2xl shadow relative">
				<Link to="/" className="hover:underline cursor text-left w-full" onClick={() => setSelectedProductId(null)}>Back to products</Link>

				{!foundProduct && <div className='text-center'>Product not found</div>}

				{foundProduct && (
					<div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-5">
						<img
							src={foundProduct.image}
							alt={foundProduct.title}
							className="w-64 h-64 object-contain"
						/>
						<div className="text-left">
							<h1 className="text-3xl font-bold">{foundProduct.title}</h1>
							<p className={`absolute top-8 right-3 pl-2 pr-2 p-1 rounded-2xl text-xs text-white ${getCategoryColour(foundProduct.category)}`}>{formatCategory(foundProduct.category)}</p>
							<p className="mt-4 text">{foundProduct.description}</p>
							<p className="mt-4 text-xl">£{foundProduct.price.toFixed(2)}</p>
						</div>
					</div>
				)}
			</div>

		</section>
	)
}