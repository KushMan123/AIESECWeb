import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const OfficeContact = (props) => {
	return (
		<section id='office-id'>
			<div class='container'>
				<div class='title-parent'>
					<h2>Get in Touch</h2>
					<h1 className={props.fontColor}>Contact Us</h1>
				</div>
				<div className='contact-parent'>
					<h2 className={`title ${props.fontColor}`}>Contact Information</h2>
					<h2 className='contact-name'>{props.president_name}</h2>
					<h2 className='contact-position'>Local Committee President</h2>
					<h2 className='contact-email'>
						<FontAwesomeIcon icon={faEnvelope} className={props.fontColor} />
						{props.president_email}
					</h2>
					<h2 className='contact-phone'>
						<FontAwesomeIcon icon={faPhone} className={props.fontColor} />
						{props.president_number}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default OfficeContact;
