import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const PhotoGallerySection = (props) => {
	return (
		<section id='gallery-id'>
			<div class='container'>
				<h2>What we are doing</h2>
				<h1 class={props.fontcolor}>Photo Gallery</h1>
				<Swiper
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className='mySwiper'>
					{props.photos.map((photo, index) => {
						return (
							<SwiperSlide key={index}>
								<img src={photo.photo} class='img-responsive' />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default PhotoGallerySection;
