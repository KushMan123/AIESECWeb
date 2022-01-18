import { Fragment } from "react";
import Button from "./button";

const ContentContainer = (props) => {
	return (
		<Fragment>
			<h2>{props.h2}</h2>
			<h1>{props.h1}</h1>
			{props.para.map((paragraph, index) => {
				return <p key={index}>{paragraph}</p>;
			})}
			{props.hasButton ? (
				<Button
					link={props.buttonlink}
					color={props.buttoncolor}
					text={props.buttontext}
				/>
			) : (
				<div></div>
			)}
		</Fragment>
	);
};

export default ContentContainer;
