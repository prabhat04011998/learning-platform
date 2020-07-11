import React, { useState, useEffect } from "react";
import Header2 from "../includes/Header2";
import Footer from "../includes/Footer";
import { useHistory } from 'react-router-dom'
import SubHeader from "../includes/SubHeader";
import { allCourse } from "../api functions/AdminFunctions";
import courseimg from "../images/seo-course-image.webp";
import '../css/Entry.css'


function AllCourses() {
  const history= useHistory()
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    allCourse().then((res) => {
      setCourses(res.message);
    });
  }, []);

  function gotocourse(courseid){
    var link='CourseDescription'+courseid
    history.push({
      pathname:link 
    });
  }

  return (
    <div>
      <Header2 />
      <SubHeader />
      <div className="allcourses">
        {courses.map((c) => {
          return (
            <div className="course-card-body">
              <img src={courseimg} alt="" className="course-card-img" />
              <h2>{c.course_name}</h2>
              <h3>price - {c.price}</h3>
              <h3>category-{c.category}</h3>
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={() =>{gotocourse(c._id)}}
              >
                Go To course
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default AllCourses;
