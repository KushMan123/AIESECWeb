import { Fragment, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";

const Data = (props) => {
	const counter = useRef();
	const speed = 200;

	function handleOnView(InView, entry) {
		if (InView) {
			entry.target.classList.add("appear");
		}
	}

	function updateCount() {
		const target = +counter.current.dataset.target;
		const count = +counter.current.innerText;
		const increment = target / speed;
		if (count < target) {
			counter.current.innerText = Math.ceil(count + increment);
			setTimeout(updateCount, 1);
		} else {
			counter.current.innerText = target;
		}
	}

	useEffect(() => {
		updateCount();
	}, []);

	return (
		<InView
			as='div'
			className='data fade-in'
			onChange={handleOnView}
			threshold={1}
			rootMargin='0px 0px -75px 0px'>
			<h1>
				{props.isPrice ? (
					<Fragment>
						Rs.
						<span class='counter' data-target={props.data} ref={counter}>
							0
						</span>
					</Fragment>
				) : (
					<Fragment>
						<span class='counter' data-target={props.data} ref={counter}>
							0
						</span>{" "}
						+
					</Fragment>
				)}
			</h1>
			<p>{props.title}</p>
		</InView>
	);
};

export default Data;
