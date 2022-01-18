import Button from "./button";
import GridBox from "./gridbox";

const AIESECProcessSection = (props) => {
	return (
		<section id='aiesec-process-id'>
			<div className='container'>
				<div className='heading-parent'>
					<div className='title-par'>
						<h2>{props.title}</h2>
						<h1 className={props.fontcolor}>In {props.noOfSteps} Steps</h1>
					</div>
					<div className='interested-par'>
						<h2>{props.secondaryTitle}</h2>
						<h1 className={props.fontcolor}>{props.product}</h1>
						<Button
							link={props.link}
							color={props.buttoncolor}
							text={props.buttontext}
						/>
					</div>
				</div>
				<div className='content-parent'>
					{props.processes.map((process, index) => {
						return (
							<GridBox
								key={index}
								fontcolor={props.fontcolor}
								index={+index + 1}
								title={process.title}
								content={process.content}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default AIESECProcessSection;
