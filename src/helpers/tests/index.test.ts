import { filterProductsBySearchTerm, filterProductsBySortOrder, formatCategory, getCategoryColour } from '../../helpers';

const products = [
	{
		id: 1,
		title: 'Laptop',
		price: 10,
		category: 'electronics',
		image: '',
		description: 'gaming laptop',
		rating: {
			count: 5,
			rate: 2
		}
	},
	{
		id: 2,
		title: 'Jacket',
		price: 120,
		category: "men's clothing",
		image: '',
		description: 'New clothing item',
		rating: {
			count: 5,
			rate: 2
		}
	}
];

describe('helpers', () => {
	describe('formatCategory', () => {
		it('formats category labels to uppercase of each first character', () => {
			expect(formatCategory("men's clothing")).toBe("Men's Clothing");
		});
	});

	describe('getCategoryLabel', () => {
		it('returns default value if not a captured case', () => {
			expect(getCategoryColour('hello')).toBe('bg-gray-600');
		})
	});

	describe('filterBySearchTerm', () => {
		it('filters products by search term', () => {
			const result = filterProductsBySearchTerm(products, 'ket');

			expect(result).toHaveLength(1);
			expect(result[0].title).toBe('Jacket');
		});

		it('should return all products if no searchTerm provided', () => {
			const result = filterProductsBySearchTerm(products, '');
			expect(result).toHaveLength(2);
		});
	});

	describe('filterBySortOrder', () => {
		it('sorts the array based on order selection', () => {
			const result = filterProductsBySortOrder(products, 'desc');

			expect(result[0].price).toBe(120);
		});

		it('should not sort the array if no sort order provided', () => {
			const result = filterProductsBySortOrder(products, '');

			expect(result).toBe(products);
			expect(result[0].price).toBe(10);
		})
	})

})