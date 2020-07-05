import React, { useState, useEffect } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import InstructorSidebar from "./InstructorSidebar";

function MakeCourse() {

    const [access, setAccess] = useState(false);

    useEffect(() => {
        if (localStorage.instructortoken) {
          setAccess(true);
        }
      }, []);
      
    return (
        <div>
      {access ? (
        <div>
          <Header />
          <SubHeader />
          <InstructorSidebar />
          <div id="courses" className="courses container-fluid">
            
          </div>
          <Footer />
        </div>
      ) : (
        <div className="accessdenied">
          <h2>Acess denied</h2>
        </div>
      )}
    </div>
    )
}

export default MakeCourse
