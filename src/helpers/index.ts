import type { Product } from "../api";
import type { SortType } from "../components/Filters";

/**
 * Returns uppercase first character of each word for category
 *
 * Could also be done via css
 */
export const formatCategory = (category: string): string => {
	return category.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export const getCategoryColour = (category: string): string => {
	switch (category.toLowerCase()) {
		case 'electronics':
			return 'bg-blue-600';
		case 'jewelery':
			return 'bg-purple-600';
		case "men's clothing":
			return 'bg-green-600';
		case "women's clothing":
			return 'bg-pink-600';
		default:
			return 'bg-gray-600';
	}
}

export const filterProductsBySearchTerm = (products: Product[], searchTerm: string): Product[] => {
	if ( !products ) return [];

	const filtered = [...products]
		.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return filtered;
}

export const filterProductsBySortOrder = (products: Product[], sortOrder: SortType | ''): Product[] => {
	if ( !products ) return [];

	switch (sortOrder) {
		case 'asc':
			return [...products].sort((a, b) => a.price - b.price);
		case 'desc':
			return [...products].sort((a, b) => b.price - a.price);
		default:
			return products;
	}
}