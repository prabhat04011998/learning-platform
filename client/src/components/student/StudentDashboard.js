import React, { useEffect, useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import StudentSidebar from "./StudentSidebar";
import "../../css/StudentDashboard.css";
import { fetchProfile } from "../../api functions/StudentFunctions";
import userimg from "../../images/userimg.png";

function StudentDashboard() {
  const [student, setStudent] = useState({
    student_name: "",
    email: "",
    contact: "",
    courses: [],
  });

  useEffect(() => {
    fetchProfile(localStorage.studenttoken)
      .then((res) => {
        setStudent({
          student_name: res.message.student_name,
          email: res.message.email,
          contact: res.message.contact,
          courses: res.message.courses,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Header />
      <SubHeader />
      <StudentSidebar />
      <div id="content" className="content container-fluid">
        <h1>Hello {student.student_name} , hope you are doing well</h1>

        <div className="student-card">
          <img src={userimg} alt="profile" className="user-pic" />
          <h2>My email-{student.email}</h2>
          <h2>contact me at- {student.contact}</h2>
        </div>

        <div className="course-name">
          <h1>My Courses</h1>
          {student.courses.map((c) => {
            return <h3 className="cname">{c.coursename}</h3>;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StudentDashboard;
