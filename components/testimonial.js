import TestimonialContent from "./testimonial-content";
import TestimonialImage from "./testimonial-image";

const Testimonial = (props) => {
	return (
		<div class='two-col'>
			<TestimonialImage color={props.color} image={props.content.image} />
			<TestimonialContent
				testimonial={props.content.testimonial}
				name={props.content.name}
				product={props.content.product_name}
				country={props.content.country}
				foryouth={props.foryouth}
				position={props.content.position}
				company={props.content.company}
			/>
		</div>
	);
};

export default Testimonial;
