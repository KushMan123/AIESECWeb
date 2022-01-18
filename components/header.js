import FirstLine from "./header-firstline";
import TypeWritterSecondLine from "./header-typewritter-secondline";
import Secondline from "./header-secondline";
import HeaderParagraph from "./header-para";
import Button from "./button";
import { Fragment } from "react";

const Header = (props) => {
	function textpara() {
		if (props.typewrite) {
			return (
				<Fragment>
					<FirstLine text={props.firstline} />
					<TypeWritterSecondLine dataword={props.secondline} />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<FirstLine text={props.firstline} />
					<Secondline text={props.secondline} />
				</Fragment>
			);
		}
	}

	return (
		<header class={props.header_class}>
			<div className='container'>
				<div className={`header-info-parent `}>
					{props.logoImage ? (
						<div class='img-parent'>
							<img src={props.image} alt='logo' class='img-responsive' />
						</div>
					) : (
						textpara()
					)}
					{props.paratext.map((para, index) => {
						return <HeaderParagraph text={para} key={index} />;
					})}
					<div className='button-par'>
						{props.button.map((button, index) => {
							return (
								<Button
									key={index}
									link={button.link}
									color={button.color}
									text={button.text}></Button>
							);
						})}
					</div>
				</div>
				<div id={props.header_id} className='image'></div>
			</div>
		</header>
	);
};

export default Header;
