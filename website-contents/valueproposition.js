import {
	faBullseye,
	faChalkboard,
	faChartLine,
	faGlobeEurope,
	faTag,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

const values = [
	{
		icon: "users",
		heading: "Cross Culture Experience",
		description:
			"Experience new cultures while working in a diverse and cross cultural team which provides a limitless experience",
		product: "gv-youth",
		fontcolor: "red-font",
	},
	{
		icon: faChartLine,
		heading: "Personal Development",
		description:
			"If you don't try and experience new things, you'll never find your full potential and discover the best version of you.",
		product: "gv-youth",
		fontcolor: "red-font",
	},
	{
		icon: faBullseye,
		heading: "Contribute to SDGs",
		description:
			"Tackle the world issues you're most passionate about and contribute towards a better world.",
		product: "gv-youth",
		fontcolor: "red-font",
	},
	{
		icon: faUsers,
		heading: "Diversified Work Environment",
		description:
			"Experience new cultures while working in a diverse and cross cultural team which provides a limitless experience",
		product: "gt-youth",
		fontcolor: "green-font",
	},
	{
		icon: faChartLine,
		heading: "Personal Growth and Development",
		description:
			"If you don't try and experience new things, you'll never find your full potential and discover the best version of you.",
		product: "gt-youth",
		fontcolor: "green-font",
	},
	{
		icon: faChalkboard,
		heading: "Gain International Experience and Exposure",
		description:
			"Tackle the world issues you're most passionate about and contribute towards a better world",
		product: "gt-youth",
		fontcolor: "green-font",
	},
	{
		icon: faUsers,
		heading: "Global Perspective in Your Company",
		description:
			"Global Perspective of our volunteers to think outside the box when tackling issues.",
		product: "gv-org",
		fontcolor: "red-font",
	},
	{
		icon: faChartLine,
		heading: "Hire with Ease through AIESEC",
		description:
			"AIESEC.org is the global platform where all the potential volunteers get signed-up on.",
		product: "gv-org",
		fontcolor: "red-font",
	},
	{
		icon: faBullseye,
		heading: "Project Designed to Create an Impact",
		description:
			"All our projects contribute towards the SDGs and tackle the issues in the country",
		product: "gv-org",
		fontcolor: "red-font",
	},
	{
		icon: faTag,
		heading: "Simple and Affordable",
		description:
			"Global Perspective of our volunteers to think outside the box when tackling issues.",
		product: "gte-org",
		fontcolor: "orange-font",
	},
	{
		icon: faUsers,
		heading: "Boost your Workplace",
		description:
			"AIESEC.org is the global platform where all the potential volunteers get signed-up on.",
		product: "gte-org",
		fontcolor: "orange-font",
	},
	{
		icon: faGlobeEurope,
		heading: "Network Internationally",
		description:
			"All our projects contribute towards the SDGs and tackle the issues in the country",
		product: "gte-org",
		fontcolor: "orange-font",
	},
];

export function ValuesGVyouth() {
	return values.filter((values) => values.product === "gv-youth");
}

export function ValuesGTyouth() {
	return values.filter((values) => values.product === "gt-youth");
}

export function ValuesGVorg() {
	return values.filter((values) => values.product === "gv-org");
}

export function ValuesGTeorg() {
	return values.filter((values) => values.product === "gte-org");
}
