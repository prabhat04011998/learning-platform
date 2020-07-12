import React, { useState } from 'react'
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import { useHistory, useParams } from 'react-router-dom'
import SubHeader from "../../includes/Subheader2";
import StudentSidebar from './StudentSidebar'
import "../../css/InstructorDashboard.css";
import {buyCourse} from '../../api functions/StudentFunctions'

function RequestCourse() {
  const history = useHistory();
  const [error,setError]=useState("")
  const [requestmade , setRequestmade]=useState(false)
  const [courseid,setCourseid] = useState("")
  const [document,setDocument]=useState(null)

  const handleChange = (e) =>{
    setCourseid(e.target.value)
  }
  const handleFileChange = (e) =>{
    setDocument(e.target.files[0])
  }

  const onSubmit= (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('file' , document)
    data.append('courseid',courseid)
    buyCourse(localStorage.studenttoken,data).then((res) => {
      console.log(res);
    if (res.status == "1") {

      setCourseid("")
      setRequestmade(true)
      setTimeout(function () {
        history.push(`/studentdashboard`);
      }, 2000);
      
    } else if (res.status == "-1") {
      setError(res.message._message);
      setCourseid("")
    } else {
      setError(res.message);
      setCourseid("")
    }
  });
  }

    return (
      <div>
        {localStorage.studenttoken ? (<div>
            <Header />
      <SubHeader />
        <StudentSidebar />
        <div id="content" className="requestContainer container-fluid">
        {requestmade ? (
            <h3 className="success">request sent Success !!! redirecting .........</h3>
          ) : null}
        {error ? <h3 className="error">{error}</h3> : null}
        <div className="register-instructions">
                <h2>Want to Register to the Course , Complete the Following steps</h2>
                <div className='ins-list'>
                <ol>
                    <li>Make the payment of the given course price via Paytm</li>
                    <li>Phone number of instructor is given in details of course </li>
                    <li>Take a screenshot of the payment </li>
                    <li>Submit the screenshot there with course id given in details</li>
                    <li>Instructor will give you acess in max 2 working days </li>
                </ol>
                </div>
            </div>
        <form noValidate onSubmit={onSubmit} >
            <div className="form-group">
              <h2>Module name</h2>
              <input
                type="text"
                className="form-control name-module"
                name="courseid"
                placeholder="Enter Id for course"
                value={courseid}
                onChange={handleChange}
              />
            </div>
            <div className="form-group ">
              <h2>Attach File</h2>
              <input
                type="file"
                name="file"
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-danger request-btn">Request Acess</button>
            </form>
        </div>
        
      <Footer />
        </div>) : ((window.location.href = "/studentlogin"))}
      </div>
        
    )
}

export default RequestCourse
