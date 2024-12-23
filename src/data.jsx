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
  FaTwitter,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/anantya.png";
import Work2 from "./assets/teAICup.png";
import Work3 from "./assets/tenziesGame.png";
import Work4 from "./assets/eventory.png";

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
    note: "Max Rating: 1722, Problems: 540+",
    link: "https://leetcode.com/suraj_tade/",
  },
  {
    id: 2,
    title: "GeeksForGeeks",
    logo: gfgLogo,
    note: "Max Streak: 162 Days, Problems: 450+",
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
    note: "",
    link: "https://codeforces.com/profile/suraj_tade",
  },
  {
    id: 5,
    title: "GitHub",
    logo: githubLogo,
    note: "I upload all my project repositories here",
    link: "https://github.com/surajTade",
  },
];

export const socialLinks = [
  {
    id: 1,
    type: "email",
    title: "Email, Personal",
    logo: <FaEnvelopeOpen />,
    link: "surajtade1029@gmail.com",
  },

  {
    id: 2,
    type: "email",
    title: "Email, College",
    logo: <FaEnvelopeOpen />,
    link: "suraj.tade20@pccoepune.org",
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
  ,
  {
    id: 4,
    type: "twitter",
    title: "Twitter",
    logo: <FaTwitter />,
    link: "https://x.com/suraj_tade?t=7LCAreH5iVREYYd869TVAw&s=09",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Suraj Tade",
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
    title: "LinkedIn : ",
    description: "Suraj Tade",
  },

  {
    id: 7,
    title: "Email : ",
    description: "surajtade1029@gmail.com",
  },
];

export const stats = [
  {
    id: 1,
    no: "600+",
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
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - Present",
    title: "Software Analyst <span> PTC </span>",
    desc: "ATXT Platform Development",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - 2024",
    title: "Intern <span> PTC </span>",
    desc: "ATXT Platform Development",
  },

  {
    id: 3,
    category: "",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "",
  },

  {
    id: 4,
    category: "",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2024",
    title: "B.Tech. Computer Engineering <span> PCCOE, Pune </span>",
    desc: "CGPA: 8.77",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - 2024",
    title: "Honours in Deep Learning <span> PCCOE, Pune </span>",
    desc: "CGPA: 9",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - 2020",
    title: "HSC <span> Army Public School, Devlali </span>",
    desc: "CBSE Board, Result: 93.4%",
  },

  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017 - 2018",
    title: "SSC <span> Army Public School, Devlali </span>",
    desc: "CBSE Board, Result: 89%",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    children: [
      { id: 1, title: "C", percentage: "80" },
      { id: 2, title: "C++", percentage: "80" },
      { id: 3, title: "Java", percentage: "70" },
      { id: 4, title: "Python", percentage: "60" },
      { id: 5, title: "JavaScript", percentage: "75" },
      { id: 6, title: "TypeScript", percentage: "70" },
    ],
  },
  {
    category: "Web Development",
    children: [
      { id: 7, title: "React.js", percentage: "75" },
      { id: 8, title: "Node.js", percentage: "65" },
      { id: 9, title: "Express.js", percentage: "60" },
      { id: 10, title: "Tailwind CSS", percentage: "75" },
      { id: 11, title: "WebSockets", percentage: "60" },
    ],
  },
  {
    category: "Databases",
    children: [
      { id: 12, title: "MySQL", percentage: "60" },
      { id: 13, title: "PostgreSQL", percentage: "60" },
      { id: 14, title: "MongoDB", percentage: "70" },
      { id: 15, title: "Firebase", percentage: "65" },
    ],
  },
  {
    category: "Cloud & DevOps",
    children: [
      {
        id: 16,
        title: "AWS (EC2, S3, DynamoDB, CDNs, Load Balancers)",
        percentage: "60",
      },
      { id: 17, title: "Docker", percentage: "65" },
      { id: 18, title: "Containerization", percentage: "60" },
      { id: 19, title: "Object Storage", percentage: "60" },
    ],
  },
  {
    category: "Machine Learning",
    children: [
      { id: 20, title: "OpenCV", percentage: "50" },
      { id: 21, title: "Transfer Learning", percentage: "50" },
      { id: 22, title: "scikit-learn", percentage: "50" },
    ],
  },
  {
    category: "API Integration",
    children: [
      { id: 23, title: "REST APIs", percentage: "70" },
      { id: 24, title: "WebSocket APIs", percentage: "60" },
    ],
  },
  {
    category: "Version Control",
    children: [{ id: 25, title: "Git/GitHub", percentage: "75" }],
  },
  {
    category: "Design Tools",
    children: [
      { id: 26, title: "Figma", percentage: "60" },
      { id: 27, title: "Adobe Photoshop", percentage: "60" },
    ],
  },
  {
    category: "Test Automation",
    children: [
      { id: 28, title: "Playwright", percentage: "55" },
      { id: 29, title: "Jest", percentage: "55" },
      { id: 30, title: "JUnit", percentage: "60" },
      { id: 31, title: "Mockito", percentage: "60" },
    ],
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
    img: Work4,
    title: "Event Listing Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Eventory",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "ReactJs, Firebase, TailwindCSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://anantya2023.pccoe.hosting.acm.org/",
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: "TE Connectivity AI Cup 2023",
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
    ],
  },

  {
    id: 4,
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
