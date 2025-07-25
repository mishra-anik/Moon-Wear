import products from "../asset/products.json";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative } from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-creative";

export default function ProductCardSlider() {
	return (
		<div className='w-full flex justify-center py-10 bg-gradient-to-br from-pink-50 to-blue-50'>
			<Swiper
				grabCursor={true}
				effect='creative'
				creativeEffect={{
					prev: {
						shadow: false,
						translate: [0, 0, -400],
						scale: 0.85,
					},
					next: {
						shadow: false,
						translate: [0, 0, -400],
						scale: 0.85,
					},
				}}
				modules={[EffectCreative]}
				className=' w-[280px] h-[360px]'
			>
				{products.map((item) => (
					<SwiperSlide
						key={item.id}
						className='flex justify-center items-center'
					>
						<div
							className='relative w-full h-full bg-cover bg-center rounded-2xl overflow-hidden '
							style={{
								backgroundImage: `url(${item.img})`,
							}}
						>
							{/* Dark overlay for readability */}
							<div className='absolute inset-0 bg-gradient-to-b from-black/10 to-transparent'></div>

							{/* Content */}
							<div className='absolute inset-0 flex flex-col justify-end p-4'>
								<Link to={`/product/details/${item.id}`}>
									<h3 className='text-white text-lg font-bold text-center drop-shadow-md hover:underline decoration-pink-300'>
										{item.type}
									</h3>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
