import {
  FaEvernote,
  FaGgCircle,
  FaLaptopCode,
  FaLink,
  FaNotesMedical,
  FaPenFancy,
  FaPooStorm,
  FaProcedures,
  FaProjectDiagram,
  FaRegIdBadge,
} from "react-icons/fa";
import "./CSS/Services.css";
import {
  FaCode,
  FaCommentDots,
  FaIdBadge,
  FaLightbulb,
  FaNoteSticky,
  FaRegLightbulb,
  FaRegNoteSticky,
  FaServicestack,
  FaWandSparkles,
} from "react-icons/fa6";
import SmallerText from "../assets/utils/UI/SmallerText";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      desc: "Making sure your website is scallable on any device you users are using",
    },
    {
      icon: <FaCode />,
      title: "Reusable Code",
      desc: "Reusability of code is assured for easy codebase maintenance",
    },
    {
      icon: <FaPooStorm />,
      title: "Fast Delivery",
      desc: "Project compleion and delivery is always on time with amaximum performance",
    },
    {
      icon: <FaWandSparkles />,
      title: "Unique Design",
      desc: "Building exquisite user interfaces providing user with slick experience",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      desc: "Efficient project management and effective communication",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Innovation",
      desc: "Support in providing new features to your web application",
    },
  ];
  return (
    <div className="service-container">
      <SmallerText p={"What services we can offer you"} h1={"Services"} />
      <main>
        <ul className="services-list">
          {services.map((listItem) => (
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
export default Services;
