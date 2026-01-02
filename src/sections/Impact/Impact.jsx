import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';
import Frame10 from '../../assets/images/Frame 10.png';
import Frame11 from '../../assets/images/Frame 11.png';
import Frame12 from '../../assets/images/Frame 12.png';
import Frame13 from '../../assets/images/Frame 13.png';

const Impact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        if (!isVisible) {
          // Small delay to ensure DOM is fully rendered
          setTimeout(() => {
            // Get the last image element
            const lastImage = content.querySelector('.side-image:last-of-type');

            if (lastImage) {
              // Get positions
              const contentRect = content.getBoundingClientRect();
              const lastImageRect = lastImage.getBoundingClientRect();
              const viewportWidth = section.offsetWidth;

              // Calculate distance from content start to last image end (right edge)
              const distanceToImageStart = lastImageRect.left - contentRect.left;
              const imageWidth = lastImageRect.width;
              const distanceToImageEnd = distanceToImageStart + imageWidth;

              // The scroll should stop when the last image's right edge reaches the viewport's right edge
              const maxScroll = distanceToImageEnd - viewportWidth;

              console.log('Distance to Image Start:', distanceToImageStart);
              console.log('Image Width:', imageWidth);
              console.log('Distance to Image End:', distanceToImageEnd);
              console.log('Viewport Width:', viewportWidth);
              console.log('Max Scroll:', maxScroll);

              // Set CSS custom property for the animation
              content.style.setProperty('--scroll-distance', `-${maxScroll}px`);
            }
          }, 100);

          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div className="impact-wrapper" ref={sectionRef}>
      <div
        ref={contentRef}
        className={`impact-section ${isVisible ? 'animate' : ''}`}
      >
        {/* Left Content */}
        <div className="impact-content">
          <h2 className="impact-heading">JLU's Impact</h2>

          <div className="impact-paragraphs">
            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non. Pretium
              lobortis ultrices urna faucibus leo. Adipiscing a eu accumsan ornare. Sodales in tempor
              pretium nibh vulputate tincidunt aliquam.
            </p>

            <p className="impact-paragraph">
              Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.
            </p>
          </div>
        </div>

        {/* Right Visual Container */}
        <div className="impact-visual-wrapper">
          <div className="impact-visual">
            {/* Green Card */}
            <div className="impact-card green-card">
              <div>
                <p className="card-number">01</p>
                <p className="card-subtitle">IMPACT METRIC</p>
              </div>
              <div>
                <h3 className="card-title">Student Success</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Lectus vivamus congue massa tortor non.</p>
              </div>
            </div>

            <img src={Frame10} alt="University Building" className="side-image" />

            {/* Blue Card */}
            <div className="impact-card blue-card">
              <div>
                <p className="card-number">02</p>
                <p className="card-subtitle">GLOBAL REACH</p>
              </div>
              <div>
                <h3 className="card-title">International Network</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pretium lobortis ultrices urna faucibus leo.</p>
              </div>
            </div>

            <img src={Frame11} alt="Campus Gateway" className="side-image" />

            {/* Yellow Card */}
            <div className="impact-card yellow-card">
              <div>
                <p className="card-number">03</p>
                <p className="card-subtitle">RESEARCH OUTPUT</p>
              </div>
              <div>
                <h3 className="card-title">Innovation Hub</h3>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur. Adipiscing a eu accumsan ornare.</p>
              </div>
            </div>

            <img src={Frame12} alt="Library Interior" className="side-image" />
            <img src={Frame13} alt="Study Hall" className="side-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
