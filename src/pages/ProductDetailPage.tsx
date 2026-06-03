import { useParams, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { Spinner } from '../components/Spinner';

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

	if ( !foundProduct ) {
		return (
			<div className="p-6">Product not found</div>
		)
	}
	return (
		<section className="min-h-screen flex flex-col items-center justify-center">
			<div className="w-full max-w-[700px] p-8 border-2 border-gray-100 rounded-2xl shadow">
				<Link to="/" className="hover:underline cursor text-left w-full" onClick={() => setSelectedProductId(null)}>Back to products</Link>

				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-5">
					<img
						src={foundProduct.image}
						alt={foundProduct.title}
						className="w-64 h-64 object-contain"
					/>
					<div className="text-left">
						<h1 className="text-3xl font-bold">{foundProduct.title}</h1>
						<p className="mt-4 text">{foundProduct.description}</p>
						<p className="mt-4 text-xl">£{foundProduct.price}</p>
					</div>
				</div>
			</div>

		</section>
	)
}