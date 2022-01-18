import { Fragment } from "react";
import CountryCardBack from "./country-card-back";
import CountryCardFront from "./country-card-front";

const CountryCard = (props) => {
	return (
		<Fragment>
			<CountryCardFront
				image={props.image}
				countryName={props.name}
				countrySummary={props.summary}
			/>
			<CountryCardBack
				backColor={props.backColor}
				countryName={props.name}
				countrySummary={props.summary}
				flightCost={props.flightCost}
				visaCost={props.visaCost}
				accomodationCost={props.accomodationCost}
				additionalCost={props.additionalCost}
				opplink={props.opplink}
				buttoncolor={props.buttoncolor}
			/>
		</Fragment>
	);
};

export default CountryCard;
