import { FaDownload } from "react-icons/fa";
import { Info, ResumeItem, Skills, Stats } from "../../components";
import CV from "../../assets/Suraj_Tade_.pdf";
import "./about.css";
import { resume } from "../../data";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Information</h3>
            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="btn">
              Download CV
              <span className="btn-icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <Skills />
        </div>
      </section>

      <div className="seperator"></div>

      <section className="resume-experience">
        <h3 className="section-subtitle subtitle-center">Experience</h3>

        {/* <h2>No Professional experience yet, Willing to work!</h2> */}

        <div className="resume-container">
          <div className="resume-data">
            {resume.map((exp) => {
              if (exp.category === "experience") {
                return <ResumeItem key={exp.id} {...exp} />;
              }
            })}
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="resume-education">
        <h3 className="section-subtitle subtitle-center">Education</h3>

        <div className="resume-container">
          <div className="resume-data">
            {resume.map((exp) => {
              if (exp.category === "education") {
                return <ResumeItem key={exp.id} {...exp} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

{
  /* <section className="resume">
				<h3 className="section-subtitle subtitle-center">
					Education & Experience
				</h3>

				<div className="resume-container grid">
					<div className="resume-data">
						{resume.map((exp) => {
							if (exp.category === "education") {
								return <ResumeItem key={exp.id} {...exp} />;
							}
						})}
					</div>
					<div className="resume-data">
						{resume.map((exp) => {
							if (exp.category === "experience") {
								return <ResumeItem key={exp.id} {...exp} />;
							}
						})}
					</div>
				</div>
			</section> */
}
