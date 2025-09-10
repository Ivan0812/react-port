/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
/* eslint-enable no-unused-vars */
import profileImage from '../assets/images/IMG_7341.jpg';
import Footer from './Footer';

function Profile() {
  const profileRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (isImageLoaded && profileRef.current) {
      profileRef.current.classList.add('fade-in');
    }
  }, [isImageLoaded]);

  return (
    <>
      <div className="profile" ref={profileRef}>
        <div className="title">
          <h1>Hi, My name is Ivan Kovacevic</h1>
          <h2>Aspiring Frontend Developer</h2>
        </div>
        <img
          className={`my-img ${isImageLoaded ? 'loaded' : ''}`}
          src={profileImage}
          alt="Ivan K"
          loading="eager"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <Footer />
    </>
  );
}

export default Profile;