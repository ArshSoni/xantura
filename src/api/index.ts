import axios from 'axios';

export type Rating = {
	count: number;
	rate: number;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	category: string;
	image: string;
	description: string;
	rating: Rating
}

export const getProducts = async (id?: string): Promise<Product[] | null> => {
	const allProductsUrl = 'https://fakestoreapi.com/products';
	const specificProductUrl = `https://fakestoreapi.com/products/${id}`;

	const url = id ? specificProductUrl : allProductsUrl

	try {
		const res = await fetch(url);
		if ( !res.ok ) throw new Error();

		const items = await res.json();

		if ( Array.isArray(items) ) return items;

		return [items]

	} catch (e: unknown ){
		console.error('Error', e);
		return null;
	}
}