import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
	return (
		<>
			{skills.map((skill, idx) => {
				return (
					<div className="progress-box" key={idx}>
						<div className="progress-circle">
							<CircularProgressbar
								strokeWidth={7.5}
								text={`${skill.title}`}
								value={skill.percentage}
							/>
						</div>
						{/* <h3 className="skills-title">{skill.title}</h3> */}
					</div>
				);
			})}
		</>
	);
};

export default Skills;

{
	/* <div className="skills-section grid">
						<div className="skill-box">
							<div className="programming-skill"></div>
							<div className="other-technologies"></div>
						</div>
					</div> */
}
