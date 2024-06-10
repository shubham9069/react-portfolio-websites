import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import FULLSTACK from "../../assets/full-stack.png";
import BLOCKCHAIN from "../../assets/blockchain.png";
import AI from "../../assets/Ai.png";
import SAAS from "../../assets/saas.svg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={profile_picture}
              alt="About profile image"
              loading="lazy"
            />
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
            <h3 style={{ marginBottom: "8px", color: "white" }}>
              My passion ?
            </h3>
            Designing and building everything from sleek websites to fully
            functional products. But wait, there's more to me! I'm not just
            about creating – I'm also dedicated to giving back. You'll find me
            contributing to open-source projects and creating Saas tools from
            scratch for business use cases 🚀
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <div className=" container what_I_do">
        <h3 style={{ margin: "1rem", color: "white" }}>Here What I do ?</h3>
        <div className="expertise_container">
          <div className=" expertise ">
            <img src={FULLSTACK} alt="full stack" loading="lazy" />
            <h4>Full Stack Products</h4>
            <p>
              I build everything you need for your website or app, from the
              front to the back
            </p>
          </div>
          <div className=" expertise ">
            <img src={SAAS} alt="saas " loading="lazy" />
            <h4>Saas Tools</h4>
            <p>
              I build everything you need for your website or app, from the
              front to the back
            </p>
          </div>
          <div className=" expertise ">
            <img src={AI} alt="ai image" loading="lazy" />
            <h4>Artifical Intelligence </h4>
            <p>
              I leverage artificial intelligence to make software smart so they
              can help you work better and faster .
            </p>
          </div>
          <div className=" expertise ">
            <img src={BLOCKCHAIN} alt="block chain " loading="lazy" />
            <h4>Blockchain</h4>
            <p>
              I use blockchain to make digital transactions secure and
              transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
