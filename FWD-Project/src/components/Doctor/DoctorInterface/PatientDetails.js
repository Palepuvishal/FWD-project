import React from "react";
import PatientDetailsCard from "./PatientDeatailsCard";
import DoctorNavbar from "./DoctorNavbar";
const patientData = {
    sex: "Male",
    age: 45,
    diabetesDuration: 10,
    diabeticRetinopathy: "No",
    diabeticNephropathy: "Yes",
    smoking: "No",
    drinking: "Occasionally",
    height: 170,
    weight: 70,
    bmi: 24.22,
    sbp: 120,
    dbp: 80,
    hba1c: 6.5,
    fbg: 95,
    tg: 150,
    cPeptide: 3.0,
    tc: 200,
    hdLc: 50,
    ldLc: 130,
    insulin: 20,
    metformin: "Yes",
    lipidLoweringDrugs: "Yes",
  };


const PatientDetails = () => {
  return (
    <div>
    <DoctorNavbar/>
    <PatientDetailsCard patientData={patientData}/>
    </div>
  );
};

export default PatientDetails;