import React, { useEffect, useState } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import StudentSidebar from './StudentSidebar'
import "../../css/StudentDashboard.css";
import courseimg from '../../images/seo-course-image.webp'
import {fetchProfile } from "../../api functions/StudentFunctions";

function MyCourse() {
  const [course, setCourse] = useState([]);
  const [noCourses,setnoCourses]=useState(false)
  useEffect(() => {

    fetchProfile(localStorage.studenttoken)
      .then((res) => {
        setCourse(res.message.courses);
        if(res.message.courses.length == 0){
          setnoCourses(true)
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handlervisit(coursename){
    var link = coursename.split(" ").join("");
    window.location.href=link
  }
    return (
      <div>
        {localStorage.studenttoken ? ( <div>
            <Header />
      <SubHeader />
        <StudentSidebar />
        <div id="content" className="content container-fluid course-handler">
          {noCourses ? (<div>
            <h1>You dont have any courses currentl </h1>
            <h1>Purchase new Courses and start your journey to learn</h1>
            <button className="btn btn-lg btn-danger allcourses-btn" ><a href='/allCourses' className="allcourseslink">See All Courses</a></button>
          </div>) : (null)}
          {course.map((c) => {
            return(
              <div className="mycourse">
                <img src={courseimg} alt="" className="course-img" />
                 <h3>{c.coursename}</h3>
                 <button type='button' className="btn btn-danger btn-lg" onClick={() => {handlervisit(c.coursename)}}>Go To course</button>
              </div>
            )
          })}

      
        </div>
        
      <Footer />
        </div>) : ((window.location.href = "/studentlogin"))}
      </div>
       
    )
}

export default MyCourse
