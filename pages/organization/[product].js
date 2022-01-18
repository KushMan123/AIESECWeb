import { useRouter } from "next/router";
import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import NavBar from "../../components/nav-bar";
import Header from "../../components/header";
import ProductDescriptionSection from "../../components/product-description-section";
import DataSection from "../../components/data-section";
import OrganizationCountrySection from "../../components/org-country-section";
import prisma from "../../lib/prisma";
import ServicesOfferedSection from "../../components/servicesofferedrsection";
import AIESECProcessSection from "../../components/aiesecprocesssection";
import FAQs from "../../components/faq";
import TestimonialSection from "../../components/testimonial-section";
import Footor from "../../components/footor";

function OrganizationProductPage(props) {
	const router = useRouter();
	const productPage = router.query.product;
	var fontColor,
		buttonColor,
		backgroundColor,
		transparentBackColor,
		headerID,
		headingFirstLine,
		headingSecondLine,
		headerFirstPara,
		productInfo,
		productValues,
		productData,
		servicesOffered,
		servicestobeProvided,
		productLogo,
		productName,
		productDataID,
		productCountryID,
		hoverColor,
		borderColor;

	servicesOffered = props.productServices.ServicesOffered;
	servicestobeProvided = props.productServices.ServicestobeProvided;

	if (productPage === "global-volunteer") {
		fontColor = "red-font";
		buttonColor = "red";
		backgroundColor = "red";
		transparentBackColor = "red-trans-back";
		headerID = "gv-org";
		headingFirstLine = "Hire Passionate";
		headingSecondLine = "International Volunteers";
		headerFirstPara =
			"Work with International volunteers and create social impact while achieving your organizations’ vision. A global solution to every social project in your local cities.";
		productInfo = props.productInfo.globalVolunteer;
		productValues = props.productValues.OrganizationGlobalVolunteer;
		productData = props.productData.OrganizationGlobalVolunteer;
		productName = "Global Volunteer";
		productLogo = "/images/product_GV-horizontal-white.png";
		productDataID = "gv-data";
		hoverColor = "red-hover";
		borderColor = "red-border";
	}
	if (productPage === "global-teacher") {
		fontColor = "orange-font";
		buttonColor = "orange";
		backgroundColor = "orange";
		transparentBackColor = "orange-trans-back";
		headerID = "gte-org";
		headingFirstLine = "Hire Professional";
		headingSecondLine = "International Teachers";
		headerFirstPara =
			"Our Global Teacher programme helps to access bright young talent, ready to learn and contribute. You can hire a paid intern from abroad for a duration of 9 to 78 weeks.";
		productInfo = props.productInfo.globalTeacher;
		productValues = props.productValues.OrganizationGlobalTeacher;
		productData = props.productData.OrganizationGlobalTeacher;
		productName = "Global Teacher";
		productLogo = "/images/product_GTe-horizontal-white.png";
		productDataID = "gte-data";
		hoverColor = "orange-hover";
		borderColor = "orange-border";
	}

	const active_status = {
		home: false,
		youth: false,
		organization: true,
		about: false,
		hover_color: backgroundColor,
	};

	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				firstline={headingFirstLine}
				secondline={headingSecondLine}
				logoImage={false}
				header_id={headerID}
				typewrite={false}
				paratext={[headerFirstPara]}
				button={[
					{
						link: "https://auth.aiesec.org/users/sign_in?country=",
						color: buttonColor,
						text: "Get Started",
					},
				]}
			/>
			<ProductDescriptionSection
				products={productInfo}
				values={productValues}
				background={transparentBackColor}
				fontcolor={fontColor}
			/>
			<DataSection productdata={productData} class={productDataID} />
			<OrganizationCountrySection
				title={`${productName} We Offer From`}
				secondaryTitle='Countries'
				countries={props.country}
			/>
			<ServicesOfferedSection
				servicesOffered={servicesOffered}
				servicestobeProvided={servicestobeProvided}
				fontcolor={fontColor}
				bordercolor={borderColor}
			/>
			<AIESECProcessSection
				processes={props.aiesecProcess.OrganizationProcess}
				title={`Get a ${productName}`}
				noOfSteps={6}
				secondaryTitle='Interested in Hiring'
				product={productName}
				fontcolor={fontColor}
				buttoncolor={buttonColor}
				buttontext='Sign Up Now'
				link='https://auth.aiesec.org/users/sign_in?country='
			/>
			<FAQs contents={props.faq} fontcolor={fontColor} />
			<TestimonialSection
				testimonials={props.testimonial}
				fontcolor={fontColor}
				color={buttonColor}
				foryouth={false}
			/>
			<Footor />
		</Fragment>
	);
}

async function getDataFromFile(filename) {
	const filePath = path.join(process.cwd(), "website-contents", filename);
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export async function getStaticProps(context) {
	const { params } = context;
	const product = params.product;
	const productInfo = await getDataFromFile("aiesec-product.json");
	const productValues = await getDataFromFile("aiesec-valueproposition.json");
	const productData = await getDataFromFile("product_data.json");
	const productServices = await getDataFromFile("aiesec-services.json");
	const aiesecProcess = await getDataFromFile("aiesec_process.json");

	if (product === "global-volunteer") {
		const country = await prisma.organizationCountry.findMany({
			where: {
				isGV: true,
			},
		});
		const faq = await prisma.fAQs.findMany({
			where: {
				isOrganizationGV: true,
			},
		});
		const testimonial = await prisma.organizationTestimonial.findMany({
			where: {
				isGV: true,
				tobeFeatured: true,
			},
		});
		return {
			props: {
				productInfo,
				productValues,
				productData,
				productServices,
				country,
				aiesecProcess,
				faq,
				testimonial,
			},
		};
	}
	if (product === "global-teacher") {
		const country = await prisma.organizationCountry.findMany({
			where: {
				isGTe: true,
			},
		});
		const faq = await prisma.fAQs.findMany({
			where: {
				isOrganizationGTe: true,
			},
		});
		const testimonial = await prisma.organizationTestimonial.findMany({
			where: {
				isGTe: true,
				tobeFeatured: true,
			},
		});
		return {
			props: {
				productInfo,
				productValues,
				productData,
				productServices,
				country,
				aiesecProcess,
				faq,
				testimonial,
			},
		};
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { product: "global-volunteer" } },
			{ params: { product: "global-teacher" } },
		],
		fallback: false,
	};
}

export default OrganizationProductPage;
