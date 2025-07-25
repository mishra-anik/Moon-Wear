import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cartSlice";
const Cart = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (id) => {
		dispatch(removeFromCart(id));
		toast.success("Item removed from cart!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: "dark",
			style: {
				background: "#b388eb",
				color: "#fff",
				fontWeight: "600",
				borderRadius: "8px",
			},
		});
	};

	const handleShopNow = (item) => {
		dispatch(addToCart(item));
		toast.success(`${item.type} added to cart!`, {
			position: "top-center",
			autoClose: 1500,
			theme: "colored",
		});
	};

	const renderCartItems = () => (
		<div className='product-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
			{cartItems.map((item) => (
				<div
					className='product-card w-full bg-white/80 backdrop-blur-md border border-pink-100 rounded-xl shadow-md p-4 hover:shadow-lg transition-all'
					key={item.id}
				>
					<Link to={`/product/details/${item.id}`}>
						<img
							src={item.img}
							alt={item.type}
							className='w-full h-44 object-cover rounded-md mb-3'
						/>
					</Link>
					<h3 className='text-sm font-semibold text-gray-700 leading-tight'>
						{item.type}
					</h3>
					<p className='text-pink-600 font-bold text-sm mb-3'>
						₹{item.price}
					</p>

					<button
						onClick={() => handleShopNow(item)}
						className='w-full bg-gradient-to-r from-[#b388eb] to-[#ffa8b6] text-white py-2 rounded-full text-sm font-semibold shadow hover:shadow-md transition-all mb-2'
					>
						Shop Now
					</button>

					<button
						onClick={() => handleRemoveFromCart(item.id)}
						className='w-full border border-pink-400 text-pink-600 py-1.5 rounded-full text-sm font-medium hover:bg-pink-50 transition-all'
					>
						Remove from Cart
					</button>
				</div>
			))}
		</div>
	);

	return (
		<div className='cart-container p-6 bg-gradient-to-r from-[#ffe0f0] to-[#dbeafe] min-h-screen font-[Poppins]'>
			<h2 className='text-3xl font-extrabold mb-6 text-[#9a6be2] text-center'>
				Your Cart 🛍️
			</h2>

			{cartItems.length > 0 ? (
				renderCartItems()
			) : (
				<p className='text-center text-[#777] text-lg'>
					🧺 Your cart is empty
				</p>
			)}
		</div>
	);
};

export default Cart;
