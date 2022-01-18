const TestimonialImage = (props) => {
	return (
		<div class='img-parent'>
			<div class={`big-circle ${props.color}`}></div>
			<div class='btm-small-circle'></div>
			<div class={`top-small-circle ${props.color}`}></div>
			<div class='img-container'>
				<img src={props.image} class='img-responsive' />
			</div>
		</div>
	);
};

export default TestimonialImage;
