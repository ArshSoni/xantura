
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