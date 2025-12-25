import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <section className="programs-section">
      {/* ===================================
          SECTION HEADING
          =================================== */}
      <div className="programs-heading-block">
        <h2 className="programs-main-heading">OUR PROGRAMMES</h2>
        <div className="programs-heading-underline"></div>
      </div>

      {/* ===================================
          PROGRAM CARDS GRID
          =================================== */}
      <div className="programs-cards-grid">
        <div className="program-card">
          <img
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80"
            alt="University archway"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Undergraduate<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
            alt="Student in library"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Postgraduate<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
            alt="Graduation certificate"
            className="program-card-image"
          />
          <div className="program-card-overlay">
            <h3 className="program-card-title">Ph.D.<br />Programmes</h3>
          </div>
        </div>

        <div className="program-card">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80"
            alt="University building"
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
      <div className="programs-partners-grid">
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Middlesex_University_Logo.svg/1200px-Middlesex_University_Logo.svg.png"
            alt="Middlesex University"
            className="partner-logo"
          />
        </div>
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/King%27s_College_London_logo.svg/1200px-King%27s_College_London_logo.svg.png"
            alt="King's College London"
            className="partner-logo"
          />
        </div>
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png"
            alt="National University of Singapore"
            className="partner-logo"
          />
        </div>
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CII_Logo.svg/1200px-CII_Logo.svg.png"
            alt="Confederation of Indian Industry"
            className="partner-logo"
          />
        </div>
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/FICCI_Logo.svg/1200px-FICCI_Logo.svg.png"
            alt="FICCI"
            className="partner-logo"
          />
        </div>
        <div className="partner-logo-cell">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Grant_Thornton_logo.svg/1200px-Grant_Thornton_logo.svg.png"
            alt="Grant Thornton"
            className="partner-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
