import './Hero.css';
import MenuButton from '../../components/MenuButton';

function Hero() {
  return (
    <section className="hero-section">
      {/* Navigation - minimal top bar */}
      <div className="hero-nav">
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="logo">NORTHLAND</div>

        <MenuButton />
      </div>

      {/* Center content - main hero heading */}
      <div className="hero-content">
        <div className="hero-heading">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="hero-scroll">
        <div className="scroll-indicator-outer"></div>
        <div className="scroll-indicator">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
