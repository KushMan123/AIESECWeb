import { useRouter } from "next/router";
import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
import AIESECProcessSection from "../../components/aiesecprocesssection";
import ChooseAIESECSection from "../../components/choose-aiesec-section";
import DataSection from "../../components/data-section";
import FAQs from "../../components/faq";
import Footor from "../../components/footor";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import ProductDescriptionSection from "../../components/product-description-section";
import RecommendedCountriesSection from "../../components/recommended-countries-section";
import TestimonialSection from "../../components/testimonial-section";
import prisma from "../../lib/prisma";

function YouthProductPage(props) {
	const router = useRouter();
	const productPage = router.query.product;
	var fontColor,
		buttonColor,
		backgroundColor,
		transparentBackColor,
		headerID,
		headerFirstPara,
		headerSecondPara,
		productInfo,
		productValues,
		productData,
		whyChooseAIESEC,
		productLogo,
		productName,
		productDataID,
		productCountryID,
		hoverColor,
		darkColorBackground;

	const productProcesses = props.aiesecProcess.YouthProcess;

	if (productPage === "global-volunteer") {
		fontColor = "red-font";
		buttonColor = "red";
		backgroundColor = "red";
		transparentBackColor = "red-trans-back";
		(headerID = "gv-youths"),
			(headerFirstPara =
				" Experience new cultures while working in a diverse and cross cultural team which provides a limitless experience and creating an impact in the world.");
		headerSecondPara = "One Step Away from Starting your Adventure";
		productInfo = props.productInformation.globalVolunteer;
		productValues = props.productValueProposition.youthsGlobalVolunteer;
		productData = props.productData.YouthGlobalVolunteer;
		whyChooseAIESEC = props.productValuedelivery.YouthGlobalVolunteer;
		productName = "Global Volunteer";
		productLogo = "/images/product_GV-horizontal-white.png";
		productDataID = "gv-data";
		productCountryID = "gv-country";
		hoverColor = "red-hover";
		darkColorBackground = "dark-red";
	} else if (productPage === "global-talent") {
		fontColor = "green-font";
		buttonColor = "green";
		backgroundColor = "green";
		transparentBackColor = "green-trans-back";
		(headerID = "gt-youths"),
			(headerFirstPara =
				" Experience new cultures while working in a diverse and cross cultural team which provides a limitless experience and creating an impact in the world.");
		headerSecondPara = "One Step Away from Starting your Adventure";
		productInfo = props.productInformation.globalTalent;
		productValues = props.productValueProposition.youthGlobalTalent;
		productData = props.productData.YouthGlobalTalent;
		whyChooseAIESEC = props.productValuedelivery.YouthGlobalTalent;
		productName = "Global Talent";
		productLogo = "/images/product_GT-horizontal-white.png";
		productDataID = "gt-data";
		productCountryID = "gt-country";
		hoverColor = "green-hover";
		darkColorBackground = "dark-green";
	} else {
		return <h2>Page Not Found</h2>;
	}

	const active_status = {
		home: false,
		youth: true,
		organization: false,
		about: false,
		hover_color: backgroundColor,
	};

	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				logoImage={true}
				image={productLogo}
				header_id={headerID}
				typewrite={false}
				paratext={[headerFirstPara, headerSecondPara]}
				button={[
					{
						link: "https://auth.aiesec.org/users/sign_in?country=",
						color: backgroundColor,
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
			<RecommendedCountriesSection
				countries={props.country}
				class={productCountryID}
				buttoncolor={buttonColor}
				backColor={darkColorBackground}
				hoverClass={hoverColor}
			/>
			<ChooseAIESECSection contents={whyChooseAIESEC} fontcolor={fontColor} />
			<AIESECProcessSection
				processes={productProcesses}
				title={`Become ${productName}`}
				noOfSteps={4}
				secondaryTitle='Interested in being'
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
				foryouth={true}
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
	const productInformation = await getDataFromFile("aiesec-product.json");
	const productValueProposition = await getDataFromFile(
		"aiesec-valueproposition.json"
	);
	const aiesecProcess = await getDataFromFile("aiesec_process.json");
	const productData = await getDataFromFile("product_data.json");
	const productValuedelivery = await getDataFromFile(
		"aiesec_valuedelivery.json"
	);
	if (product === "global-volunteer") {
		const country = await prisma.youthCountry.findMany({
			where: {
				isGV: true,
			},
		});
		const testimonial = await prisma.youthTestimonial.findMany({
			where: {
				isGV: true,
				tobeFeatured: true,
			},
		});
		const faq = await prisma.fAQs.findMany({
			where: {
				isYouthGV: true,
			},
		});

		return {
			props: {
				country,
				testimonial,
				faq,
				productInformation,
				productValueProposition,
				aiesecProcess,
				productData,
				productValuedelivery,
			},
		};
	}
	if (product === "global-talent") {
		const country = await prisma.youthCountry.findMany({
			where: {
				isGT: true,
			},
		});
		const testimonial = await prisma.youthTestimonial.findMany({
			where: {
				isGT: true,
				tobeFeatured: true,
			},
		});
		const faq = await prisma.fAQs.findMany({
			where: {
				isYouthGT: true,
			},
		});
		return {
			props: {
				country,
				testimonial,
				faq,
				productInformation,
				productValueProposition,
				aiesecProcess,
				productData,
				productValuedelivery,
			},
		};
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { product: "global-volunteer" } },
			{ params: { product: "global-talent" } },
		],
		fallback: false,
	};
}

export default YouthProductPage;
