const CountryCardFront = (props) => {
	return (
		<div class='country-img-par'>
			<img src={props.image} alt='countrty-img' class='img-responsive' />
			<div class='country-name'>
				<h3>{props.countryName}</h3>
				<p>{props.countrySummary}</p>
			</div>
		</div>
	);
};

export default CountryCardFront;
