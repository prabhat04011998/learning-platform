import React, { useState, useEffect }  from "react";
import "../../css/InstructorDashboard.css";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import studentsimg from '../../images/student.png'
import courseimg from '../../images/seo-course-image.webp'
import userimg from '../../images/userimg.png'
import InstructorSidebar from "./InstructorSidebar";

function InstructorDashboard() {

  return (
    <div>
    {localStorage.instructortoken ? (<div>
      <Header />
      <SubHeader />
        <InstructorSidebar />
        <div id="content" className="content container-fluid">
        <h1>Current Stats</h1>
        <div className="stat-box">
          <div className="stat">
            <img src={courseimg} className="stat-img" />
            <h3>Courses Active - 5</h3>
          </div>
          <div className="stat">
            <img src={studentsimg} className="stat-img" />
            <h3>Students Active -5 </h3>
          </div>
        </div>
        <h1>Student Activities</h1>
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
    </div>) : (window.location.href='/instructorlogin')}
    </div>
    
  );
}

export default InstructorDashboard;
