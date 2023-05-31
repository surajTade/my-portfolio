import { socialLinks } from "../data";

const SocialLinksBox = () => {
	const getLink = (link, type) => {
		if (type === "email") return `mailto:${link}`;

		return link;
	};

	return (
		<>
			{socialLinks.map((link, idx) => (
				<div className="social-link-box" key={idx}>
					<a
						href={getLink(link.link, link.type)}
						rel="noopener noreferrer"
						target="_blank">
						<div className="social-link-logo">{link.logo}</div>
						<div>
							<h3 className="social-link-title">{link.title}</h3>
							<p className="social-link-description">{link.link}</p>
						</div>
					</a>
				</div>
			))}
		</>
	);
};

export default SocialLinksBox;
