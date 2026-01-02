import './Hero.css';
import { useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ top: '7%', left: '100%' });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [activeNavItem, setActiveNavItem] = useState('#academics');

  const handleItem3Click = (e) => {
    if (isVisible) {
      // Close the overlay with reverse animation
      setIsClosing(true);
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 800);
    } else {
      // Open the overlay
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const wrapperRect = button.closest('.hero-wrapper').getBoundingClientRect();

      // Calculate center position relative to hero-wrapper container
      const centerX = rect.left + rect.width / 2 - wrapperRect.left;
      const centerY = rect.top + rect.height / 2 - wrapperRect.top;

      // Convert to percentage
      const leftPercent = (centerX / wrapperRect.width) * 100;
      const topPercent = (centerY / wrapperRect.height) * 100;

      // Set initial size to match button dimensions
      setInitialSize({ width: rect.width, height: rect.height });
      setCirclePosition({ top: `${topPercent}%`, left: `${leftPercent}%` });
      setIsVisible(true);
      setIsAnimating(false);
      // Force reflow to restart animation
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      <div className="hero-outer-wrapper">
        <div className="hero-center-circle" onClick={handleScrollClick}></div>
        <div className="hero-wrapper">
          <div className="hero-text-overlay">Lorem ipsum dolor sit amet</div>
          <div className="hero-flex-container">
          <div className="hero-flex-item search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <div className="hero-flex-item jlu-logo">
            <img src="/src/assets/images/JLU-Main-Logo_2-White.png (1) 1.png" alt="JLU Main Logo" />
          </div>
          <button className={`hero-flex-item item3-button ${isVisible ? 'active' : ''}`} onClick={handleItem3Click}>
            <span className="menu-text">Menu</span>
            <div className={`hamburger-icon ${isVisible ? 'active' : ''}`}>
              <div className="hamburger-lines">
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <div className="cross-icon">
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </button>
        </div>
        <div
          className={`hero-second-div ${!isVisible && !isClosing ? 'hidden' : ''} ${isAnimating ? 'animate-click' : ''} ${isClosing ? 'animate-close' : ''}`}
          style={{
            top: circlePosition.top,
            left: circlePosition.left,
            '--initial-width': `${initialSize.width}px`,
            '--initial-height': `${initialSize.height}px`
          }}
        >
          <div className="center-dot"></div>
          <div className='content'>
            <div className="nav-items-left">
              <h3>Navigation</h3>
              <nav>
                <a
                  href="#about"
                  className={activeNavItem === '#about' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#about'); }}
                >
                  About Us
                </a>
                <a
                  href="#academics"
                  className={activeNavItem === '#academics' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#academics'); }}
                >
                  Academics
                </a>
                <a
                  href="#campus"
                  className={activeNavItem === '#campus' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#campus'); }}
                >
                  Campus
                </a>
                <a
                  href="#admissions"
                  className={activeNavItem === '#admissions' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#admissions'); }}
                >
                  Admissions
                </a>
                <a
                  href="#research"
                  className={activeNavItem === '#research' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#research'); }}
                >
                  Research
                </a>
                <a
                  href="#campus-life"
                  className={activeNavItem === '#campus-life' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#campus-life'); }}
                >
                  Campus Life
                </a>
                <a
                  href="#international"
                  className={activeNavItem === '#international' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#international'); }}
                >
                  International Office
                </a>
                <a
                  href="#news"
                  className={activeNavItem === '#news' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveNavItem('#news'); }}
                >
                  News & Events
                </a>
              </nav>
            </div>
            <div className="nav-items-right">
              <nav>
                <a href="#management">Faculty of Management</a>
                <a href="#journalism">Faculty of Journalism & Social Science</a>
                <a href="#fashion">Faculty of Fashion, Design & Arts</a>
                <a href="#engineering">Faculty of Engineering & Technology</a>
                <a href="#pharmacy">Faculty of Pharmacy</a>
                <a href="#law">Faculty of Law</a>
                <a href="#iica">IICA - Jagran Centre for Creative Skills</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
