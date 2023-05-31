import "./home.css";
import profile from "../../assets/home1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
	return (
		<section className="home section grid">
			<img src={profile} className="home-img" alt="" />
			<div className="home-content">
				<div className="home-data">
					<h1 className="home-title">
						<span>I'm Suraj Tade.</span> Web Developer
					</h1>

					<p className="home-description">
						I am currently pursuing B.Tech. in Computer Engineering with honours
						in Deep Learning at PCCOE, Pune. I'm an organised person ready to
						learn and improve upon skills.
					</p>

					<Link to="/about" className="btn">
						More About Me
						<span className="btn-icon">
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>
			<div className="color-block"></div>
		</section>
	);
};

export default Home;
