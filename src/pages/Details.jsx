import { useParams } from "react-router-dom";
import products from "../asset/products.json";
import Card from "./Card";

const Details = () => {
	const { id } = useParams();
	const product = products.find((item) => item.id === id);
	return (
		<div>
			{product ? (
				<div className='max-w-xl mx-auto my-4  bg-gradient-to-r from-[#ffe0f0] to-[#dbeafe]  rounded-3xl shadow-lg p-6 font-[Poppins] text-[#222]'>
					<img
						src={product.img}
						alt={product.type}
						className='w-full h-80 object-contain rounded-2xl mb-4'
					/>

					<p className='text-sm text-[#777] mb-1'>
						<span className='font-medium'>Color:</span>{" "}
						{product.color}
					</p>

					<h2 className='text-2xl font-bold text-[#9a6be2] mb-2'>
						{product.type}
					</h2>

					<p className='text-lg font-semibold mb-3'>
						Price: ₹{product.price}
					</p>

					<p className='text-[#555] leading-relaxed mb-6'>
						{product.description}
					</p>

					<button className='bg-gradient-to-r from-[#b388eb] to-[#ffa8b6] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg transition'>
						Add to Cart
					</button>
				</div>
			) : (
				<p>Product not found</p>
			)}

			<Card />
		</div>
	);
};

export default Details;
