import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import OrgCountryCard from "./org-country-card";

SwiperCore.use([Pagination, Autoplay]);

const OrganizationCountrySection = (props) => {
	return (
		<section id='country-id'>
			<div class='container'>
				<h2>{props.title}</h2>
				<h1>{props.secondaryTitle}</h1>
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
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						700: {
							slidesPerView: 2,
						},
						1000: {
							slidesPerView: 3,
						},
					}}
					className='mySwiper org-countries'>
					{props.countries.map((country, index) => {
						return (
							<SwiperSlide key={index}>
								<OrgCountryCard
									image={country.country_image}
									countryName={country.country_name}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default OrganizationCountrySection;
