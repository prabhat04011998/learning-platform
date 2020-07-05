import React, { useState, useEffect } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import InstructorSidebar from "./InstructorSidebar";
import "../../css/InstructorCourses.css";
import CourseCard from "./CourseCard";
import courseimg from "../../images/seo-course-image.webp";
import { getAllCourse } from "../../api functions/InstructorFunctions";

function InstructorCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (localStorage.instructortoken) {
      getAllCourse(localStorage.instructortoken).then((res) => {
        setCourses(res);
      });
    }
  }, []);


  return (
    <div>
      {localStorage.instructortoken ? (
        <div>
          <Header />
          <SubHeader />
          <InstructorSidebar />
          <div id="courses" className="courses container-fluid">
            {/* {courses.length > 0 ? (
              courses.map((c) => {
                return (  
                  <CourseCard
                    name={c.course_name}
                    details={c.course_details}
                    category={c.category}
                    price={c.price}
                    numstudents="50"
                    courseimage={courseimg}
                  />
                );
              })
            ) : (
              <h1>You Currently dont have Any courses </h1>
            )} */}

            <CourseCard 
                name='search engine optimisation'
                details='SEO or Search Engine Optimization is the key factor to gain traffic into your website. Our core professionals look into SEO with careful observation and thorough research. .'
                category='web'
                price='Rs 500'
                numstudents='50'
                courseimage={courseimg}
                />
                <CourseCard 
                name='search engine optimisation'
                details='SEO or Search Engine Optimization is the key factor to gain traffic into your website. Our core professionals look into SEO with careful observation and thorough research. .'
                category='web'
                price='Rs 500'
                numstudents='50'
                courseimage={courseimg}
                />
                <CourseCard 
                name='search engine optimisation'
                details='SEO or Search Engine Optimization is the key factor to gain traffic into your website. Our core professionals look into SEO with careful observation and thorough research. .'
                category='web'
                price='Rs 500'
                numstudents='50'
                courseimage={courseimg}
                />
                <CourseCard 
                name='search engine optimisation'
                details='SEO or Search Engine Optimization is the key factor to gain traffic into your website. Our core professionals look into SEO with careful observation and thorough research. .'
                category='web'
                price='Rs 500'
                numstudents='50'
                courseimage={courseimg}
                />
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
