import PhotoContainer from "./photo-container";
import ContentContainer from "./content";

const OrganizationSection = (props) => {
	const first_para =
		"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

	const second_para =
		"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

	return (
		<section className='two-col' id='org-id'>
			<div className='container'>
				<PhotoContainer imgsrc='images/israel-andrade-YI_9SivVt_s-unsplash.jpg' />
				<div className='content-parent'>
					<ContentContainer
						h2='For Organizations'
						h1='Hire Volunteers and Teachers'
						para={[first_para, second_para]}
						buttonlink='/organization'
						buttoncolor='blue'
						buttontext='Learn More'
						hasButton={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default OrganizationSection;
