import { personalInfo } from "../data";

const Info = () => {
	return (
		<>
			{personalInfo.map((info, idx) => {
				return (
					<li className="info-item" key={idx}>
						<span className="info-title">{info.title}</span>
						<span className="info-description">{info.description}</span>
					</li>
				);
			})}
		</>
	);
};

export default Info;
