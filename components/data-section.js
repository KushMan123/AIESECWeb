import Data from "./data";
import { useEffect } from "react";

const DataSection = (props) => {
	return (
		<section id='data-id' className={props.class}>
			<div className='container'>
				{props.productdata.map((productdata, index) => {
					return (
						<Data
							className={props.dataclass}
							key={index}
							isPrice={productdata.isPrice}
							data={productdata.data}
							title={productdata.title}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default DataSection;
