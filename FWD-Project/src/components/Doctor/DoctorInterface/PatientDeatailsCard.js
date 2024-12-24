import React from "react";
import './patientDetailsCard.css';


const PatientDetailsCard = ({ patientData }) => {
    return (
      <div className="patient-details-card">
        <h2>Patient Details</h2>
        {Object.entries(patientData).map(([key, value]) => (
          <div key={key} className="patient-details-item">
            <h3>{key.replace(/([A-Z])/g, " $1")}</h3>
            <p>{value}</p>
          </div>
        ))}
        <div className="remarks-section">
          <label htmlFor="remark" className="remarks-label">
            Remark
          </label>
          <textarea
            id="remark"
            name="remark"
            rows="4"
            className="remarks-textarea"
            placeholder="Enter your remarks here..."
          ></textarea>
        </div>
        <button type="button" className="submit-button">
          Submit Remark
        </button>
      </div>
    );
};

export default PatientDetailsCard;
