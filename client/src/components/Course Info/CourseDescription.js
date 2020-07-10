import React, { useState, useEffect } from "react";
import Header2 from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/SubHeader";
import { GetACourse } from "../../api functions/AdminFunctions";
import { fetchBasicProfile } from "../../api functions/InstructorFunctions";
import courseimg from "../../images/seo-course-image.webp";
import "../../css/CourseInfo.css";
import { useLocation } from "react-router-dom";
import { set } from "mongoose";

function CourseDescription() {
  const [course, setCourse] = useState({});
  const [instructor,setInstructor]=useState({});
  const Location = useLocation();
  useEffect(() => {
    async function setState(){
        await GetACourse(Location.id).then((res) => {
            setCourse(res.message)  
            fetchBasicProfile(res.message.instructor_id).then((res)=>{
                setInstructor(res.message)
            })         
        })
    }
    setState()
  }, [Location]);
  return(
      <div>
        <Header2 />
      <SubHeader />
        <div className='seo-div'>
        <img src={courseimg} alt="" className="courseImage" />
            <h1>{course.course_name}</h1>
            <h3>{course.course_details}</h3>
            <h2>Price - {course.price}</h2>
            <h2>Category - {course.category}</h2>
            <h4>Course id - {course._id}</h4>
            <div className='ins-details'>
            <h3>Taught By-{instructor.name}</h3>
            <h4>More About our Instructor-{instructor.details}</h4>
            <h3>Contact / Paytm number- {instructor.contact}</h3>
            </div>
            <button className="btn btn-danger btn-lg requestbtn"><a className='requestbtn-a' href="/studentRequestAccess">Buy Course</a></button>
            <div className="register-instructions">
                <h2>Want to Register to the Course , Complete the Following steps</h2>
                <div className='ins-list'>
                <ol>
                    <li>Make the payment of the given course price via Paytm</li>
                    <li>Phone number of instructor is given in details of course </li>
                    <li>Take a screenshot of the payment </li>
                    <li>In your dashboard , youll see option to request acess </li>
                    <li>Submit the screenshot there with course id given in details</li>
                    <li>Instructor will give you acess in max 2 working days </li>
                </ol>
                </div>
            </div>
            
        </div>
        <Footer />  
      </div>
  );
}

export default CourseDescription;
