import React, { useEffect, useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import "../../css/CourseDetails.css";

function CoursePage() {
    return (
        <div>
        {localStorage.studenttoken ? ( <div>
        <Header />
         <SubHeader />

        
      <Footer />
        </div>) : ((window.location.href = "/studentlogin"))}
      </div>
    )
}

export default CoursePage
