import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./button";
import Dropdown from "./dropdown";

const ContactUsSection = (props) => {
	const [dropdownText, setDropdownText] = useState(
		"Select nearest local office"
	);
	const [dataFetched, setDataFetched] = useState(false);
	const [data, setData] = useState(null);
	const office = ["Kathmandu", "Kathmandu University", "Patan", "Lumbini"];

	function handleContact(event) {
		setDropdownText(event.target.innerText);
		const id = event.target.id;
		fetch(`api/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data.response[0]);
				setDataFetched(true);
			});
	}
	return (
		<section id='contact-id'>
			<div className='container'>
				<div className='title-parent'>
					<h2>Get in Touch</h2>
					<h1 className={props.fontColor}>Contact Us</h1>
					<p>Get in touch with the nearest local office</p>
					<Dropdown
						text={dropdownText}
						items={office}
						handlefunction={handleContact.bind(this)}
					/>
				</div>
				{dataFetched ? (
					<div className='contact-container'>
						<div className='heading-parent'>
							<h2>AIESEC in</h2>
							<h1 className={props.fontColor}>{data.name}</h1>
							<p>{data.address}</p>
							<Button link='' color={props.buttonColor} text='Learn More' />
						</div>
						<div className='contact-parent'>
							<h2 className={`title ${props.fontColor}`}>
								Contact Information
							</h2>
							<h2 className='contact-name'>{data.president_name}</h2>
							<h2 className='contact-position'>Local Committee President</h2>
							<h2 className='contact-email'>
								<FontAwesomeIcon
									icon={faEnvelope}
									className={props.fontColor}
								/>
								{data.president_email}
							</h2>
							<h2 className='contact-phone'>
								<FontAwesomeIcon icon={faPhone} className={props.fontColor} />
								{data.president_number}
							</h2>
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
};

export default ContactUsSection;
