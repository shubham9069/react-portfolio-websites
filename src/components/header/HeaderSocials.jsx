import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
