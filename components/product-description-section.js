import { faUser } from "@fortawesome/free-solid-svg-icons";
import ProductDescription from "./product-description-content";
import ProductImage from "./product-description-image";
import ValueProposition from "./product-values";

const ProductDescriptionSection = (props) => {
	const { name, productdescription, duration, organization, image, logo } =
		props.products[0];

	return (
		<section id='product-id'>
			<div className='container'>
				<div className='row'>
					<ProductImage
						trans_back={props.background}
						image={image}
						logo={logo}
					/>
					<ProductDescription
						product={name}
						description={productdescription}
						fontcolor={props.fontcolor}
						duration={duration}
						organization={organization}
					/>
				</div>
				<div class='row'>
					{props.values.map((value, index) => {
						return (
							<ValueProposition
								key={index}
								iconName={value.iconName}
								heading={value.heading}
								description={value.description}
								fontcolor={props.fontcolor}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProductDescriptionSection;
