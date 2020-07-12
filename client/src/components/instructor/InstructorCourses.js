import React, { useState, useEffect } from "react";
import Header from "../../includes/Header2";
import { useHistory } from 'react-router-dom'
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import InstructorSidebar from "./InstructorSidebar";
import "../../css/InstructorCourses.css";
import CourseCard from "./CourseCard";
import courseimg from "../../images/seo-course-image.webp";
import { getAllCourse } from "../../api functions/InstructorFunctions";

function InstructorCourses() {
  const [courses, setCourses] = useState([]);
  const history= useHistory()
  useEffect(() => {
    if (localStorage.instructortoken) {
      getAllCourse(localStorage.instructortoken).then((res) => {
        console.log(res);
        setCourses(res);
      });
    }
  }, []);

  function viewcourse(id){
    var link = 'viewcourse'+id
    history.push({
      pathname:link 
    });
  }

  function handleEdit(id){
    var link='editCourse'+id
    history.push({
      pathname:link 
    });
  }

  function handleModule(id){
    var link='addModule'+id
    history.push({
      pathname:link 
    });
  }

  return (
    <div>
      {localStorage.instructortoken ? (
        <div>
          <Header />
          <SubHeader />
          <InstructorSidebar />
          <div id="courses" className="courses container-fluid">
            {courses.length > 0 ? (
              courses.map((c) => {
                return (  
                  <CourseCard
                    name={c.course_name}
                    details={c.course_details}
                    category={c.category}
                    price={c.price}
                    numstudents="50"
                    courseimage={courseimg}
                    handleEdit={() => {handleEdit(c._id)}}
                    handleModule={() => {handleModule(c._id)}}
                    viewcourse={() => {viewcourse(c._id)}}
                  />
                );
              })
            ) : (
              <h1>You Currently dont have Any courses </h1>
            )}

            
          </div>
          <Footer />
        </div>
      ) : (
        window.location.href='/instructorlogin'
      )}
    </div>
  );
}

export default InstructorCourses;
