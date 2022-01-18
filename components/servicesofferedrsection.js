import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	GetServicesOfferedContents,
	GetServicesProvidedContents,
} from "../website-contents/services";

const ServicesOfferedSection = (props) => {
	const services_offered = GetServicesOfferedContents();
	const services_tobeprovided = GetServicesProvidedContents();
	return (
		<section className='two-col' id='service-aiesec-id'>
			<div className='container'>
				<div className='row'>
					<div className='heading-parent'>
						<h2>Services Offered by</h2>
						<h1>AIESEC</h1>
					</div>
					<div className='content-parent'>
						<ul>
							{services_offered.map((content, index) => {
								return (
									<li key={index}>
										<div className={`content-icon ${props.fontcolor}`}>
											<FontAwesomeIcon icon={faCheckCircle} />
										</div>
										<div className='content-text'>
											<span>{content}</span>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div class='row'>
					<div class='heading-parent'>
						<h2>Services You Should</h2>
						<h1>Provide</h1>
					</div>
					{services_tobeprovided.map((service, index) => {
						return (
							<div class={`services-par ${props.bordercolor}`} key={index}>
								<h3 class={props.fontcolor}>{service.title}</h3>
								<p>{service.content}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesOfferedSection;
