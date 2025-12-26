import { useState, useEffect } from 'react';
import './MenuButton.css';
import NavigationSection from '../sections/NavigationSection';

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <button className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="menu-text">Menu</span>
        <span className="menu-separator"></span>
        <span className="menu-icon">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </span>
      </button>

      <NavigationSection isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default MenuButton;
