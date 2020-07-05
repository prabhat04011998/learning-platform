import React, { useState, useEffect } from "react";
import "../../css/AdminDashboard.css";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import AdminSidebar from "./AdminSidebar";
import SubHeader from "../../includes/Subheader2";
import {allCourse,allStudent,allInstrcutor} from '../../api functions/AdminFunctions'
import teacherimg from '../../images/teacher.png'
import studentsimg from '../../images/student.png'
import courseimg from '../../images/seo-course-image.webp'
import userimg from '../../images/userimg.png'

function AdminDashboard() {
  const [courses,setCourses] = useState([])
  const [students,setStudents] = useState([])
  const [instructors,setInstructors] = useState([])

  useEffect(() => {   
   if(localStorage.admintoken){

    allCourse(localStorage.admintoken).then((res) => {
      setCourses(res)
    })
    allInstrcutor(localStorage.admintoken).then((res) => {
     setInstructors(res)
   })
   allStudent(localStorage.admintoken).then((res) => {
     setStudents(res)
   })
   }
  },[])

  return (
    <div>
      {localStorage.admintoken ? (<div>
      <Header />
      <SubHeader />
      <AdminSidebar />
      <div id="content" className="content container-fluid">
        <h1>Current Stats</h1>
        <div className="stat-box">
          <div className="stat">
            <img src={courseimg} className="stat-img" />
            <h3>Courses Active - {courses.length}</h3>
          </div>
          <div className="stat">
            <img src={studentsimg} className="stat-img" />
            <h3>Students Active -{students.length} </h3>
          </div>
          <div className="stat">
            <img src={teacherimg} className="stat-img" />
            <h3>instructors Active - {instructors.length}</h3>
          </div>
        </div>
        <h1>Recent Updates </h1>
        <div className="update-box">
          <div className="update">
            <img src={userimg} className="update-img" />
            <h3>Commented "lorem ipsum"</h3>
          </div>
          <div className="update">
            <img src={userimg} className="update-img" />
            <h3>purchased "course A"</h3>
          </div>
          <div className="update">
            <img src={userimg} className="update-img" />
            <h3>Commented "lorem ipsum"</h3>
          </div>
          <div className="update">
            <img src={userimg} className="update-img" />
            <h3>purchased "course A"</h3>
          </div>     
        </div>
      </div>
      <Footer />
      </div>) : (window.location.href='/adminlogin')}
    </div>
  );
}

export default AdminDashboard;
