import PhotoContainer from "./photo-container";
import ContentContainer from "./content";

const YouthSection = (props) => {
	const first_para =
		"Have you ever thought of making a difference to the world?";
	const second_para =
		"We provide a world of opportunities for you to have a unique entrepreneurial journey. We empower you to dream and think big as well as provide you the tools and resources to change it.";

	return (
		<section className='two-col' id='youth-id'>
			<div className='container'>
				<div className='content-parent'>
					<ContentContainer
						h2='For Youths'
						h1='Live the Experience'
						para={[first_para, second_para]}
						buttonlink='/youth'
						buttoncolor='blue'
						buttontext='Learn More'
						hasButton={true}
					/>
				</div>
				<PhotoContainer imgsrc='images/cristi-tohatan-XIBIC21QeZQ-unsplash.jpg' />
			</div>
		</section>
	);
};

export default YouthSection;
