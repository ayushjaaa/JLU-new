import './Footer.css';
import jluLogo from '../../assets/images/JLU-Main-Logo_2-White.png (1) 1.png';

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-top">
        {/* First Div - Brand Block */}
        <div className="footer-top-left">
          <div className="brand-block">
            <div className="footer-logo">
              <img src={jluLogo} alt="Jagran Lakecity University" />
            </div>
            <div className="brand-addresses">
              <p>Jagran Lakecity University, Mugaliyachap,<br />Near Ratibad Bhopal – 462044</p>
              <p>Jagran Lakecity University Student<br />Enrichment Hub, Near Kaliasoth Barrage,<br />Chandanpura, Bhopal – 462007</p>
            </div>
          </div>
        </div>

        {/* Second Div - All other blocks in flex */}
        <div className="footer-top-right">
          {/* Address and Contact Block Combined */}
          <div className="footer-block">
            <h3 className="footer-heading">Address</h3>
            <div className="footer-content">
              <p>Jagran Lakecity<br />University,<br />Mugaliyachap,<br />Near Ratibad<br />Bhopal – 462044</p>
            </div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-content">
              <p>+44(0)1273 704 200</p>
              <a href="#contact">Contact Us</a>
            </div>
          </div>

          {/* Our Community Block */}
          <div className="footer-block">
            <h3 className="footer-heading">Our Community</h3>
            <ul className="footer-list">
              <li><a href="#alumni">Alumini</a></li>
              <li><a href="#work">Work with Us</a></li>
              <li><a href="#partner">Partner with Us</a></li>
              <li><a href="#family">Family of Schools</a></li>
              <li><a href="#venue">Venue Hire</a></li>
              <li><a href="#hub">Community Hub</a></li>
            </ul>
          </div>

          {/* Links Block */}
          <div className="footer-block">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-list">
              <li><a href="#term-dates">Term Dates</a></li>
              <li><a href="#policies">Policies</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#safeguard">Safegaurd Ng Inspections</a></li>
              <li><a href="#governors">Governors</a></li>
            </ul>
          </div>

          {/* Social Block */}
          <div className="footer-block">
            <h3 className="footer-heading">Social</h3>
            <ul className="footer-list">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter/X</a></li>
            </ul>
          </div>

          {/* Scroll to top */}
          <div className="scroll-top">
            <a href="#top">Scroll to the top</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2025 | Jagran Lakecity University Bhopal | All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Footer;
