const TestimonialContent = (props) => {
	return (
		<div class='test-parent'>
			<p>{props.testimonial}</p>
			<h2>{props.name}</h2>
			{props.foryouth ? (
				<p>
					{props.product} | {props.country}
				</p>
			) : (
				<p>
					{props.position} | {props.company}
				</p>
			)}
		</div>
	);
};

export default TestimonialContent;
