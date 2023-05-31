import { FaDribbble, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { ProfileLinksBox, SocialLinksBox } from "../../components";
import "./contactlinks.css";

const ProfileLinks = () => {
	return (
		<div className="container section">
			<div className="profile-links">
				<h2 className="section-title">
					Get in <span>Touch</span>
				</h2>
				<h3 className="section-subtitle subtitle-center">Profile links</h3>
				<div className="contact-links-container grid">
					<ProfileLinksBox />
				</div>
			</div>

			<div className="seperator"></div>

			<div className="social-links">
				<h3 className="section-subtitle subtitle-center">Connect with me</h3>
				<div className="socials-container grid">
					<SocialLinksBox />
				</div>
			</div>
		</div>
	);
};

export default ProfileLinks;
