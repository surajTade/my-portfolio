import { stats } from "../data";
import parser from "html-react-parser";

const Stats = () => {
	return (
		<>
			{stats.map((stat, idx) => {
				return (
					<div className="stats-box" key={idx}>
						<h3 className="stats-no">{stat.no}</h3>
						<p className="stats-title">{parser(stat.title)}</p>
					</div>
				);
			})}
		</>
	);
};

export default Stats;
