import React from 'react'
import "./Doctorprofile.css"
import DoctorNavbar from './DoctorNavbar'

const DoctorProfile = () => {
  return (
    <div>
        <div>
          <DoctorNavbar/>
        </div>
    <div className="container1 rounded bg-white mt-5 mb-5">
        <form className='new' onSubmit={""}>
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="profilePicture rounded-circle mt-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Doctor"/>
                <span className="font-weight-bold">kalandaar</span>
                <span className="text-black-50">kalandar@gmail.com</span>
                <span>diabetic Specialist</span>
            </div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Details</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <label className="labels">Full Name</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-6">
                        <label className="labels">Specialization</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="labels">Qualifications</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Institution Studied</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Years of Experience</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Contact Number</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Email ID</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Clinic Address</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <button className="btn btn-primary profile-button" type="button">Update Profile</button>
                </div>
            </div>
        </div>
    </div>
    </form>
</div>

    </div>
  )
}

export default DoctorProfile;
