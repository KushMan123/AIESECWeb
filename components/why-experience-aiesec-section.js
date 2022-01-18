import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllContent } from "../website-contents/why-experience-aiesec";

const WhyAIESECSection = (props) => {
	const contents = getAllContent();

	return (
		<section class='two-col' id='exp-aiesec-id'>
			<div class='container'>
				<div class='heading-parent'>
					<h2>Why Experience</h2>
					<h1>AIESEC</h1>
				</div>
				<div class='content-parent'>
					<ul>
						{contents.map((content, index) => {
							return (
								<li key={index}>
									<div class='content-icon'>
										<FontAwesomeIcon icon={faCheckCircle} />
									</div>
									<div class='content-text'>
										<span>{content.heading}</span>
										<p>{content.paragraph}</p>
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

export default WhyAIESECSection;
