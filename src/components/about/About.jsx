import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About profile image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years</small> <br />
              <small>200+ LeetCode</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                M.C.A. DPG Degree College
                <br />
                B.C.A. Dronacharya Govt College
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                8+ FreeLancing
                <br />
                3+ Saas Tools
              </small>
            </article>
          </div>
          <p>
            Experience is valuable, but so is potential. While I may not have as
            much experience as other candidates, I offer enthusiasm,
            adaptability, and a strong desire to learn. Give me the chance to
            prove myself, and you won't be disappointed.
          </p>
          <p>
            I bring over 1.5+ years of experience in the world of software
            development, specializing in crafting robust architectures from
            conceptualization to detailed implementation for distributed
            systems. I've successfully delivered scalable solutions that stand
            the test of real-world challenges and enterprise application
          </p>
          {/* <p>
            As a problem solver at heart I have a background in Engineering,
            Product Design, & Entrepreneurship. I previously also aquired funding by Innovation Norway and ran a startup called Streets of Oslo. In a past life I also worked as a Consultant in TietoEvry within Product Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In 2022, after a career focused on the business side of IT, I
            immersed myself in the technical side, and become a frontend
            developer through Academic Work's 12-week intensive training in
            JavaScript. I then worked as a JavaScript Consultant for Academic
            Work before continuing my career as a Frontend Developer for
            Integration Systems AS.
          </p> */}
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
