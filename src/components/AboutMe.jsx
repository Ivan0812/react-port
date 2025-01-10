import React from 'react';
import Footer from './Footer';

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
          In the charming town of Croatia, Ivan Kovacevic began his story. A decade ago,
           he embraced a new chapter in Germany, where he built a life with his loving partner and two small children.
            While working in the service industry to provide for his family, Ivan harbored a deep passion for web development.
             Nights were spent honing his coding skills, weaving dreams into lines of code. His journey, from the serene 
             landscapes of Croatia to the dynamic streets of Germany,
              unfolded as a tale of love, family, and unwavering dedication. 
              Ivan's nights of coding were not just a job but a manifestation of his dreams,
               creating a narrative as captivating as the digital worlds he brought to life. In the heart of Germany, 
               Ivan continued to write his inspiring story—one where love, family, and a passion for web development converged
                into a harmonious symphony.
        </p>
      </div>
     
    </div> 
    <Footer />
    </>
  );
}

export default AboutMe;