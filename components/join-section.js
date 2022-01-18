import ContentContainer from "./content";

const JoinSection = () => {
	const first_para =
		"Are you passioned and ambitious for making World better? If yes, AIESEC is the right place for you. Be a part of one of our teams and develop your leadership potential.";

	const second_para = "Create your own Leadership Story.";

	return (
		<section id='join-id'>
			<div className='container'>
				<ContentContainer
					h2='Explore | Gain | Create an Impact'
					h1='Join AIESEC'
					para={[first_para, second_para]}
					buttonlink='/youth/member'
					buttontext='Learn More'
					buttoncolor='blue'
				/>
			</div>
		</section>
	);
};

export default JoinSection;
