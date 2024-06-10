import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shubham Kaushik</h1>
        <h5 className="header__text">
          Software Engineer & Freelancer
          <p>
            Hey there! 👋 I'm a Software Developer and Freelancer hailing from
            India, ready to ignite the tech scene! 💥 From idea conception to
            successful launch, I'm your go-to guy! I thrive on the adrenaline
            rush of coding competitions and hackathons, constantly pushing
            boundaries and thinking outside the box.
          </p>
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Shubham Kaushik" loading="lazy" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
