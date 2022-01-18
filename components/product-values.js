import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBullseye,
	faChalkboard,
	faChartLine,
	faGlobeEurope,
	faTag,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faBullseye,
	faChalkboard,
	faChartLine,
	faGlobeEurope,
	faTag,
	faUsers
);

const ValueProposition = (props) => {
	console.log(props.fontcolor);
	return (
		<div class='col value-parent'>
			<FontAwesomeIcon icon={props.iconName} className={`${props.fontcolor}`} />
			<h3>{props.heading}</h3>
			<p>{props.description}</p>
		</div>
	);
};

export default ValueProposition;
