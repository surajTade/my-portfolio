import {
	FaDribbble,
	FaEnvelopeOpen,
	FaFacebook,
	FaPhoneSquareAlt,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
	return (
		<section className="container section">
			<h2 className="section-title">
				Get In <span>Touch</span>
			</h2>

			<div className="contact-container container grid">
				<div className="contact-data">
					<h3 className="contact-title">Don't be Shy !</h3>
					<p className="contact-description">
						Feel free to get in touch with me. I am always open to discussing
						new project, creative ideas or opportunities to be a part of your
						vision.
					</p>
					<div className="contact-info">
						<div className="info-item">
							<FaEnvelopeOpen className="info-icon" />
							<div>
								<span className="info-title">Mail me</span>
								<h4 className="info-desc">suraj.tade20@pccoepune.org</h4>
							</div>
						</div>
						<div className="info-item">
							<FaPhoneSquareAlt className="info-icon" />
							<div>
								<span className="info-title">WhatsApp me</span>
								<h4 className="info-desc">8999948294</h4>
							</div>
						</div>
					</div>

					<div className="contact-socials">
						<a href="" className="contact-socials-link">
							<FaFacebook />
						</a>
						<a href="" className="contact-socials-link">
							<FaTwitter />
						</a>
						<a href="" className="contact-socials-link">
							<FaYoutube />
						</a>
						<a href="" className="contact-socials-link">
							<FaDribbble />
						</a>
					</div>
				</div>
				<form className="contact-form">
					<div className="form-input-group">
						<div className="form-input-div">
							<input
								type="text"
								placeholder="Your Name"
								className="form-control"
							/>
						</div>
						<div className="form-input-div">
							<input
								type="email"
								placeholder="Your Email"
								className="form-control"
							/>
						</div>
						<div className="form-input-div">
							<input
								type="text"
								placeholder="Your Subject"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-input-div">
						<textarea
							placeholder="Your Message"
							className="form-control textarea"
						/>
					</div>

					<button className="btn contact-btn">
						Send Message
						<span className="btn-icon contact-btn-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
