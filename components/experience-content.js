import Button from "./button";

const ExperienceContent = (props) => {
	return (
		<div className='experience'>
			<div id={props.imgid}>
				<img className='img-responsive' src={props.imgsrc} />
			</div>
			<p>{props.content}</p>
			<Button
				link={props.buttonlink}
				text={props.buttontext}
				color={props.buttoncolor}
			/>
		</div>
	);
};

export default ExperienceContent;
