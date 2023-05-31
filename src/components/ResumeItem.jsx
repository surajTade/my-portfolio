import parser from "html-react-parser";

const ResumeItem = (prop) => {
	return (
		<div className="resume-item">
			<div className="resume-icon">{prop.icon}</div>
			<span className="resume-date">{prop.year}</span>
			<h3 className="resume-subtitle">{parser(prop.title)}</h3>
			<p className="resume-description">{prop.desc}</p>
		</div>
	);
};

export default ResumeItem;
