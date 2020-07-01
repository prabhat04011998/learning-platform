import React, { useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import { useHistory } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import SubHeader from "../../includes/Subheader2";
import "../../css/AdminDashboard.css";
import { instructorregister } from "../../api functions/AdminFunctions";

function CreateInstructor() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [register, setRegister] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    instructor_name: "",
    instructor_description: "",
    contact: "",
    profile_image: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  });

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email: state.email,
      password: state.password,
      instructor_name: state.instructor_name,
      instructor_description: state.instructor_description,
      contact: state.contact,
      profile_image: state.profile_image,
      socialmedia_profiles: {
        instagram: state.instagram,
        facebook: state.facebook,
        linkedin: state.linkedin,
        twitter: state.twitter,
      },
    };

    instructorregister(user, localStorage.admintoken).then((res) => {
      if (res.status == "1") {
        console.log(res);
        setState({
          email: "",
          password: "",
          instructor_name: "",
          instructor_description: "",
          contact: "",
          profile_image: "",
          instagram: "",
          facebook: "",
          linkedin: "",
          twitter: "",
        });
        setRegister(true);
        setTimeout(function () {
          history.push(`/admindashboard`);
        }, 2000);
      } else if (res.status == "-1") {
        console.log(res);
        setError(res.message._message);
        setState({
          email: "",
          password: "",
          instructor_name: "",
          instructor_description: "",
          contact: "",
          profile_image: "",
          instagram: "",
          facebook: "",
          linkedin: "",
          twitter: "",
        });
      } else {
        console.log(res);
        setError(res.message);
        setState({
          email: "",
          password: "",
          instructor_name: "",
          instructor_description: "",
          contact: "",
          profile_image: "",
          instagram: "",
          facebook: "",
          linkedin: "",
          twitter: "",
        });
      }
    });
  }

  function onChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Header />
      <SubHeader />
      <AdminSidebar />
      <div className="content container-fluid">
        <div className="instructor-register col-lg-6 col-sm-12">
          {register ? (
            <h3 className="success">Registered !!! redirecting .........</h3>
          ) : null}
          {error.length > 0 ? <h3 className="error">{error}</h3> : null}
          <form noValidate onSubmit={onSubmit} className="my-form">
            <div className="form-group">
              <label htmlFor="email">Intructor email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={state.email}
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
                value={state.password}
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
                value={state.instructor_name}
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
                value={state.instructor_description}
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
                value={state.contact}
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
                value={state.profile_image}
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
                value={state.instagram}
                onChange={onChange}
              />
              <input
                type="text"
                className="form-control"
                name="facebook"
                placeholder="facebook"
                value={state.facebook}
                onChange={onChange}
              />
              <input
                type="text"
                className="form-control"
                name="linkedin"
                placeholder="linkedin"
                value={state.linkedin}
                onChange={onChange}
              />
              <input
                type="text"
                className="form-control"
                name="twitter"
                placeholder="twitter"
                value={state.twitter}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
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
