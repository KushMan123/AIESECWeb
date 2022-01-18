import { useEffect } from "react";
import Link from "next/link";
import NavText from "./nav-text";
import NavIcon from "./nav-icon";
import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props) => {
	function handleScroll() {
		var navbar = document.querySelector("nav");
		navbar.classList.toggle("nav-fixed", window.scrollY > 10);
	}

	function handleClick() {
		var navpar = document.querySelector(".nav-par");
		var closebtn = document.querySelector("#toggle-btn i");
		navpar.classList.toggle("nav-par-active");
		// closebtn.classList.toggle("nav-par-active");
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	const { home, youth, organization, about, hover_color } = props.status;
	return (
		<nav>
			<div className='container'>
				<div className='menu-par'>
					<div className='logo-par'>
						<Link href='/'>
							<img src='/images/White-Black-Logo.png' />
						</Link>
					</div>
					<div className='nav-par'>
						<ul>
							<NavText
								text='Home'
								active_status={home}
								hover_color={hover_color}
								link='/'
							/>
							<NavText
								text='For Youths'
								active_status={youth}
								hover_color={hover_color}
								link='/youth'
							/>
							<NavText
								text='For Organizations'
								active_status={organization}
								hover_color={hover_color}
								link='/organization'
							/>
							<NavText
								text='About'
								active_status={about}
								hover_color={hover_color}
								link='/about'
							/>
							<NavIcon icon={faFacebook} hover_color={hover_color} />
							<NavIcon icon={faLinkedinIn} hover_color={hover_color} />
							<NavIcon icon={faInstagram} hover_color={hover_color} />
							<NavIcon icon={faLink} hover_color={hover_color} />
						</ul>
					</div>
					<div id='toggle-btn'>
						<FontAwesomeIcon icon={faBars} onClick={handleClick} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
