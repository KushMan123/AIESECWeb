import Link from "next/link";

const NavText = (props) => {
	var active_status = "";
	var hover_color = "";
	if (props.active_status) {
		active_status = "active";
	}

	switch (props.hover_color) {
		case "blue":
			hover_color = "blue-hover";
			break;
		case "green":
			hover_color = "green-hover";
			break;
		case "red":
			hover_color = "red-hover";
			break;
		case "orange":
			hover_color = "orange-hover";
			break;
		default:
			hover_color = "";
	}

	return (
		<li className='nav-text'>
			<Link href={props.link}>
				<a className={`menu-hover ${hover_color} ${active_status}`} href='/'>
					{props.text}
				</a>
			</Link>
		</li>
	);
};

export default NavText;
