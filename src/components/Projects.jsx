/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './Footer';
import imgP1 from '../assets/images/project1.png';
import imgP2 from '../assets/images/project2.png';
import imgP3 from '../assets/images/project3.png';
import imgP4 from '../assets/images/project4.png';
import imgP5 from '../assets/images/project5.png';
import imgP6 from '../assets/images/project6.png';

const projectData = [
  {
    title: "Retro90",
    description: "Retro90 is a web app that showcases movies from the 1980s and 1990s using the TMDB API. Users can search for classic titles, view ratings, and open detailed movie information in a sleek modal. Built with React, styled with Tailwind CSS, and enhanced with Framer Motion animations, the project blends retro aesthetics with modern UI/UX for a nostalgic browsing experience.",
    image: imgP6,
    link: "https://retronineties.netlify.app/",
    alt: "Retro90 Project"
  },
  {
    title: "Responsive Layout Site",
    description: "In this project, I have built a responsive, mobile-first layout using HTML and CSS. The layout demonstrates an understanding of responsive design by adjusting to accommodate small, medium, and large screen sizes.",
    image: imgP1,
    link: "https://ivan0812.github.io/responsive-layout-site/",
    alt: "Responsive Layout Site"
  },
  {
    title: "Registration Form Project",
    description: "This is a mobile-friendly registration form using a wide variety of HTML form input types and attributes. Using the supplied mockup files, I built a mobile and desktop version of the form using media queries and a 'mobile-first' approach.",
    image: imgP2,
    link: "https://ivan0812.github.io/Registration_Form-project3/",
    alt: "Registration Form Project"
  },
  {
    title: "Game Show App",
    description: "In this project, I created a browser version of 'Wheel of Success', a word-guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.",
    image: imgP3,
    link: "https://ivan0812.github.io/Game_Show_App/",
    alt: "Game Show App"
  },
  {
    title: "Employee Directory",
    description: "Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can also integrate, display, and analyze social media and large data sets without creating and curating them yourself.",
    image: imgP4,
    link: "https://ivan0812.github.io/Employee_Directory/",
    alt: "Employee Directory"
  },
  {
    title: "Web App Dashboard",
    description: "In this project, I built an interactive dashboard for a web application using advanced web techniques including SVG graphics, JavaScript programming, and Chart.js.",
    image: imgP5,
    link: "https://ivan0812.github.io/Web_App_Dashboard/",
    alt: "Web App Dashboard"
  }
];

function Projects() {
    return (
      <>
      <div className="projects">
        <h2 className="project-title typer">These are some of the projects that I worked on:</h2>
        <div className="project-container">
          {projectData.map((project, index) => (
            <article key={index} className='project-item'>
              <a className='box' href={project.link} target="_blank" rel='noopener noreferrer' >
              {project.title}
              <img className='project-image' src= {project.image} alt={project.alt} />
                
                <p className="project-text">{project.description}</p>
                </a>
            </article>
          ))}
        </div>
      </div> 
      <Footer />
      </>
    );
}

export default Projects;