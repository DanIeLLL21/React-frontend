import {Route,Routes} from 'react-router-dom'
import ProductList from './productList'
import ProductDetails from './productDetails'

function Router () {

	return (
		<Routes>
			<Route path="/products" element={<ProductList/>} />
			<Route path="/product/:id" element=<ProductDetails/>/>
		</Routes>
		)
}

export default Router;