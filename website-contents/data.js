const data = [
	{
		data: 15000,
		title: "To Leave",
		product: "gv-youth",
		isPrice: true,
	},
	{
		data: 11000,
		title: "Projects",
		product: "gv-youth",
		isPrice: false,
	},
	{
		data: 110,
		title: "Countries",
		product: "gv-youth",
		isPrice: false,
	},
	{
		data: 15000,
		title: "To Leave",
		product: "gt-youth",
		isPrice: true,
	},
	{
		data: 11000,
		title: "Projects",
		product: "gt-youth",
		isPrice: false,
	},
	{
		data: 110,
		title: "Countries",
		product: "gt-youth",
		isPrice: false,
	},
	{
		data: 30,
		title: "Projects",
		product: "gv-org",
		isPrice: false,
	},
	{
		data: 500,
		title: "Volunteers Arrived",
		product: "gv-org",
		isPrice: false,
	},
	{
		data: 25,
		title: "Partners",
		product: "gv-org",
		isPrice: false,
	},
	{
		data: 30,
		title: "Projects",
		product: "gte-org",
		isPrice: false,
	},
	{
		data: 500,
		title: "Volunteers Arrived",
		product: "gte-org",
		isPrice: false,
	},
	{
		data: 25,
		title: "Partners",
		product: "gte-org",
		isPrice: false,
	},
];

export function GVData() {
	return data.filter((data) => data.product === "gv-youth");
}

export function GTData() {
	return data.filter((data) => data.product === "gt-youth");
}
export function GVOrgData() {
	return data.filter((data) => data.product === "gv-org");
}
export function GTeOrgData() {
	return data.filter((data) => data.product === "gte-org");
}
