import React, { useState } from 'react';
import ContactModal from './ContactModal';
import Cv from './Cv';


const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer id="contactMe" className="footer">
      <div className="contact">
        <span className="contact-button" onClick={openModal}>Contact me!</span>
        {isModalOpen && <ContactModal closeModal={closeModal} />}
         <Cv />
         <span className='download'> &#8592; Download CV</span>
      </div>
      <span className="rights">"created by I. Kovacevic"</span>
    </footer>
  );
};
export default Footer;
