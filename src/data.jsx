import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaBriefcase,
	FaGraduationCap,
	FaCode,
	FaLink,
	FaLinkedin,
	FaEnvelopeOpen,
	FaGithub,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/anantya.png";
import Work2 from "./assets/teAICup.png";
import Work3 from "./assets/tenziesGame.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

import leetcodeLogo from "./assets/leetcode.png";
import gfgLogo from "./assets/gfg.png";
import codechefLogo from "./assets/codechef.png";
import githubLogo from "./assets/github.png";
import codeforcesLogo from "./assets/codeforces.png";

export const links = [
	{
		id: 1,
		name: "Home",
		icon: <FaHome className="nav__icon" />,
		path: "/",
	},

	{
		id: 2,
		name: "About",
		icon: <FaUser className="nav__icon" />,
		path: "/about",
	},

	{
		id: 3,
		name: "Portfolio",
		icon: <FaFolderOpen className="nav__icon" />,
		path: "/portfolio",
	},

	{
		id: 4,
		name: "Contact",
		icon: <FaLink className="nav__icon" />,
		path: "/contact",
	},
];

export const profileLinks = [
	{
		id: 1,
		title: "LeetCode",
		logo: leetcodeLogo,
		note: "Max Rating: 1722, Problems: 380+",
		link: "https://leetcode.com/suraj_tade/",
	},
	{
		id: 2,
		title: "GeeksForGeeks",
		logo: gfgLogo,
		note: "Max Streak: 121 Days, Problems: 380+",
		link: "https://auth.geeksforgeeks.org/user/surajtade20/practice",
	},
	{
		id: 3,
		title: "CodeChef",
		logo: codechefLogo,
		note: "2 Star, highest rating: 1487",
		link: "https://www.codechef.com/users/suraj_tade",
	},
	{
		id: 4,
		title: "CodeForces",
		logo: codeforcesLogo,
		note: "Not much active here",
		link: "https://codeforces.com/profile/suraj_tade",
	},
	{
		id: 5,
		title: "GitHub",
		logo: githubLogo,
		note: "I upload all my projects repository here",
		link: "https://github.com/surajTade",
	},
];

export const socialLinks = [
	{
		id: 1,
		type: "email",
		title: "Email, College",
		logo: <FaEnvelopeOpen />,
		link: "suraj.tade20@pccoepune.org",
	},

	{
		id: 2,
		type: "email",
		title: "Email, Personal",
		logo: <FaEnvelopeOpen />,
		link: "surajtade1029@gmail.com",
	},
	{
		id: 3,
		type: "linkedin",
		title: "LinkedIn",
		logo: <FaLinkedin />,
		link: "https://www.linkedin.com/in/suraj-tade/",
	},
	{
		id: 4,
		type: "github",
		title: "GitHub",
		logo: <FaGithub />,
		link: "https://github.com/surajTade",
	},
];

export const personalInfo = [
	{
		id: 1,
		title: "First Name : ",
		description: "Suraj",
	},

	{
		id: 2,
		title: "Last Name : ",
		description: "Tade",
	},

	{
		id: 3,
		title: "Age : ",
		description: `${new Date().getFullYear() - 2002} Years`,
	},

	{
		id: 4,
		title: "Nationality : ",
		description: "Indian",
	},

	{
		id: 5,
		title: "Address : ",
		description: "Pune",
	},

	{
		id: 6,
		title: "Email : ",
		description: "suraj.tade20@pccoepune.org",
	},

	{
		id: 7,
		title: "LinkedIn : ",
		description: "Suraj Tade",
	},

	{
		id: 8,
		title: "Languages : ",
		description: "Hindi, English, Marathi",
	},
];

export const stats = [
	{
		id: 1,
		no: "400+",
		title: "DSA Problems <br /> solved",
	},

	{
		id: 2,
		no: "8",
		title: "Complete <br /> Projects",
	},

	{
		id: 3,
		no: "1",
		title: "Successful <br /> Workshop",
	},

	{
		id: 4,
		no: "1",
		title: " Review <br /> Paper",
	},
];

