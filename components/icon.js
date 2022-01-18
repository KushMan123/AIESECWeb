import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
	return (
		<div class='icon'>
			<FontAwesomeIcon icon={props.icon} />
			<div class='icon-description'>
				<h2>{props.costTitle}</h2>
				<h1>{props.actualCost}</h1>
			</div>
		</div>
	);
};

export default Icon;
