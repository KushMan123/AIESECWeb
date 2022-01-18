import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChooseAIESECSection = (props) => {
	return (
		<section className='two-col' id='choose-aiesec-id'>
			<div className='container'>
				<div className='heading-parent'>
					<h2>Why Choose</h2>
					<h1>AIESEC</h1>
				</div>
				<div className='content-parent'>
					<ul>
						{props.contents.map((content, index) => {
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
		</section>
	);
};

export default ChooseAIESECSection;
