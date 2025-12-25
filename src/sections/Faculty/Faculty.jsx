import React from 'react';
import './Faculty.css';
import abhishekSir from '../../assets/images/abhishek-sir.jpg 1.png';
import pankajDas from '../../assets/images/mr.-pankaj-das-rs.jpg 1.png';
import vivekKhare from '../../assets/images/de-vivek-khare.jpg 1.png';
import archanaJain from '../../assets/images/Archana-Jain.jpg 2.png';
import diwakarShukla from '../../assets/images/Diwakar-Shukla.jpg 1.png';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Shri. Abhishek Mohan Gupta',
      designation: 'Pro - Chancellor',
      image: abhishekSir
    },
    {
      id: 2,
      name: 'Mr. Pankaj Das',
      designation: 'Registrar',
      image: pankajDas
    },
    {
      id: 3,
      name: 'Dr. Vivek Khare',
      designation: 'Vice Chancellor',
      image: vivekKhare
    },
    {
      id: 4,
      name: 'Ms. Archana Jain',
      designation: 'Pro - Chancellor',
      image: archanaJain
    },
    {
      id: 5,
      name: 'Mr. Diwakar Shukla',
      designation: 'Registrar',
      image: diwakarShukla
    },
    {
      id: 6,
      name: 'Shri. Abhishek Mohan Gupta',
      designation: 'Pro - Chancellor',
      image: abhishekSir
    }
  ];

  const firstRow = facultyMembers.slice(0, 3);
  const secondRow = facultyMembers.slice(3, 6);

  return (
    <section className="faculty-section">
      <div className="faculty-header">
        <h1 className="faculty-title">OUR FACULTY</h1>
        <h1 className="faculty-year">2025</h1>
      </div>

      <div className="faculty-content">
        {/* First Row Wrapper */}
        <div className="faculty-row faculty-row-first">
          {firstRow.map((member) => (
            <div key={member.id} className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-image"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">{member.name}</h3>
                <p className="faculty-designation">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row Wrapper */}
        <div className="faculty-row faculty-row-second">
          {secondRow.map((member) => (
            <div key={member.id} className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-image"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">{member.name}</h3>
                <p className="faculty-designation">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
