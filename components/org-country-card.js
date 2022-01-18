import { Fragment } from "react";

const OrgCountryCard = (props) => {
	return (
		<Fragment>
			<img src={props.image} class='img-responsive' alt='country' />
			<div class='inner'>
				<h3>{props.countryName}</h3>
			</div>
		</Fragment>
	);
};

export default OrgCountryCard;
