/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imgP1 from "../assets/images/project1.png";
import imgP5 from "../assets/images/project5.png";
import imgP6 from "../assets/images/project6.png";

const projectData = [
  {
    title: "ToyMarket",
    description:
      "ToyMarket is a full-stack e-commerce web application for selling new and used toys. The app includes product browsing, product details, a shopping cart system, checkout flow, stock validation, and basic order management. Built with React, Node.js, Express, and MongoDB.",
    image: imgP1,
    link: "https://toym.netlify.app/",
    alt: "ToyMarket Project",
  },
  {
    title: "Retro90",
    description:
      "Retro90 is a web app that showcases movies from the 1980s and 1990s using the TMDB API. Users can search for classic titles, view ratings, and open detailed movie information in a modal. Built with React and modern UI components.",
    image: imgP6,
    link: "https://retronineties.netlify.app/",
    alt: "Retro90 Project",
  },
  {
    title: "Web App Dashboard",
    description:
      "An interactive dashboard built using JavaScript, SVG graphics and Chart.js. The project demonstrates data visualisation, responsive layout techniques and interactive UI components.",
    image: imgP5,
    link: "https://ivan0812.github.io/Web_App_Dashboard/",
    alt: "Web App Dashboard Project",
  },
];

function Projects() {
  return (
    <>
      <div className="projects">
        <h2 className="project-title typer">
          These are some of the projects that I worked on:
        </h2>

        <div className="project-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              900: {
                slidesPerView: 2,
              },
            }}
            className="projects-swiper"
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <article className="project-item">
                  <a
                    className="box"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="project-name">{project.title}</h3>

                    <img
                      className="project-image"
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                    />

                    <p className="project-text">{project.description}</p>
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;