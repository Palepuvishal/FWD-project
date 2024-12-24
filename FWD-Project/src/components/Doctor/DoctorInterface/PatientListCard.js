import React from 'react';
import { Link } from 'react-router-dom';
import './PatientList.css';

const PatientListCard = ({ name, phone }) => {
  return (
    <div className="patient-list-container">
     
      <div className="patient-cards">
        <div className="patient-card">
          <h3>{name}</h3>
          <p><strong>Phone:</strong> {phone}</p>
          <Link to="/PatientDetails">
          <button className="view-button">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientListCard;
