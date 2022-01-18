import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import prisma from "../../lib/prisma";
import NavBar from "../../components/nav-bar";
import Header from "../../components/header";
import Experience from "../../components/experience";
import PartnerSection from "../../components/partner-section";
import FAQs from "../../components/faq";
import TestimonialSection from "../../components/testimonial-section";
import Footor from "../../components/footor";
import BecomePartner from "../../components/become-partner";

const OrganizationPage = (props) => {
	const active_status = {
		home: false,
		youth: false,
		organization: true,
		about: false,
		hover_color: "blue",
	};
	const heading_para =
		"AIESEC offers talent solutions to a variety of organizations such as companies, start-ups, and NGOs to find and bring on board the right candidate for the job from our pool of global talents.We can help connect you with some of the brightest and most ambitious young minds from around the world.";

	const experience = [
		props.experienceContent.OrgGlobalVolunteer,
		props.experienceContent.GlobalTeacher,
	];

	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				logoImage={false}
				header_id='organization'
				typewrite={false}
				firstline='Hire Young Talents'
				secondline='with aiesec.'
				paratext={[heading_para]}
				button={[
					{
						link: "/organization/global-volunteer",
						color: "red",
						text: "Hire a Volunteer",
					},
					{
						link: "/organization/global-teacher",
						color: "orange",
						text: "Hire a Teacher",
					},
				]}
			/>

			<Experience
				contents={experience}
				buttoncolor='blue'
				buttontext='Start Here'
			/>
			<PartnerSection contents={props.partner} />
			<BecomePartner />
			<FAQs contents={props.faq} fontcolor='blue-font' />
			<TestimonialSection
				testimonials={props.testimonial}
				fontcolor='blue-font'
				color='blue'
				foryouth={false}
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
			isOrganizationGV: true,
			isOrganizationGTe: true,
		},
	});
	const testimonial = await prisma.organizationTestimonial.findMany({
		where: {
			tobeFeatured: true,
		},
	});
	const partner = await prisma.partners.findMany();
	return { props: { experienceContent, faq, testimonial, partner } };
}

export default OrganizationPage;
