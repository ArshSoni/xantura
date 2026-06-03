import { useParams, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

export const ProductDetailPage = () => {
	const { id } = useParams();
	const {
		products,
		productsLoading: loading,
		setSelectedProductId
	} = useProductContext();

	const foundProduct = products?.find(p => p.id === Number(id));

	if ( loading ) {
		return <p>Loading product</p>
	}

	if ( !foundProduct ) {
		return (
			<div className="p-6">Product not found</div>
		)
	}
	return (
		<div>
			<Link to="/" className="underline" onClick={() => setSelectedProductId(null)}>Back</Link>
			<img src={foundProduct.image} alt={foundProduct.title} />

			<h1 className="text-3xl font-bold mt-6">{foundProduct.title}</h1>
			<p className="mt-4">{foundProduct.description}</p>
			<p className="mt-4 text-xl">£{foundProduct.price}</p>
		</div>
	)
}