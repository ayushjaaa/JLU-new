import './IntroSection.css';
import Frame1 from '../../assets/images/Frame1.png';
import Frame2 from '../../assets/images/Frame2.png';
import Frame3 from '../../assets/images/Frame3.png';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h2>Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque mauris facilisi amet. Eu ut sem a id nec nunc ante nunc.</h2>
        </div>

        <div className="intro-description-wrapper">
          <p className="intro-description">
            Lorem ipsum dolor sit amet consectetur. Feugiat mi enim lectus convallis scelerisque mauris facilisi amet. Eu ut sem a id nec nunc ante nunc.
          </p>
        </div>

        <div className="intro-images">
          <div className="image-card">
            <img src={Frame1} alt="Student with folders" />
          </div>
          <div className="image-card image-card-small">
            <img src={Frame2} alt="Study group" />
          </div>
          <div className="image-card">
            <img src={Frame3} alt="Student with laptop" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
