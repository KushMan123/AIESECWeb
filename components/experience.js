import ExperienceContent from "./experience-content";

const Experience = (props) => {
	return (
		<section id='experience-id'>
			<div className='container'>
				<h1>Choose the Experience</h1>
				<div className='experience-parent'>
					{props.contents.map((content) => {
						return (
							<ExperienceContent
								key={content.imgid}
								imgid={content.imgid}
								imgsrc={content.imgsrc}
								content={content.content}
								buttonlink={content.buttonlink}
								buttoncolor={props.buttoncolor}
								buttontext={props.buttontext}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;
