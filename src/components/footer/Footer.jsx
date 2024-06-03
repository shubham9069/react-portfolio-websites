import React from "react";
import "./footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Shubham Kausik
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">My Skill</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#testimonials">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/shubham-kaushik-106775213/"
        >
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://github.com/shubham9069">
          <FaGithub />
        </a>
        <a target="_blank" href="https://x.com/Shubhamkhaushik">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shubham Kaushik. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
