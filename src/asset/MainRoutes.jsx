import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Details from "../pages/Details";

const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/about' element={<About />} />

				<Route path='/product' element={<Product />} />

				<Route path='/cart' element={<Cart />} />
				<Route path='/product/details/:id' element={<Details />} />
				<Route
					path='*'
					element={
						<h1 className='text-center text-2xl font-bold'>
							404 Not Found
						</h1>
					}
				/>
			</Routes>
		</div>
	);
};

export default MainRoutes;
