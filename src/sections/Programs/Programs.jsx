import React from 'react';
import './Programs.css';
import Frame41 from '../../assets/images/Frame41.png';
import Frame42 from '../../assets/images/Frame42.png';
import Frame43 from '../../assets/images/Frame43.png';
import Frame44 from '../../assets/images/Frame44.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';

const Programs = () => {
  return (
    <section className="programs-section">
      {/* ===================================
          SECTION HEADING
          =================================== */}
      <div className="programs-heading-block">
        <h2 className="programs-main-heading">OUR PROGRAMS</h2>
        <div className="programs-heading-underline"></div>
      </div>

      {/* ===================================
          PROGRAM CARDS GRID
          =================================== */}
      <div className="programs-cards-grid">
        <div className="program-card">
          <img
            src={Frame41}
            alt="Undergraduate Programmes"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Undergraduate<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src={Frame42}
            alt="Postgraduate Programmes"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Postgraduate<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src={Frame43}
            alt="Ph.D. Programmes"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Ph.D.<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src={Frame44}
            alt="Diplomas & Certification"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Diplomas &<br />Certification</h3>
          </div>
        </div>
      </div>

      {/* ===================================
          CTA BUTTON
          =================================== */}
      <div className="programs-cta-block">
        <button className="programs-cta-button">
          View All Courses
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ===================================
          TEXT CONTENT BLOCK - TWO COLUMNS
          =================================== */}
      <div className="programs-text-content">
        <div className="programs-text-left">
          <h3 className="programs-subheading">Lorem ipsum dolor sit amet consectetur.<br />Feugiat mi enim lectus convallis scelerisque.</h3>
        </div>
        <div className="programs-text-right">
          <p className="programs-description">
            Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque pharetra facilisis amet. Eu ut sem a id nec nunc ante nulla nunc.
          </p>
          <p className="programs-description">
            Lorem ipsum dolor sit amet consectetur. Morbi leo dictum ut cursus posuere integer sed massa. Adipiscing scelerisque sed massa sed nisl. Neque donec molestie faucibus integer est tincidunt nunc.
          </p>
        </div>
      </div>

      {/* ===================================
          PARTNER LOGOS GRID
          =================================== */}
      <div className="programs-partners-container">
        <div className="programs-partner-large-cell">
          <p className="programs-partner-large-cell-label">Lorem ipsum</p>
          <div className="programs-partner-large-cell-content">
            <div className="partner-large-logo-wrapper partner-large-logo-wrapper-1">
              <img
                src={logo1}
                alt="Partner Logo 1"
                className="partner-large-logo"
              />
            </div>
          </div>
        </div>
        <div className="programs-partner-large-cell">
          <p className="programs-partner-large-cell-label">Lorem ipsum</p>
          <div className="programs-partner-large-cell-content">
            <div className="partner-large-logo-wrapper partner-large-logo-wrapper-2">
              <img
                src={logo2}
                alt="Partner Logo 2"
                className="partner-large-logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="programs-partners-grid-wrapper">
        <p className="programs-partner-grid-label">Lorem ipsum</p>
        <div className="programs-partners-grid">
          <div className="partner-logo-cell">
            <div className="partner-logo-wrapper partner-logo-wrapper-3">
              <img
                src={logo3}
                alt="Partner Logo 3"
                className="partner-logo"
              />
            </div>
          </div>
          <div className="partner-logo-cell">
            <div className="partner-logo-wrapper partner-logo-wrapper-4">
              <img
                src={logo4}
                alt="Partner Logo 4"
                className="partner-logo"
              />
            </div>
          </div>
          <div className="partner-logo-cell">
            <div className="partner-logo-wrapper partner-logo-wrapper-5">
              <img
                src={logo5}
                alt="Partner Logo 5"
                className="partner-logo"
              />
            </div>
          </div>
          <div className="partner-logo-cell">
            <div className="partner-logo-wrapper partner-logo-wrapper-6">
              <img
                src={logo6}
                alt="Partner Logo 6"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
