const GridBox = (props) => {
	return (
		<div className='grid-box'>
			<h1 className={props.fontcolor}>{props.index}</h1>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);
};
export default GridBox;
