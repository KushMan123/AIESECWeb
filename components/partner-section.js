import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const PartnerSection = (props) => {
	return (
		<section id='partners-id'>
			<div className='container'>
				<h2>Our</h2>
				<h1>National Partners</h1>
				<Swiper
					loop={true}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					slidesPerView={5}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						400: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						600: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
						1000: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
					className='mySwiper'>
					{props.contents.map((partner, index) => {
						return (
							<SwiperSlide>
								<div class='owl-img-par' key={index}>
									<img
										src={partner.partner_image}
										class='img-responsive'
										alt={partner.partner_name}
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default PartnerSection;
