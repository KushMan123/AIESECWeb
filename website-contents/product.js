const products = [
	{
		name: "Global Volunteer",
		image: "/images/anna-earl-cTtE2FlIRoU-unsplash.jpg",
		logo: "/images/product_GV-horizontal-white.png",
		productdescription:
			"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world.",
		fontcolor: "red-font",
		duration: "6-8 Weeeks long",
		organization: "NGOs, Educational Institutes etc.",
	},
	{
		name: "Global Talent",
		image: "/images/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
		logo: "/images/product_GT-horizontal-white.png",
		productdescription:
			"Global Talent is an internship experience for young people aiming towards professional career development in a global setting.",
		fontcolor: "green-font",
		duration: "6-8 Weeks and 9-78 Weeks long",
		organization:
			"MNCs, SMEs, Start-Ups, NGOs, Incubators, Accelerators & Other umbrella organizations.",
	},
	{
		name: "Global Teacher",
		image: "/images/icons8-team-FcLyt7lW5wg-unsplash.jpg",
		logo: "/images/product_GTe-horizontal-white.png",
		productdescription:
			"Global Teacher is a cross-cultural product where our young talent brings added value to your venture with their professional teaching spirits",
		fontcolor: "orange-font",
		duration: "9-78 Weeks long",
		organization: "Educational Institutes etc...",
	},
];

export function getGV() {
	return products.filter((products) => products.name === "Global Volunteer");
}

export function getGT() {
	return products.filter((products) => products.name === "Global Talent");
}

export function getGTe() {
	return products.filter((products) => products.name === "Global Teacher");
}
