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
        <div className="grid-item item-1">
          <div className="card-top">
            <h4 className="card-number">100+</h4>
            <h5 className="card-subtitle">Lorem ipsum dolor .</h5>
          </div>
          <div className="card-bottom">
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.</p>
          </div>
        </div>
        <div className="grid-item item-2">
          <div className="card-top">
            <h3 className="card-heading">Lorem ipsum</h3>
          </div>
          <div className="card-bottom">
            <p className="card-paragraph">Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque</p>
            <p className="card-paragraph card-paragraph-underline">Lorem ipsum</p>
            <p className="card-paragraph card-paragraph-underline">Lorem ipsum</p>
          </div>
        </div>
        <div className="grid-item item-3">
          <div className="card-top">
            <div className="card-top-flex">
              <h4 className="card-number">50+</h4>
              <h5 className="card-subtitle">Consectetur</h5>
            </div>
            <p className="card-subtitle-extra">ipsum dolor</p>
          </div>
          <div className="card-bottom">
            <p className="card-description">Ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="grid-item item-4">
          <div className="card-top">
            <h3 className="card-heading">Lorem ipsum</h3>
          </div>
          <div className="card-bottom">
            <p className="card-paragraph">Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque</p>
            <p className="card-paragraph card-paragraph-underline">Lorem ipsum</p>
            <p className="card-paragraph card-paragraph-underline">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJLU;
