import { Fragment } from "react";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";

const MemberPage = () => {
	const active_status = {
		home: false,
		youth: true,
		organization: false,
		about: false,
		hover_color: "blue",
	};
	return (
		<Fragment>
			<NavBar status={active_status} />
			<Header
				logoImage={false}
				header_id='member'
				header_class='member'
				typewrite={false}
				firstline='Develop Yourself'
				secondline='become a member.'
				paratext={[
					"Join one of our local teams and develop yourself through practical experiences in the world’s largest youth-led organization.",
				]}
				button={[
					{
						link: "",
						color: "blue",
						text: "Join Now",
					},
				]}></Header>
		</Fragment>
	);
};
export default MemberPage;
