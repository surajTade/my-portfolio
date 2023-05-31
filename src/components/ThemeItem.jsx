const ThemeItem = (prop) => {
	return (
		<img
			src={prop.img}
			alt=""
			className="theme-img"
			onClick={prop.handleChangeColor}
		/>
	);
};

export default ThemeItem;
