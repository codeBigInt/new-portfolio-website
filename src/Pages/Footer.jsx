import React from "react";
import "./CSS/Footer.css";
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";
import { FaFireAlt, FaLinkedin } from "react-icons/fa";
import { icons } from "../assets/utils/Array";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="quote">
        <p>Goal's towards providing better user Experience</p>
        <h1>LUCKY Elliot</h1>
        <p>#Self-taught FrontEnd Developer</p>
      </div>
      <div className="follow">
        <h3>
          <span>
            <FaFireAlt />
          </span>
          <span>Follow My Social Handles</span>
        </h3>
        <div className="my-socials">
          {icons.map((item) => (
            <a target="_blank" id={item.id} href={item.href}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
