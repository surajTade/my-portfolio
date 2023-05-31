import { profileLinks } from "../data";

const ProfileLinksBox = () => {
	return (
		<>
			{profileLinks.map((profile, idx) => (
				<div className="profile-link-box" key={idx}>
					<a href={profile.link} rel="noopener noreferrer" target="_blank">
						<img src={profile.logo} />
						<h3 className="profile-link-title">{profile.title}</h3>
						<p className="profile-link-description">{profile.note}</p>
					</a>
				</div>
			))}
		</>
	);
};

export default ProfileLinksBox;
