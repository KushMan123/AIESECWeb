import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import prisma from "../lib/prisma";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Experience from "../components/experience";
import WhoSection from "../components/whoarewe-section";
import YouthSection from "../components/youth-section";
import OrganizationSection from "../components/organization-section";
import JoinSection from "../components/join-section";
import PartnerSection from "../components/partner-section";
import Footor from "../components/footor";

const Homepage = (props) => {
	//Navgation Status Condition
	const active_status = {
		home: true,
		youth: false,
		organization: false,
		about: false,
		hover_color: "blue",
	};
	//Heading Section Paragraph Text
	const headng_para =
		"'Differentiate yourself and empower your journey with a unique exchange experience where you can try, fail and succeed. You can intern and volunteer abroad while being a part of a global youthleadership movement.'";

	const content_para =
		"AIESEC is a global platform for young people to explore and develop their leadership potential. We are a non-political, independent, not-for-profit organisation run by students and recent graduates of institutions of higher education. Its members are interested in world issues, leadership and management";

	//Content for Experience Section
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
				header_id='landing'
				typewrite={true}
				firstline='Every Experience'
				secondline='["makes you grow.","teaches you something.","is of value."]'
				paratext={[headng_para]}
				button={[
					{
						link: "https://aiesec.org",
						color: "blue",
						text: "Start Here",
					},
				]}
			/>
			<Experience
				contents={experience}
				buttoncolor='blue'
				buttontext='Start Here'
			/>
			<WhoSection
				title='AIESEC'
				secondarytitle='Who are We'
				content={[content_para]}
				hasButton={true}
			/>
			<YouthSection />
			<OrganizationSection />
			<JoinSection />
			<PartnerSection contents={props.partner} />
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

	const partner = await prisma.partners.findMany();

	return { props: { experienceContent, partner } };
}

export default Homepage;
