import React, { useState } from "react";
import "./portfolio.css";

import {data} from '../../Dummydata.ts'



const Portfolio = () => {
  const [selection_tab, setSelection_tab] = useState("company");

  function handlesetSelection_tab(tab) {
    setSelection_tab(tab);
  }
  return (
    <section id="portfolio">
      <h5>You can find article on linkdin</h5>
      <div className="selection_tab">
        <h4
          className={selection_tab == "project" && "activate"}
          onClick={() => handlesetSelection_tab("project")}
        >
          Project
        </h4>
        <h4
          className={selection_tab == "company" && "activate"}
          onClick={() => handlesetSelection_tab("company")}
        >
          Company
        </h4>
        <h4
          className={selection_tab == "contribute" && "activate"}
          onClick={() => handlesetSelection_tab("contribute")}
        >
          Contribute
        </h4>
      </div>

      <div className="container portfolio__container">
        {data[selection_tab].map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                {project.hasOwnProperty("video") ? (
                  <video
                    controls
                    preload="none"
                    poster={project.image}
                  >
                    <source src={project.video} />
                  </video>
                ) : (
                  <img
                    src={project?.image}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
              </div>
              <h3>{project.title}</h3>

              <div className="project_tags">
                {project.stack?.map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </div>
              <p className="project_desc">{project.description}</p>
              <div className="portfolio__item-cta">
                <a href={project?.article} target="_blank" className="btn">
                  Check this out
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
