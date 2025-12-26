import React, { useRef } from 'react';
import './ImageGallery.css';
import HeroSection1 from '../../assets/images/HeroSection1.png';
import HeroSection2 from '../../assets/images/HeroSection2.png';
import HeroSection3 from '../../assets/images/HeroSection3.png';

const ImageGallery = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="image-gallery-section">
      {/* First Section Wrapper */}
      <div className="section-wrapper" ref={section1Ref}>
        <div className="image-container" style={{ backgroundImage: `url(${HeroSection1})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
          <button
            className="gallery-nav-button next-button"
            onClick={() => scrollToSection(section2Ref)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      {/* Second Section Wrapper */}
      <div className="section-wrapper" ref={section2Ref}>
        <div className="image-container section-2" style={{ backgroundImage: `url(${HeroSection2})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
          <button
            className="gallery-nav-button prev-button"
            onClick={() => scrollToSection(section1Ref)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="gallery-nav-button next-button"
            onClick={() => scrollToSection(section3Ref)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      {/* Third Section Wrapper */}
      <div className="section-wrapper" ref={section3Ref}>
        <div className="image-container section-3" style={{ backgroundImage: `url(${HeroSection3})` }}>
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
          <button
            className="gallery-nav-button prev-button"
            onClick={() => scrollToSection(section2Ref)}
            aria-label="Previous image"
          >
            ‹
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
