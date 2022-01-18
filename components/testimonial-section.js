import Testimonial from "./testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const TestimonialSection = (props) => {
	return (
		<section id='testimonial-id'>
			<div class='container'>
				<h2>See what people are saying</h2>
				<h1 class={props.fontcolor}>Testimonials</h1>
				<Swiper
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					slidesPerView={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className='mySwiper'>
					{props.testimonials.map((testimonial, index) => {
						return (
							<SwiperSlide key={index}>
								<Testimonial
									content={testimonial}
									color={props.color}
									foryouth={props.foryouth}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default TestimonialSection;
