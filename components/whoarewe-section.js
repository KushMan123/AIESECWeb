import ContentContainer from "./content";
import PhotoContainer from "./photo-container";

const WhoSection = (props) => {
	return (
		<section className='two-col' id='aiesec-id'>
			<div className='container'>
				<div className='content-parent'>
					<ContentContainer
						h2={props.secondarytitle}
						h1={props.title}
						para={props.content}
						hasButton={props.hasButton}
						buttonlink='/about'
						buttoncolor='blue'
						buttontext='Learn More'
					/>
				</div>
				<PhotoContainer imgsrc='images/omar-lopez-1qfy-jDc_jo-unsplash.jpg' />
			</div>
		</section>
	);
};

export default WhoSection;
