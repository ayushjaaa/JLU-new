import React from 'react';
import './ImageGallery.css';
import HeroSection1 from '../../assets/images/HeroSection1.png';
import HeroSection2 from '../../assets/images/HeroSection2.png';
import HeroSection3 from '../../assets/images/HeroSection3.png';

const ImageGallery = () => {
  return (
    <div className="image-gallery-section">
      {/* First Section Wrapper */}
      <div className="section-wrapper">
        <div className="image-container" style={{ backgroundImage: `url(${HeroSection1})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
        </div>
      </div>

      {/* Second Section Wrapper */}
      <div className="section-wrapper">
        <div className="image-container section-2" style={{ backgroundImage: `url(${HeroSection2})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
        </div>
      </div>

      {/* Third Section Wrapper */}
      <div className="section-wrapper">
        <div className="image-container section-3" style={{ backgroundImage: `url(${HeroSection3})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
