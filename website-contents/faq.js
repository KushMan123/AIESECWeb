const contents = [
	{
		question: "What is the age limit of the program?",
		answer:
			"We have opportunities for people between the age group of 18-30 years.",
		page: "youth",
	},
	{
		question:
			"Do you provide Volunteering/ Internship Opportunities in Nepal ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "Where can I see the exact opportunities available ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "What are the documents required for me to go to exchanges ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "Will I get paid ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "What is the selection process ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "How does AIESEC in Nepal works ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
	{
		question: "Is Food and Accomodation provided in the projects ?",
		answer:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		page: "youth",
	},
];

export function getQuestionforYouthPage() {
	return contents.filter((contents) => contents.page === "youth");
}
