import React from "react";
import "./testimonials.css";
import {companyData} from '../../Dummydata.ts'



// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Company Experience</h5>
      <h2>Company</h2>
      <div className=" container testiomonials__container">
        {companyData.map(({ avatar, name, desc, link }) => {
          return (
            <a
              href={link}
              target="_blank"
              key={name}
              className="testimonial"
              ock
            >
              {" "}
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" loading="lazy" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <div
                className="coworker__review"
                dangerouslySetInnerHTML={{ __html: desc }}
              ></div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