export const resume = [
	{
		id: 1,
		category: "",
		icon: <FaBriefcase />,
		year: "2018 - PRESENT",
		title: "Web Developer <span> Envato </span>",
		desc: "",
	},

	{
		id: 2,
		category: "",
		icon: <FaBriefcase />,
		year: "2013 - 2018",
		title: "UI/UX Designer <span> Themeforest </span>",
		desc: "",
	},

	{
		id: 3,
		category: "",
		icon: <FaBriefcase />,
		year: "2005 - 2013",
		title: "Consultant <span> Videohive </span>",
		desc: "",
	},

	{
		id: 4,
		category: "education",
		icon: <FaGraduationCap />,
		year: "2020 - 2024",
		title: "B.Tech. Computer Engineering <span> PCCOE, Pune </span>",
		desc: "Current CGPA: 8.77",
	},

	{
		id: 5,
		category: "education",
		icon: <FaGraduationCap />,
		year: "2022 - 2024",
		title: "Honours in Deep Learning <span> PCCOE, Pune </span>",
		desc: "Current CGPA: 9",
	},

	{
		id: 6,
		category: "education",
		icon: <FaGraduationCap />,
		year: "2019 - 2020",
		title: "SSC <span> Army Public School, Devlali </span>",
		desc: "CBSE Board, Result: 93.4%",
	},

	{
		id: 7,
		category: "education",
		icon: <FaGraduationCap />,
		year: "2017 - 2018",
		title: "HSC <span> Army Public School, Devlali </span>",
		desc: "CBSE Board, Result: 89%",
	},
];

export const skills = [
	{
		id: 1,
		title: "C/C++",
		percentage: "80",
	},

	{
		id: 2,
		title: "Python",
		percentage: "60",
	},

	{
		id: 3,
		title: "Java",
		percentage: "50",
	},

	{
		id: 4,
		title: "Javascript",
		percentage: "45",
	},

	{
		id: 5,
		title: "MySQL DB",
		percentage: "60",
	},

	{
		id: 6,
		title: "MongoDB",
		percentage: "45",
	},

	{
		id: 7,
		title: "Git/GitHub",
		percentage: "75",
	},

	{
		id: 8,
		title: "React.js",
		percentage: "45",
	},

	{
		id: 9,
		title: "Figma",
		percentage: "60",
	},

	{
		id: 10,
		title: "CSS",
		percentage: "75",
	},

	{
		id: 11,
		title: "Photoshop",
		percentage: "60",
	},

	{
		id: 12,
		title: "Canva",
		percentage: "60",
	},
];

export const portfolio = [
	{
		id: 1,
		img: Work1,
		title: "Event Website",
		details: [
			{
				icon: <FiFileText />,
				title: "Project : ",
				desc: "Anantya 2023",
			},
			{
				icon: <FaCode />,
				title: "Tech Stack : ",
				desc: "ReactJs, Bootstrap, Figma",
			},
			{
				icon: <FiExternalLink />,
				title: "Preview : ",
				desc: "https://anantya2023.pccoe.hosting.acm.org/",
			},
		],
	},

	{
		id: 2,
		img: Work2,
		title: "TE AI Cup",
		details: [
			{
				icon: <FiFileText />,
				title: "Project : ",
				desc: "Defect Detection System",
			},
			{
				icon: <FaCode />,
				title: "Language : ",
				desc: "Python",
			},
			// {
			// 	icon: <FiExternalLink />,
			// 	title: "Preview : ",
			// 	desc: "https://www.dribble.com",
			// },
		],
	},

	{
		id: 3,
		img: Work3,
		title: "Tenzies Game",
		details: [
			{
				icon: <FiFileText />,
				title: "Project : ",
				desc: "Game",
			},
			{
				icon: <FaCode />,
				title: "Language : ",
				desc: "ReactJs",
			},
			{
				icon: <FiExternalLink />,
				title: "Repo Link : ",
				desc: "https://github.com/surajTade/TenziesGame",
			},
		],
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: "hsl(252, 35%, 51%)",
	},

	{
		id: 2,
		img: Theme2,
		color: "hsl(4, 93%, 54%)",
	},

	{
		id: 3,
		img: Theme3,
		color: "hsl(271, 76%, 53%)",
	},

	{
		id: 4,
		img: Theme4,
		color: "hsl(225, 73%, 57%)",
	},

	{
		id: 5,
		img: Theme5,
		color: "hsl(43, 74%, 49%)",
	},

	{
		id: 6,
		img: Theme6,
		color: "hsl(339, 81%, 66%)",
	},

	{
		id: 7,
		img: Theme7,
		color: "hsl(80, 61%, 50%)",
	},

	{
		id: 8,
		img: Theme8,
		color: "hsl(19, 96%, 52%)",
	},

	{
		id: 9,
		img: Theme9,
		color: "hsl(88, 65%, 43%)",
	},

	{
		id: 10,
		img: Theme10,
		color: "hsl(42, 100%, 50%)",
	},
];
