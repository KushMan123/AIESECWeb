import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import {
	faHome,
	faPlane,
	faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./icon";
import Button from "./button";

const CountryCardBack = (props) => {
	return (
		<div class={`country-content-par ${props.backColor}`}>
			<h3>{props.countryName}</h3>
			<p>{props.countrySummary}</p>
			<div class='icon-container'>
				<Icon
					icon={faPlane}
					costTitle='Flight Cost'
					actualCost={`Rs. ${props.flightCost}`}
				/>
				<Icon
					icon={faCcVisa}
					costTitle='Visa Cost'
					actualCost={`Rs. ${props.visaCost}`}
				/>
				<Icon
					icon={faHome}
					costTitle='Accomodation Cost'
					actualCost={`Rs. ${props.accomodationCost}`}
				/>
				<Icon
					icon={faPuzzlePiece}
					costTitle='Additional Cost'
					actualCost={`Rs. ${props.additionalCost}`}
				/>
			</div>
			<Button
				link={props.opplink}
				color={props.buttoncolor}
				text='View Opportunities'
			/>
		</div>
	);
};

export default CountryCardBack;
