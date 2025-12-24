import './MenuButton.css';

function MenuButton() {
  return (
    <button className="menu-btn">
      <span className="menu-text">Menu</span>
      <span className="menu-separator"></span>
      <span className="menu-icon">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </span>
    </button>
  );
}

export default MenuButton;
