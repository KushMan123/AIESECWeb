const experience_content = [
	{
		imgid: "GV-logo",
		imgsrc: "images/product_GV-top-color.png",
		content:
			"Develop your leadership through a volunteering project ,contributing to the Global Goals.",
		buttonlink: "/youth/global-volunteer",
		secondlink: "/organization/global-volunteer",
		buttoncolor: "blue",
		buttontext: "Start Here",
		forlanding: true,
		foryouths: true,
		fororganization: true,
	},
	{
		imgid: "GT-logo",
		imgsrc: "images/product_GT-horizontal-color.png",
		content:
			"Develop your leadership while boosting your career prospects with an international internship.",
		buttonlink: "/youth/global-talent",
		buttoncolor: "blue",
		buttontext: "Start Here",
		forlanding: true,
		foryouths: true,
		fororganization: false,
	},
	{
		imgid: "Member-logo",
		imgsrc: "images/aiesec_member_logo_medium_blue.png",
		content:
			"Develop your leadership while being part of world's largest youth run organization.",
		buttonlink: "/youth/aiesec-member",
		buttoncolor: "blue",
		buttontext: "Start Here",
		forlanding: true,
		foryouths: true,
		fororganization: false,
	},
	{
		imgid: "GTe-logo",
		imgsrc: "images/product_GTe-top-color.png",
		content:
			"Develop your leadership while boosting your career prospects with an international internship.",
		buttonlink: "/organization/global-teacher",
		buttoncolor: "blue",
		buttontext: "Start Here",
		forlanding: false,
		foryouths: false,
		fororganization: true,
	},
];

export function getAllContent() {
	return experience_content;
}

export function getAllContentforLandingPage() {
	return experience_content.filter(
		(experience_content) => experience_content.forlanding
	);
}

export function getAllContentforYouthPage() {
	return experience_content.filter(
		(experience_content) => experience_content.foryouths
	);
}
export function getAllContentforOrgPage() {
	return experience_content.filter(
		(experience_content) => experience_content.fororganization
	);
}
