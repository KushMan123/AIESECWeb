import { useRouter } from "next/router";
import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";
import prisma from "../../lib/prisma";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import Experience from "../../components/experience";
import PhotoGallerySection from "../../components/photogallery";
import DataSection from "../../components/data-section";
import Footor from "../../components/footor";
import OfficeContact from "../../components/office_contact";

const Office = (props) => {
	console.log(props.data);
	const router = useRouter();
	const office = router.query.office;
	var localOffice, localOfficeId, officeData;
	switch (office) {
		case "kathmandu":
			localOffice = "Kathmandu";
			localOfficeId = "about-ktm";
			officeData = props.officeData.AiK;
			break;
		case "ku":
			localOffice = "Kathmandu University";
			localOfficeId = "about-ku";
			officeData = props.officeData.AiKU;
			break;
		case "patan":
			localOffice = "Patan";
			localOfficeId = "about-ptn";
			officeData = props.officeData.AiP;
			break;
		case "lumbini":
			localOffice = "Lumbini";
			localOfficeId = "about-lmb";
			officeData = props.officeData.AiL;
			break;
	}

	const active_status = {
		home: false,
		youth: false,
		organization: false,
		about: true,
		hover_color: "blue",
	};

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
				header_id={localOfficeId}
				typewrite={false}
				firstline='Find Out More'
				secondline={localOffice}
				paratext={[props.data[0].description]}
				button={[]}
			/>
			<Experience
				contents={experience}
				buttoncolor='blue'
				buttontext='Start Here'
			/>
			<PhotoGallerySection photos={props.gallery} fontcolor='blue-font' />
			<DataSection productdata={officeData} class='about-data' />
			<OfficeContact
				fontColor='blue-font'
				president_name={props.data[0].president_name}
				president_number={props.data[0].president_number}
				president_email={props.data[0].president_email}
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

export async function getStaticProps(context) {
	const { params } = context;
	const office = params.office;
	var name = "";
	switch (office) {
		case "kathmandu":
			name = "Kathmandu";
			break;
		case "ku":
			name = "Kathmandu University";
			break;
		case "patan":
			name = "Patan";
			break;
		case "lumbini":
			name = "Lumbini";
			break;
	}
	const experienceContent = await getDataFromFile(
		"landing_experience_section.json"
	);
	const officeData = await getDataFromFile("org-data.json");

	const data = await prisma.localOffice.findMany({
		where: {
			name: name,
		},
	});
	const gallery = await prisma.localOfficeGallery.findMany({
		where: {
			lc_name: name,
		},
	});
	return { props: { data, experienceContent, gallery, officeData } };
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { office: "kathmandu" } },
			{ params: { office: "ku" } },
			{ params: { office: "patan" } },
			{ params: { office: "lumbini" } },
		],
		fallback: false,
	};
}

export default Office;
