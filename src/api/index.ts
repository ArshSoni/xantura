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

export const getProducts = async (): Promise<Product[] | null> => {
	const productsUrl = 'https://fakestoreapi.com/products';

	try {
		const res = await fetch(productsUrl);
		if ( !res.ok ) throw new Error();

		return await res.json();

	} catch (e: unknown ){
		console.error('Error', e);
		return null;
	}
}