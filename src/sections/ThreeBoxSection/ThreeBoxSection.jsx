import './ThreeBoxSection.css';
import frame68 from '../../assets/images/Frame 68.png';
import frame67 from '../../assets/images/Frame 67.png';
import frame66 from '../../assets/images/Frame 66.png';

function ThreeBoxSection() {
  return (
    <div className="three-box-wrapper">
      <div className="three-box-container">
        <div className="box box-tall box-1">
          <img src={frame68} alt="Box 1" className="box-image" />
        </div>

        <div className="box box-short box-2">
          <img src={frame66} alt="Box 2" className="box-image" />
        </div>

        <div className="box box-tall box-3">
          <img src={frame67} alt="Box 3" className="box-image" />
        </div>
      </div>
    </div>
  );
}

export default ThreeBoxSection;
