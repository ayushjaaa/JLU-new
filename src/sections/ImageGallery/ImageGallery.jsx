import React, { useRef, useState } from 'react';
import './ImageGallery.css';
import HeroSection1 from '../../assets/images/HeroSection1.png';
import HeroSection2 from '../../assets/images/HeroSection2.png';
import HeroSection3 from '../../assets/images/HeroSection3.png';

const ImageGallery = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [shrinkingCard, setShrinkingCard] = useState(null);

  const handleCardClick = (cardNumber) => {
    if (expandedCard === cardNumber) {
      // Clicking the same card - shrink it
      setShrinkingCard(cardNumber);
      setTimeout(() => {
        setExpandedCard(null);
        setShrinkingCard(null);
      }, 800);
    } else if (expandedCard !== null) {
      // Another card is expanded - shrink it first
      setShrinkingCard(expandedCard);
      setTimeout(() => {
        setShrinkingCard(null);
        setExpandedCard(cardNumber);
      }, 800);
    } else {
      // No card is expanded - expand this one
      setExpandedCard(cardNumber);
    }
  };

  return (
    <div className="image-gallery-section">
      {/* First Section Wrapper */}
      <div className="section-wrapper" ref={section1Ref}>
        <div
          className={`image-container ${expandedCard === 1 ? 'expanded' : ''} ${shrinkingCard === 1 ? 'shrinking' : ''}`}
          style={{ backgroundImage: `url(${HeroSection1})` }}
          onClick={() => handleCardClick(1)}
        >
          <div className="image-content">
            <h1 className="solid-text">PASSION</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">SUCCESS</h2>
          </div>
        </div>
      </div>

      {/* Second Section Wrapper */}
      <div className="section-wrapper" ref={section2Ref}>
        <div
          className={`image-container section-2 ${expandedCard === 2 ? 'expanded' : ''} ${shrinkingCard === 2 ? 'shrinking' : ''}`}
          style={{ backgroundImage: `url(${HeroSection2})` }}
          onClick={() => handleCardClick(2)}
        >
          <div className="image-content">
            <h1 className="solid-text">STUDY</h1>
            <h2 className="outline-text">SUCCESS</h2>
            <h2 className="outline-text">PASSION</h2>
          </div>
        </div>
      </div>

      {/* Third Section Wrapper */}
      <div className="section-wrapper" ref={section3Ref}>
        <div
          className={`image-container section-3 ${expandedCard === 3 ? 'expanded' : ''} ${shrinkingCard === 3 ? 'shrinking' : ''}`}
          style={{ backgroundImage: `url(${HeroSection3})` }}
          onClick={() => handleCardClick(3)}
        >
          <div className="image-content">
            <h1 className="solid-text">SUCCESS</h1>
            <h2 className="outline-text">STUDY</h2>
            <h2 className="outline-text">PASSION</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
