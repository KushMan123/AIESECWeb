import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CountryCard from "./country-card";

SwiperCore.use([Autoplay, Navigation]);

const RecommendedCountriesSection = (props) => {
	function handleClick(event) {
		var faq = event.target;
		while (true) {
			console.log(faq);
			if (faq.classList.contains("swiper-slide")) {
				var contentpar = faq.childNodes[1];
				console.log(contentpar);
				contentpar.classList.toggle("country-content-par-appear");
				break;
			} else {
				faq = faq.parentNode;
			}
		}
	}
	return (
		<section id='country-id' className={props.class}>
			<div className='container'>
				<h2>Countries We</h2>
				<h1>Recommend</h1>
				<Swiper
					loop={true}
					navigation={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					spaceBetween={30}
					slidesPerView={2}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						765: {
							slidesPerView: 2,
						},
					}}
					className={`mySwiper countries ${props.hoverClass}`}>
					{props.countries.map((country) => {
						return (
							<SwiperSlide onClick={handleClick}>
								<CountryCard
									image={country.country_image}
									name={country.country_name}
									summary={country.country_summary}
									backColor={props.backColor}
									flightCost={country.flight_cost}
									visaCost={country.visa_cost}
									accomodationCost={country.accomodation_cost}
									additionalCost={country.additional_cost}
									opplink={country.Opportunity_link}
									buttoncolor={props.buttoncolor}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default RecommendedCountriesSection;
