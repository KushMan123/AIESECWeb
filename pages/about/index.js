import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
// import prisma from "../../lib/prisma";
import NavBar from "../../components/nav-bar";
import Header from "../../components/header";
import WhoSection from "../../components/whoarewe-section";
import DataSection from "../../components/data-section";
import Footor from "../../components/footor";
import { prisma } from ".prisma/client";
import ContactUsSection from "../../components/contact-us";

const YouthPage = (props) => {
	const heading_para =
		"AIESEC is a Youth Leadership Movement and was established in 1948 after World War II, where seven youth across seven countries ad a dream of building cross-cultural understanding across nations. Now, we’re present in over 120 countries and territories and are still growing. Today, the world is still full of complex challenges that need better leadership to address them. Our belief is that responsible and entrepreneurial leadership can help us solve many of today’s challenges. Leaders who not only have the capabilities to create impact, but also the values that will guide their ethics and decision-making. From our early roots at the end of WWII, our vision begins with changing the world not only from the outside, but from the inside out through the leaders we develop.";

	const content_first_para =
		"AIESEC is a global platform for young people to explore and develop their leadership potential. We are a non-political, independent, not-for-profit organisation run by students and recent graduates of institutions of higher education. Its members are interested in world issues, leadership and management.";
	const content_second_para =
		"AIESEC is a global platform for young people to explore and develop their leadership potential. We are a non-political, independent, not-for-profit organisation run by students and recent graduates of institutions of higher education. Its members are interested in world issues, leadership and management.";

	const active_status = {
		home: false,
		youth: false,
		organization: false,
		about: true,
		hover_color: "blue",
	};

	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				logoImage={false}
				header_id='about'
				header_class='about'
				typewrite={false}
				firstline='About Oursevles'
				secondline='who are we.'
				paratext={[heading_para]}
				button={[]}
			/>
			<WhoSection
				title='AIESEC in Nepal'
				secondarytitle='About'
				content={[content_first_para, content_second_para]}
				hasButton={false}
			/>
			<DataSection productdata={props.data.AIESECNepal} class='about-data' />
			<ContactUsSection buttonColor='blue' fontColor='blue-font' />
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
	const data = await getDataFromFile("org-data.json");
	return { props: { data } };
}

export default YouthPage;
