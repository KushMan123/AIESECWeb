import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavIcon = (props) => {
	var hover_color = "";

	switch (props.hover_color) {
		case "blue":
			hover_color = "blue-icon-hover";
			break;
		case "green":
			hover_color = "green-icon-hover";
			break;
		case "red":
			hover_color = "red-icon-hover";
			break;
		case "orange":
			hover_color = "orange-icon-hover";
			break;
		default:
			hover_color = "";
	}
	return (
		<li className='nav-icon'>
			<Link href='#'>
				<a className={`${hover_color}`}>
					<FontAwesomeIcon icon={props.icon} />
				</a>
			</Link>
		</li>
	);
};

export default NavIcon;
