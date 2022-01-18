const YouthCountries = [
	{
		product: "GV",
		countryName: "India",

		image: "/images/country1.png",
	},
	{
		product: "GV",
		countryName: "Sri Lanka",

		image: "/images/country2.png",
	},
	{
		product: "GV",
		countryName: "Vietnam",

		image: "/images/country3.png",
	},
	{
		product: "GV",
		countryName: "Indonesia",

		image: "/images/country4.png",
	},
	{
		product: "GV",
		countryName: "Turkey",

		image: "/images/country5.png",
	},
	{
		product: "GV",
		countryName: "Egypt",

		image: "/images/country6.png",
	},
];

export function getGVOrgCountry() {
	return YouthCountries.filter((country) => country.product === "GV");
}
