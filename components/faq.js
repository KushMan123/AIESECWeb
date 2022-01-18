import Answer from "./faq-answer";
import Question from "./faq-question";

const FAQs = (props) => {
	function handleClick(event) {
		var faq = event.target;
		while (true) {
			if (faq.classList.contains("faq")) {
				faq.classList.toggle("active");
				break;
			} else {
				faq = faq.parentNode;
			}
		}
	}
	return (
		<section id='faq-id'>
			<div class='container'>
				<h2>Frequently Asked</h2>
				<h1 class={props.fontcolor}>Questions</h1>
				{props.contents.map((content, index) => {
					return (
						<div class='faq' onClick={handleClick} key={index}>
							<Question question={content.question} color={props.fontcolor} />
							<Answer answer={content.answer} />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FAQs;
