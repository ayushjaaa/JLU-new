import React from 'react';
import './NavigationSection.css';

const NavigationSection = ({ isOpen, onClose }) => {
  const navigationItems = [
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'academics', label: 'Academics', path: '/academics' },
    { id: 'campus', label: 'Campus', path: '/campus' },
    { id: 'admissions', label: 'Admissions', path: '/admissions' },
    { id: 'research', label: 'Research', path: '/research' },
    { id: 'campus-life', label: 'Campus Life', path: '/campus-life' },
    { id: 'international', label: 'International Office', path: '/international' },
    { id: 'news', label: 'News & Events', path: '/news' },
  ];

  const academicsSubNav = [
    { label: 'Faculty of Management', path: '/academics/management' },
    { label: 'Faculty of Journalism & Social Science', path: '/academics/journalism' },
    { label: 'Faculty of Fashion, Design & Arts', path: '/academics/fashion' },
    { label: 'Faculty of Engineering & Technology', path: '/academics/engineering' },
    { label: 'Faculty of Pharmacy', path: '/academics/pharmacy' },
    { label: 'Faculty of Law', path: '/academics/law' },
    { label: 'IICA - Jagran Centre for Creative Skills', path: '/academics/iica' },
  ];

  if (!isOpen) return null;

  return (
    <section
      id="navigation-menu"
      className="nav-section nav-section-open"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
    >
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="nav-left-column">
            <p className="nav-label">Navigation</p>
            <nav className="nav-list">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className={`nav-item ${item.id === 'academics' ? 'active' : ''}`}
                >
                  {item.id === 'academics' && <span className="nav-dot"></span>}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="nav-divider"></div>

          <div className="nav-right-column">
            <nav className="sub-nav-list">
              {academicsSubNav.map((item, index) => (
                <a key={index} href={item.path} className="sub-nav-item">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
