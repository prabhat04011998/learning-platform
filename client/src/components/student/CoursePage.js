import React from 'react'
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import StudentSidebar from './StudentSidebar'
import "../../css/InstructorDashboard.css";

function CoursePage() {
    return (
        <div>
            <Header />
      <SubHeader />
        <StudentSidebar />
        <div id="content" className="content container-fluid">



        </div>
        
      <Footer />
        </div>
    )
}

export default CoursePage
