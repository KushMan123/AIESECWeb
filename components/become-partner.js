import ContentContainer from "./content";

const BecomePartner = () => {
	const first_para =
		"AIESEC allows young people to live relevant professional teamexperiences that supplements what is being pursued in their university. It excel their skills by giving them the opportunity to learn, the freedom to fail and the resilience to evolve";

	const second_para =
		"Our network gives you instant access to young talent from over 120 countries and territories from all around the world.";

	return (
		<section id='join-id'>
			<div className='container'>
				<ContentContainer
					h2='Gain Access to International Talent Pool'
					h1='Become a Partner'
					para={[first_para, second_para]}
					buttonlink='https://auth.aiesec.org/organisations/sign_up?country=#signup'
					buttontext='Become a Partner'
					buttoncolor='blue'
				/>
			</div>
		</section>
	);
};

export default BecomePartner;
