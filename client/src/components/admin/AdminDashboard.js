import React, { useState, useEffect } from "react";
import "../../css/AdminDashboard.css";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import AdminSidebar from "./AdminSidebar";
import SubHeader from "../../includes/Subheader2";
import {allCourse,allStudent,allInstrcutor} from '../../api functions/AdminFunctions'

function AdminDashboard() {

  const [courses,setCourses] = useState([])
  const [students,setStudents] = useState([])
  const [instructors,setInstructors] = useState([])

  useEffect(() => {
   // console.log(localStorage.admintoken);
   allCourse(localStorage.admintoken).then((res) => {
     setCourses(res)
   })
   allInstrcutor(localStorage.admintoken).then((res) => {
    setInstructors(res)
  })
  allStudent(localStorage.admintoken).then((res) => {
    setStudents(res)
  })
  },[])

  return (
    <div>
      <Header />
      <SubHeader />
      <AdminSidebar />
      <div id="content" className="content container-fluid"></div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
