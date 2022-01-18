import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import prisma from "../../lib/prisma";
import NavBar from "../../components/nav-bar";
import Header from "../../components/header";
import Experience from "../../components/experience";
import WhyAIESECSection from "../../components/why-experience-aiesec-section";
import JoinSection from "../../components/join-section";
import FAQs from "../../components/faq";
import TestimonialSection from "../../components/testimonial-section";
import Footor from "../../components/footor";

const YouthPage = (props) => {
	const active_status = {
		home: false,
		youth: true,
		organization: false,
		about: false,
		hover_color: "blue",
	};

	const heading_para =
		"We provide you with the an opportunity to go abroad and intern/ volunteer in either a Company, startup or an NGO. Have a cross cultural and a global experience based on your interests and skillsets.";

	const secpnd_para = "One Step away from your Adventure";

	const experience = [
		props.experienceContent.GlobalVolunteer,
		props.experienceContent.GlobalTalent,
		props.experienceContent.Member,
	];

	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				logoImage={false}
				header_id='youths'
				typewrite={false}
				firstline='It takes change'
				secondline='to be the change'
				paratext={[heading_para, secpnd_para]}
				button={[
					{
						link: "/youth/global-volunteer",
						color: "red",
						text: "Become a Volunteer",
					},
					{
						link: "/youth/global-talent",
						color: "green",
						text: "Become a Talent",
					},
					{
						link: "/youth/member",
						color: "blue",
						text: "Become a Member",
					},
				]}
			/>

			<Experience
				contents={experience}
				buttoncolor='blue'
				buttontext='Start Here'
			/>
			<WhyAIESECSection />
			<JoinSection />
			<FAQs contents={props.faq} fontcolor='blue-font' />
			<TestimonialSection
				testimonials={props.testimonial}
				fontcolor='blue-font'
				color='blue'
				foryouth={true}
			/>
			<Footor />
		</Fragment>
	);
};

async function getDataFromFile(filename) {
	const filePath = path.join(process.cwd(), "website-contents", filename);
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export async function getStaticProps() {
	const experienceContent = await getDataFromFile(
		"landing_experience_section.json"
	);
	const faq = await prisma.fAQs.findMany({
		where: {
			isYouthGV: true,
			isYouthGT: true,
		},
	});
	const testimonial = await prisma.youthTestimonial.findMany({
		where: {
			tobeFeatured: true,
		},
	});
	return { props: { experienceContent, faq, testimonial } };
}

export default YouthPage;
