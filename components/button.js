import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
	return (
		<Link href={props.link}>
			<a className={`button ${props.color}`}>
				{props.text} <FontAwesomeIcon icon={faChevronRight} />
			</a>
		</Link>
	);
};

export default Button;
