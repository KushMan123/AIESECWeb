const PhotoContainer = (props) => {
	return (
		<div className='photo-parent'>
			<img className='img-responsive' src={props.imgsrc} />
		</div>
	);
};

export default PhotoContainer;
