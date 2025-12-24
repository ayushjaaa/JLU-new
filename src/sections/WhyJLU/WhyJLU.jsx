import React from 'react';
import './WhyJLU.css';

const WhyJLU = () => {
  return (
    <>
      {/* Intro Section - Sticky Background Layer */}
      <div className="whyjlu-intro">
        <h1 className="whyjlu-intro-text">WHY JLU?</h1>
      </div>

      {/* Content Section - Overlaying Foreground Layer */}
      <div className="whyjlu-content">
        <div className="whyjlu-cards-container">
          {/* Green Card */}
          <div className="whyjlu-card green-card-why">
            <div className="card-top">
              <h2 className="card-big-number">100+</h2>
              <p className="card-subtitle">Lorem ipsum dolor</p>
            </div>
            <div className="card-bottom">
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque dexjfdi kedj.
              </p>
            </div>
          </div>

          {/* Blue Card */}
          <div className="whyjlu-card blue-card-why">
            <div className="card-top">
              <h2 className="card-title-white">Lorem ipsum</h2>
            </div>
            <div className="card-middle">
              <p className="card-description-white">
                Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque
              </p>
            </div>
            <div className="card-bottom">
              <a href="#" className="card-link">Lorem ipsum</a>
              <a href="#" className="card-link">Lorem ipsum</a>
            </div>
          </div>

          {/* Red/Pink Card */}
          <div className="whyjlu-card red-card-why">
            <div className="card-top">
              <h2 className="card-percentage">100%</h2>
              <p className="card-subtitle-white">Lorem ipsum dolor</p>
            </div>
            <div className="card-bottom">
              <p className="card-description-white">
                Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque dexjfdi kedj.
              </p>
            </div>
          </div>

          {/* Yellow Card */}
          <div className="whyjlu-card yellow-card-why">
            <div className="card-top">
              <h2 className="card-title-white">Lorem ipsum</h2>
            </div>
            <div className="card-bottom">
              <p className="card-description-white">
                Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque dexjfdi kedj sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJLU;
