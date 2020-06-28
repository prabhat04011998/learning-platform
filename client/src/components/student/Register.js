import React, { useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/SubHeader";
import { useHistory } from "react-router-dom";
import "../../css/LoginRegister.css";
import {studentregister} from '../../api functions/StudentFunctions'

function Register() {

    const history=useHistory();

    const [state,setState]=useState({
          student_name: '',
          email: '',
          password: '',
          contact :''
    })

    
    const HandleChange = (e) =>{
        setState({
            ...state,
           [e.target.name] : e.target.value
           })
      }


    const onSubmit = async e =>{
        e.preventDefault()
    
        const newUser = {
          student_name: state.student_name,
          email: state.email,
          password: state.password,
          contact:state.contact
        }
    
        studentregister(newUser).then(res => {
            history.push('/studentlogin')
        })

      }
    
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="form-container">
        <div className="login-form col-lg-6 col-sm-12">
          <form noValidate onSubmit={onSubmit} className="">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={state.email}
                onChange={HandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={HandleChange}
              />
            </div>
            <div className="form-group">
                <label htmlFor="name">Student name</label>
                <input
                  type="text"
                  className="form-control"
                  name="student_name"
                  placeholder="Enter your  name"
                  value={state.student_name}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">contact number</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact"
                  placeholder="contact"
                  value={state.contact}
                  onChange={HandleChange}
                />
              </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
