import "./CSS/About.css";
import me from "../assets/images/me.jpeg";
import { ability, icons } from "../assets/utils/Array";
import { FaDownload, FaGg, FaGgCircle } from "react-icons/fa";
import SmallerText from "../assets/utils/UI/SmallerText";
import doc from "../assets/Elliot's New CV.pdf"

const About = () => {
  return (
    <div className="about-container">
      <main>
        <div className="image-card">
          <div className="sliced-image">
            <img src={me} alt="Lucky Elliot" />
          </div>
          <div className="image-theme">
            <h3>
              <span className="hash">#Self-Taught </span>
              <span>FrontEnd Developer </span>
            </h3>
          </div>
        </div>
        <div className="about-text-area">
          <div className="about-text">
            <SmallerText p={"What to know About me"} h1={"About Me"} />
            <p>
              I'm a passionate frontend developer with a love for creating
              dynamic and user-friendly web applications. With expertise in
              React.js and a keen eye for design, I strive to deliver seamless
              and engaging user experiences. I am always eager to learn new
              technologies and frameworks to enhance my skill set and stay
              updated with industry trends. When I'm not coding, I enjoy playing
              musical instruments like the keyboard and guitar.
            </p>
          </div>
          <div className="abilities">
            <div className="social-reach">
              {icons.map((items) => (
                <a href={items.href}>{items.icon}</a>
              ))}
            </div>
            <a href={doc} download className="about-btn">
              <span>Download CV</span>
              <span>
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
