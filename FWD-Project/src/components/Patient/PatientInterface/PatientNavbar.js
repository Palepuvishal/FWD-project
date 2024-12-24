import React from "react";
import "./PatientNavbar.css";
import { Link } from "react-router-dom";

const PatientNavbar = () => {
  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">

        <a href="/UserDetails">
        <li className="nav-item active">Dashboard</li>
        </a>
        <Link to="/Myappointments">
        <li className="nav-item active ">Myappointments</li>
        </Link>
        <li className="nav-item active">services Provided</li>
        <li className="nav-item acitve">Our achievements</li>
        
      </ul>
      <div className="navbar-actions">
        <div className="search-bar">
          <i className="search-icon fas fa-search"></i>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <i className="icon fas fa-bell"></i>
        <Link to="/api/v1/Patient/login/profile">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User Avatar"
          className="avatar"
          
        />
        </Link>
      </div>
    </nav>
  );
};

export default PatientNavbar;
