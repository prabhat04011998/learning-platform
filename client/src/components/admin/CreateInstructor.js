import React, { useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import AdminSidebar from "./AdminSidebar";
import SubHeader from "../../includes/Subheader2";
import '../../css/AdminDashboard.css'

function CreateInstructor() {

    const [state,setState] = useState({
        emai:"",
        password:"",
        instructor_name:"",
        instructor_description:"",
        contact:"",
        profile_image:"",
        socialmedia_profiles:{
            instagram:"",
            facebook:"",
            linkedin:"",
            twitter:""
        }
    })

function onSubmit(e){
    e.preventDefault()
    
    // const user = {
    //   username:state.username,
    //   password:state.password
    // }

    // adminlogin(user).then(res => {
    //   if (res.status == "1") {
    //     history.push(`/admindashboard`)
    //   }
    // })
}

function onChange(e){
    setState({
        ...state,
        [e.target.name]: e.target.value 
    })
}

function onProfileChange(e){
    // const update =[e.target.name]
    // setState({
    //     ...state,
    //     socialmedia_profiles.update : e.target.value 
    // })
}

  return (
    <div>
      <Header />
      <SubHeader />
      <AdminSidebar />
      <div  className="content container-fluid">
      <div className="instructor-register col-lg-6 col-sm-12">
            <form noValidate onSubmit={onSubmit} className="my-form">
              <div className="form-group">
                <label htmlFor="email">Intructor email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Intructor password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Intructor name</label>
                <input
                  type="text"
                  className="form-control"
                  name="instructor_name"
                  placeholder="Enter description"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Intructor description</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="instructor_description"
                  placeholder="Enter details"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Intructor contact</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact"
                  placeholder="Enter contact number"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">profile picture link</label>
                <input
                  type="text"
                  className="form-control"
                  name="profile_image"
                  placeholder="imgage url"
                  value=""
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">social media profiles</label>
                <input
                  type="text"
                  className="form-control"
                  name="instagram"
                  placeholder="instagram"
                  value=""
                  onChange={onProfileChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="facebook"
                  placeholder="facebook"
                  value=""
                  onChange={onProfileChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  placeholder="linkedin"
                  value=""
                  onChange={onProfileChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="twitter"
                  placeholder="twitter"
                  value=""
                  onChange={onProfileChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                register instructor 
              </button>
            </form>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateInstructor;
