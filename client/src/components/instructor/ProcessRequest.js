import React, { useState, useEffect } from "react";
import Header2 from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/SubHeader";
import InstructorSidebar from "./InstructorSidebar"
import { useHistory, useParams } from "react-router-dom";
import { processRequest } from "../../api functions/InstructorFunctions";
import "../../css/InstructorCourses.css";


function ProcessRequest() {
    const history = useHistory();
    const [state,setState]=useState({
        course_name:"",
        course_id:"",
        payment_id:"",
        amount:"",
        student_email:""
    })
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    function handleChange(e){
        setState({
            ...state,
           [e.target.name] : e.target.value
           })
    }

    function onSubmit(e){
        e.preventDefault()
        processRequest(localStorage.instructortoken,state).then((res) => {
          console.log(res);
          if (res.status == "1") {
            console.log(res);
            setState({
                course_name:"",
                course_id:"",
                payment_id:"",
                amount:"",
                student_email:""
            })
            setSuccess(true)
            setTimeout(function () {
              history.push(`/instructordashboard`);
            }, 2000);
          } else if (res.status == "-1") {
            setError(res.message._message);
            setState({
                course_name:"",
                course_id:"",
                payment_id:"",
                amount:"",
                student_email:""
            })
          } else {
            setError(res.message);
            setState({
                course_name:"",
                course_id:"",
                payment_id:"",
                amount:"",
                student_email:""
            })
          }
        })
    }

    return (
        <div>
{localStorage.instructortoken ? (<div>
      <Header2 />
      <SubHeader />
        <InstructorSidebar />
        <div id="courses" className="courses container-fluid">
        <div className="login-form col-lg-6 col-sm-12">
        {success ? (
            <h3 className="success">request processed!!! redirecting .........</h3>
          ) : null}
          {error.length > 0 ? <h3 className="error">{error}</h3> : null}
          <h1>give details about the request</h1>
          <form noValidate onSubmit={onSubmit} className="">
            <div className="form-group">
              <label htmlFor="course_name">Course Name</label>
              <input
                type="text"
                className="form-control"
                name="course_name"
                placeholder="Enter course name"
                value={state.course_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course_name">Course ID</label>
              <input
                type="text"
                className="form-control"
                name="course_id"
                placeholder="Enter course id"
                value={state.course_id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course_name">payment Id</label>
              <input
                type="text"
                className="form-control"
                name="payment_id"
                placeholder="Enter payment id "
                value={state.payment_id}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Amount</label>
              <input
                type="text"
                className="form-control"
                name="amount"
                placeholder="Enter amount paid"
                value={state.amount}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course_name">Student Email</label>
              <input
                type="text"
                className="form-control"
                name="student_email"
                placeholder="Enter student email"
                value={state.student_email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block sbt-btn">
              Submit
            </button>
          </form>
        </div>
          </div>
      <Footer />
    </div>) : ( window.location.href='/instructorlogin')}
    </div>
    
    )
}

export default ProcessRequest
