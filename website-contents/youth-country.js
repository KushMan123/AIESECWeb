const YouthCountries = [
	{
		product: "GV",
		countryName: "India",
		countrySummary:
			"With its sumptuous mix of traditions, spiritual beliefs,festivals , architecture and landscapes, your memories of India will blaze bright long after you've left its shores.",
		image: "/images/country1.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
	{
		product: "GV",
		countryName: "Sri Lanka",
		countrySummary:
			"Endless beaches, timeless ruins, welcoming people, oodles ofelephants, rolling surf, cheap prices, fun trains, famous tea and flavorful food",
		image: "/images/country2.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
	{
		product: "GV",
		countryName: "Vietnam",
		countrySummary:
			"A land of staggering natural beauty and cultural complexities, of dynamic megacities and hill-tribe villages,both exotic and compelling.",
		image: "/images/country3.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
	{
		product: "GV",
		countryName: "Indonesia",
		countrySummary:
			"This beguiling nation of over 17,000 islands is home to a huge diversity of adventures to choose from. It's hard to beat Indonesia for the sheer range of experiences on offer.",
		image: "/images/country4.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
	{
		product: "GV",
		countryName: "Turkey",
		countrySummary:
			"A richly historical land with some of the best cuisine you will ever taste, scenery from beaches to mountains and the great city of İstanbul.",
		image: "/images/country5.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
	{
		product: "GV",
		countryName: "Egypt",
		countrySummary:
			"The mighty Nile and magnificent monuments entice many to Egypt while the beguiling desert and lush delta wow visitors.",
		image: "/images/country6.png",
		flightCost: 10000,
		visaCost: 10000,
		accomodationCost: 10000,
		additionalCost: 10000,
		opplink: "https://www.google.com/?gws_rd=ssl",
	},
];

export function getGVCountry() {
	return YouthCountries.filter((country) => country.product === "GV");
}
