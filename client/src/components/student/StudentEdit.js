import React, { useEffect, useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import StudentSidebar from './StudentSidebar'
import "../../css/StudentDashboard.css";

function MyCourse() {
  

    return (
        <div>
            <Header />
      <SubHeader />
        <StudentSidebar />
        <div id="content" className="content container-fluid course-handler">

      
        </div>
        
      <Footer />
        </div>
    )
}

export default MyCourse
