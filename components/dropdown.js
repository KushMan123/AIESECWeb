import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = (props) => {
	return (
		<div className='dropdown-container'>
			<div className='dropdown'>
				<div className='dropdown-select'>
					<span className='select'> {props.text}</span>
					<FontAwesomeIcon icon={faCaretDown} />
				</div>
				<div className='dropdown-list'>
					{props.items.map((item, index) => {
						var value = "";
						switch (item) {
							case "Kathmandu":
							case "Patan":
							case "Lumbini":
								value = item.toLowerCase();
								break;
							case "Kathmandu University":
								value = "ku";
								break;
							default:
								value = "";
						}
						return (
							<div
								className='dropdown-list-item'
								id={value}
								onClick={props.handlefunction}>
								{item}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
