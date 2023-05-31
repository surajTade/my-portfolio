import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import "./themes.css";
import { useEffect, useState } from "react";

const getStoredColor = () => {
	let color = "hsl(19, 96%, 52%)";

	if (localStorage.getItem("color")) {
		color = localStorage.getItem("color");
	}

	return color;
};

const getStoredTheme = () => {
	let theme = "dark-theme";

	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}

	return theme;
};

const Themes = () => {
	const [showSwitcher, setShowSwitcher] = useState(false);
	const [color, setColor] = useState(getStoredColor);
	const [theme, setTheme] = useState(getStoredTheme);

	const changeColor = (color) => {
		setColor(color);
	};

	const toggleSwitcher = () => {
		setShowSwitcher((prevState) => !prevState);
	};

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === "light-theme" ? "dark-theme" : "light-theme"
		);
	};

	useEffect(() => {
		document.documentElement.style.setProperty("--first-color", color);
		localStorage.setItem("color", color);
	}, [color]);

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div className={`${showSwitcher && "show-switcher"} style-switcher`}>
			{/* <div className="style-switcher-toggler" onClick={toggleSwitcher}>
				<FaCog />https://anantya2023.pccoe.hosting.acm.org/
			</div> */}
			<div className="theme-toggler" onClick={toggleTheme}>
				{theme === "light-theme" ? <BsMoon /> : <BsSun />}
			</div>
			{/* <h3 className="style-switcher-title">Style Switcher</h3>
			<div className="style-switcher-items">
				{themes.map((theme, idx) => {
					return (
						<ThemeItem
							key={idx}
							{...theme}
							handleChangeColor={() => changeColor(theme.color)}
						/>
					);
				})}
			</div> */}

			{/* <div className="style-switcher-close" onClick={toggleSwitcher}>
				&times;
			</div> */}
		</div>
	);
};

export default Themes;
