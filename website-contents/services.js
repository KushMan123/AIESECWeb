const services_offered_contents = [
	"Support bt Sourcing and Screening",
	"VISA and FRRO Support",
	"Volunnteer Engagement and Experience Delivery",
	"Arrival Pickup",
	"Departure Support",
	"All kinds of Document Support",
	"Enagement of Volunteers outside workspace",
	"Experience Debriefing sessions after the Program",
	"Working on Leadership Development for Interns",
	"Accoount Management",
];

const services_provided_contents = [
	{
		title: "Fee",
		content:
			"Host Volunteers by providing fees charged by the AIESEC local chapter in your city",
	},
	{
		title: "Accomodation/ Foods",
		content:
			"Provide accomodation or food or both to the international volunteers",
	},
];

export function GetServicesOfferedContents() {
	return services_offered_contents;
}

export function GetServicesProvidedContents() {
	return services_provided_contents;
}
