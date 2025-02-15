/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './Footer';
import Cert from '../assets/images/cert.jpg';

const Education = () => {
  return (
    <>
      <div className='education'>
        <p className='desc'>After several years of trying to learn coding, I decided to take a chance and enroll in the Techdegree program at Treehouse Inc. 
            After a year of hard work, I successfully completed the program and earned a certificate.
             During that time, both before and after the Techdegree, 
            I took numerous courses focused on front-end development.
            I am a self taught front end developer wiht fundamentals in: HTML, CSS, JavaScript and React.js </p>
        <img className='cert' src={Cert} alt="certificat" />
      </div>
    
      <Footer />
      </>
  )
}

export default Education