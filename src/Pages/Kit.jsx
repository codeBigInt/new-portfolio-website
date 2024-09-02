import {
  FaCss3Alt,
  FaEvernote,
  FaFireAlt,
  FaGgCircle,
  FaJsSquare,
  FaLaptopCode,
  FaLink,
  FaNotesMedical,
  FaPenFancy,
  FaPooStorm,
  FaProcedures,
  FaProjectDiagram,
  FaRegIdBadge,
} from "react-icons/fa";
import { RiNextjsFill, RiRemixRunFill } from "react-icons/ri";
import "./CSS/Services.css";
import {
  FaBootstrap,
  FaCode,
  FaCss3,
  FaFire,
  FaGit,
  FaGithub,
  FaIdBadge,
  FaJs,
  FaJsfiddle,
  FaLightbulb,
  FaNode,
  FaNodeJs,
  FaNoteSticky,
  FaReact,
  FaRegLightbulb,
  FaRegNoteSticky,
  FaServicestack,
  FaSquareJs,
  FaWandSparkles,
} from "react-icons/fa6";
import SmallerText from "../assets/utils/UI/SmallerText";

const Kit = () => {
  const techSkill = [
    {
      icon: <FaCode />,
      title: "HTML",
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "ReactJs",
    },
    {
        icon: <RiNextjsFill />,
        lang: 'Next JS'
    },
    {
        icon: <RiRemixRunFill />,
        lang: 'Remix JS'
    },
    {
      icon: <FaGithub />,
      title: "Git & GitHub",
    },
    {
      icon: <FaCss3Alt />,
      title: "Tailwind CSS",
    },
    {
      icon: <FaFireAlt />,
      title: "Firebase",
    },
    {
      icon: <FaNodeJs />,
      title: "Nodejs",
    },
    {
      icon: <FaReact />,
      title: "Redux Toolkit",
    },
  ];
  return (
    <div className="service-container">
      <SmallerText p={"what frontend technology i use"} h1={"My Skill Set"} />
      <main>
        <ul className="services-list">
          {techSkill.map((listItem) => (
            <li>
              <span className="icon">{listItem.icon}</span>
              <span className="title">{listItem.title}</span>
              <span className="desc">{listItem.desc}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default Kit;
