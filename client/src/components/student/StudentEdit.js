import React, { useEffect, useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import { useHistory } from "react-router-dom";
import { fetchProfile,editProfile } from "../../api functions/StudentFunctions";
import StudentSidebar from './StudentSidebar'
import "../../css/StudentDashboard.css";

function MyCourse() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [register, setRegister] = useState(false);
  const [student, setStudent] = useState({
    student_name: "",
    email: "",
    contact: ""
  });

    useEffect(() => {
      fetchProfile(localStorage.studenttoken)
      .then((res) => {
        setStudent({
          student_name: res.message.student_name,
          email: res.message.email,
          contact: res.message.contact
        });
      })
      .catch((e) => {
        console.log(e);
      });
    },[])

    function onChange(e) {
      setStudent({
        ...student,
        [e.target.name]: e.target.value,
      });
    }
    function onSubmit(e){
      e.preventDefault();
      const mystudent = {
          email: student.email,
          student_name: student.student_name,
          contact: student.contact
        };
       editProfile(student, localStorage.studenttoken).then((res) => {
          if (res.status == "1") {
            console.log(res);
           setStudent({
            student_name: "",
            email: "",
            contact: ""
          })
            setRegister(true);
            setTimeout(function () {
              history.push(`/studentdashboard`);
            }, 2000);
          } else if (res.status == "-1") {
            console.log(res);
            setError(res.message._message);
            setStudent({
              student_name: "",
              email: "",
              contact: ""
            })
          } else {
            console.log(res);
            setError(res.message);
            setStudent({
              student_name: "",
              email: "",
              contact: ""
            })
          }
        });
    }


    return (
        <div>
            <Header />
      <SubHeader />
        <StudentSidebar />
        <div id="content" className="content container-fluid course-handler">
        <div className="instructor-register col-lg-6 col-sm-12">
        <h3>Enter Details You want to change</h3>
          {register ? (
            <h3 className="success">Updated !!! redirecting .........</h3>
          ) : null}
          {error.length > 0 ? <h3 className="error">{error}</h3> : null}
          <form noValidate onSubmit={onSubmit} className="my-form">
            <div className="form-group">
              <label htmlFor="email">Student email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={student.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">student name</label>
              <input
                type="text"
                className="form-control"
                name="student_name"
                placeholder="Enter description"
                value={student.student_name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Contact Information</label>
              <textarea
                type="text"
                className="form-control"
                name="contact"
                placeholder="Enter details"
                value={student.contact}
                onChange={onChange}
              />
            </div>          
            <button type="submit" className="btn btn-lg btn-primary btn-block sbt-btn">
              Update student
            </button>
          </form>
        </div>
      
        </div>
        
      <Footer />
        </div>
    )
}

export default MyCourse
