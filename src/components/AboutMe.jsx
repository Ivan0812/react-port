/* eslint-disable no-unused-vars */
import React from 'react';
import { IconReact, IconJavaScript, IconCss, IconGit, IconGitHub } from './Icons';
import Footer from './Footer';
import Cert from '../assets/images/cert.jpg';

function AboutMe() {
  return (
    <>
      <div id="about-me">
        <div className="story-container">
          <svg
            className="info"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
          <div className="storytitle-container">
            <h2 className="story-title">About</h2>
            <span className="me">me</span>
          </div>
        </div>

        <div className="story">
        <p>
    I am a self-taught front-end developer with a strong focus on building clean, responsive and user-friendly web applications.
    My core technologies include HTML, CSS, JavaScript and React.
  </p>

  <p>
    During my learning journey I completed several development courses and successfully finished the Treehouse Front-End Techdegree program, where I built multiple projects and strengthened my understanding of modern web development practices.
  </p>

  <p>
    I enjoy turning ideas into functional interfaces and continuously improving my skills by building real-world projects.
    I am currently looking for my first opportunity as a Junior Frontend Developer where I can grow as a developer and contribute to meaningful products.
  </p>
          <div>
            Technologies I’m comfortable with:
            <div className="tech-icon">
              <IconReact />
              <IconJavaScript />
              <IconCss />
              <IconGit />
              <IconGitHub />
            </div>
          </div>
        </div>

        <div className="education">
          <div className="cert-container">
            <img className="cert" src={Cert} alt="Treehouse Front-End Web Development Certificate" loading='lazy' />
            <div className="cert-info">
              <h3>Treehouse Techdegree</h3>
              <p>Front-End Web Development Certificate</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;