import { faClock, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDescription = (props) => {
	return (
		<div className='col product-des-parent'>
			<h2>What is</h2>
			<h1>{props.product}?</h1>
			<p>{props.description}</p>
			<div className='duration-parent'>
				<FontAwesomeIcon icon={faClock} className={`${props.fontcolor}`} />
				<div className='content'>
					<h3 className={`${props.fontcolor}`}>Duration</h3>
					<p>{props.duration}</p>
				</div>
			</div>
			<div className='organization-parent'>
				<FontAwesomeIcon icon={faStreetView} className={`${props.fontcolor}`} />
				<div className='content'>
					<h3 className={`${props.fontcolor}`}>Organizations</h3>
					<p>{props.organization}.</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
