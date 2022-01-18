import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footor = () => {
	return (
		<footer>
			<div class='footer-content'>
				<div class='l-footer'>
					<img src='/images/Blue-Logo.png' alt='logo' />
					<p>
						AIESEC is a non-governmental not-for-profit organisation in
						consultative status with the United Nations Economic and Social
						Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and
						is recognized by UNESCO. AIESEC International Inc. is registered as
						a Not-for-profit Organisation under the Canadian Not-for-profit
						Corporations Act - 2018-02-08, Corporation Number: 1055154-6 and
						Quebec Business Number (NEQ) 1173457178 in Montreal, Quebec, Canada.
					</p>
					<ul class='social'>
						<li>
							<Link href='#'>
								<a>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>
									<FontAwesomeIcon icon={faLinkedinIn} />
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<ul class='r-footer'>
					<li>
						<h2>AIESEC</h2>
						<ul class='box'>
							<li>
								<Link href='#'>
									<a>About Us</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Contact Us</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<h2>Organizations</h2>
						<ul class='box'>
							<li>
								<Link href='#'>
									<a>Hire Volunteers</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Hire Teachers</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Events</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Partner Us</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<h2>Youths</h2>
						<ul class='box'>
							<li>
								<Link href='#'>
									<a>Global Volunteers</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Global Teachers</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Join AIESEC</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Blogs</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<h2>Terms and Policy</h2>
						<ul class='box'>
							<li>
								<Link href='#'>
									<a>Term and Condition</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a>Privacy Policy</a>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class='b-footer'>
				<div class='b-footer-content'>
					<p>All rights reserved by ©AIESECinNepal 2021</p>
				</div>
			</div>
		</footer>
	);
};

export default Footor;
