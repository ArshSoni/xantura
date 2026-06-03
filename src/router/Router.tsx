import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import { ProductDetailPage } from '../pages/ProductDetailPage';
import { DashboardPage } from '../pages/DashboardPage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<DashboardPage />}
				/>
				<Route
					path="/product/:id"
					element={<ProductDetailPage />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router;