import { describe, it, expect, vi } from 'vitest';

import { getProducts } from '../';

describe('getProducts', () => {
	it('returns products when api succeeds', async () => {
		const mockedProducts = [
      {
        id: 1,
        title: 'Laptop',
        price: 100,
        category: 'electronics',
        image: '',
        description: '',
        rating: {
          rate: 4.5,
          count: 100,
        },
      },
		];

		vi.spyOn(global, 'fetch').mockResolvedValue({
			ok: true,
			json: async () => mockedProducts,
		} as Response);

		const result = await getProducts();
		expect(result).toEqual(mockedProducts);
	})
})