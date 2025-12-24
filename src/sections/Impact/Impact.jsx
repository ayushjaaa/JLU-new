import React from 'react';
import './Impact.css';
import Frame10 from '../../assets/images/Frame 10.png';
import Frame11 from '../../assets/images/Frame 11.png';
import Frame12 from '../../assets/images/Frame 12.png';
import Frame13 from '../../assets/images/Frame 13.png';

const Impact = () => {
  return (
    <div className="impact-wrapper">
      <div className="impact-section">
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
          {/* Right Visual - Repeating Cards Pattern */}
          <div className="impact-visual">
            {/* Card 1 - Green */}
            <div className="impact-card green-card">
              <div className="card-number">600+</div>
              <div className="card-text">Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <img src={Frame10} alt="University Building" className="side-image" />

            {/* Card 2 - Blue */}
            <div className="impact-card blue-card">
              <div className="card-number">600+</div>
              <div className="card-text">Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <img src={Frame11} alt="Campus Gateway" className="side-image campus-gateway-image" />

            {/* Card 3 - Yellow */}
            <div className="impact-card yellow-card">
              <div className="card-number">600+</div>
              <div className="card-text">Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <img src={Frame12} alt="Library Interior" className="side-image" />

            {/* Card 4 - Green */}
            <div className="impact-card green-card">
              <div className="card-number">600+</div>
              <div className="card-text">Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <img src={Frame13} alt="Study Hall" className="side-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
