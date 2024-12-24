import React from "react";

import "./PatientInterface.css"
import PatientNavbar from "./PatientNavbar";
import DoctorCards from "./DoctorsCards";
import PatientINavbar from "./PatientINavbar";

const PatientFirst = () => {
  return (
    

    <div>
  <PatientNavbar/>
  <div  className="container"> 

  <div className="cards"><DoctorCards  imgSrc={"doctor.jpg"} doctorName={"Vishal"} description={"Specialist in diabetes care, management, and treatment."}  buttonText={"Book Appointment"} buttonLink={"/Userdetails/Patientforms"}/></div>
  <div className="cards"><DoctorCards  imgSrc={"doctor.jpg"} doctorName={"yogesh"} description={"Expert in diabetes diagnosis, treatment, and care."}  buttonText={"Book Appointment"} buttonLink={"/Userdetails/Patientforms"}/></div>
  <div className="cards"><DoctorCards  imgSrc={"aditya.jpg"} doctorName={"sai aditya "} description={"Providing comprehensive care for diabetes management and treatment."}  buttonText={"Book Appointment"} buttonLink={"/Userdetails/Patientforms"}/></div>
  <div className="cards"><DoctorCards  imgSrc={"doctor.jpg"} doctorName={"abdul"} description={"Dedicated to expert care and personalized diabetes management."}  buttonText={"Book Appointment"} buttonLink={"/Userdetails/Patientforms"}/></div>
  </div>
  <PatientINavbar/>
  </div>

  

  )
}
export default PatientFirst;
