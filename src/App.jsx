import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Themes } from "./components";
import { Home, About, Portfolio, Contact, ProfileLinks } from "./pages";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Themes />
			<Routes>
				<Route index element={<Home />} /> 
				<Route path="about" element={<About />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="contact" element={<ProfileLinks />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
