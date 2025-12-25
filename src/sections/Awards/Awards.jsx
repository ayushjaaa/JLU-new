import './Awards.css';
import Award1 from '../../assets/images/Rectangle 32.png';
import Award2 from '../../assets/images/Rectangle 33.png';
import Award3 from '../../assets/images/Rectangle 34.png';
import Award4 from '../../assets/images/Rectangle 35.png';
import Award5 from '../../assets/images/Rectangle 36.png';

function Awards() {
  return (
    <>
      <div className="awards-top-div">
        <div className="awards-text-wrapper">
          <h2>AWARDS AND ACHIEVEMETNS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque <span className="highlight">mauris facilisi amet</span>.
          </p>
        </div>
      </div>

      <div className="awards-bottom-div">
        <div className="awards-grid-wrapper">
          <div className="award-card">
            <img src={Award1} alt="QS Diamond Rating badge" />
            <div className="award-caption">
              <p className="award-title">QS Diamond Rating badge</p>
              <p className="award-year">2025</p>
            </div>
          </div>

          <div className="award-card">
            <img src={Award2} alt="QS Diamond Rating badge" />
            <div className="award-caption">
              <p className="award-title">QS Diamond Rating badge</p>
              <p className="award-year">2025</p>
            </div>
          </div>

          <div className="award-card">
            <img src={Award3} alt="QS Diamond Rating badge" />
            <div className="award-caption">
              <p className="award-title">QS Diamond Rating badge</p>
              <p className="award-year">2025</p>
            </div>
          </div>

          <div className="award-card">
            <img src={Award4} alt="QS Diamond Rating badge" />
            <div className="award-caption">
              <p className="award-title">QS Diamond Rating badge</p>
              <p className="award-year">2025</p>
            </div>
          </div>

          <div className="award-card">
            <img src={Award5} alt="QS Diamond Rating badge" />
            <div className="award-caption">
              <p className="award-title">QS Diamond Rating badge</p>
              <p className="award-year">2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
