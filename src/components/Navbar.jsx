import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	function toggleNavMenu() {
		setShowNavbar((prevStateOfNavbar) => !prevStateOfNavbar);
	}

	return (
		<nav className="nav">
			<div className={`nav-menu ${showNavbar && "show-nav"}`}>
				<ul className="nav-list">
					{links.map((navLink) => (
						<li className="nav-item" key={navLink.id}>
							<NavLink
								to={navLink.path}
								className={({ isActive }) =>
									isActive ? "nav-link active-nav" : "nav-link"
								}
								onClick={toggleNavMenu}>
								<span className="nav-icon">{navLink.icon}</span>
								<h3 className="nav-name">{navLink.name}</h3>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div
				className={`nav-toggle ${showNavbar && "animate-toggle"}`}
				onClick={toggleNavMenu}>
				<span />
				<span />
				<span />
			</div>
		</nav>
	);
};

export default Navbar;
