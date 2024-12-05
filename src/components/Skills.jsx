import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        {skills.map((skill, idx) => {
          return (
            <div key={idx}>
              <span className="skill-category">{skill.category}</span>
              <div className="skills-list">
                {skill.children.map((item, idx) => (
                  <div className="progress-circle" key={idx}>
                    <CircularProgressbar
                      strokeWidth={7.5}
                      text={`${item.title}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;

// {skills.map((skill, idx) => {
//   return (
//     <div className="progress-box" key={idx}>
//       <h3>{skill.category}</h3>
//       <div className="skills-list">
//         {skill.children.map((item, idx) => {
//           return (
//             <div className="progress-circle" key={idx}>
//               <CircularProgressbar
//                 strokeWidth={7.5}
//                 text={`${item.title}`}
//               />
//             </div>
//           );
//         })}
//       </div>
//       {/* <h3 className="skills-title">{skill.title}</h3> */}
//     </div>
//   );
// })}
