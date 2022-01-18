import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Question = (props) => {
	return (
		<div class='question'>
			<h3>{props.question}</h3>
			<FontAwesomeIcon icon={faChevronDown} className={props.color} />
		</div>
	);
};

export default Question;
