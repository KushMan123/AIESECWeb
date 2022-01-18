const ProductImage = (props) => {
	return (
		<div className='col img-space'>
			<div className={`img-container ${props.trans_back}`}>
				<div className='photo'>
					<img src={props.image} />
				</div>
			</div>

			<div className='logo'>
				<img className='img-responsive' src={props.logo} />
			</div>
		</div>
	);
};

export default ProductImage;
