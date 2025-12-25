import { useState } from 'react';
import './MenuButton.css';
import NavigationSection from '../sections/NavigationSection';

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
