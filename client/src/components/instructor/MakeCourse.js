import React, { useState, useEffect } from "react";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import { useHistory } from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";
import '../../css/InstructorCourses.css'
import {makeCourse} from '../../api functions/InstructorFunctions'

function MakeCourse() {
  const history = useHistory();
    const [course,setCourse] = useState({
      course_name:"",
      course_details:"",
      category:"",
      price:"",
      tags:[]
    })
    const [coursemade,setCoursemade]=useState(false)
    const [tag,setTags]=useState("")
    const [error, setError] = useState("");
      function onSubmit(e){
        e.preventDefault()
        makeCourse(course, localStorage.instructortoken).then((res) => {
          if (res.status == "1") {
            console.log(res);
            setCourse({
              course_name:"",
              course_details:"",
              category:"",
              price:"",
              tags:[]
            })
            setCoursemade(true);
            setTimeout(function () {
              history.push(`/instructordashboard`);
            }, 2000);
          } else if (res.status == "-1") {
            console.log(res);
            setError(res.message._message);
            setCourse({
              course_name:"",
              course_details:"",
              category:"",
              price:"",
              tags:[]
            })
          } else {
            console.log(res);
            setError(res.message);
            setCourse({
              course_name:"",
              course_details:"",
              category:"",
              price:"",
              tags:[]
            })
          }
        });
        
      }
      const HandleChange = (e) =>{
        setCourse({
            ...course,
           [e.target.name] : e.target.value
           })
      }
      const HandleTagChange = (e) =>{
        setTags(e.target.value)
      }

      const addtag= () => {
        setCourse({
          ...course,
          tags:[...course.tags,tag]
        })
        setTags("")
      }

    return (
        <div>
      {localStorage.instructortoken ? (
        <div>
          <Header />
          <SubHeader />
          <InstructorSidebar />
          <div id="courses" className="courses container-fluid">
        <div className="login-form col-lg-6 col-sm-12">
        {coursemade ? (
            <h3 className="success">Course made !!! redirecting .........</h3>
          ) : null}
          {error.length > 0 ? <h3 className="error">{error}</h3> : null}
          <form noValidate onSubmit={onSubmit} className="">
            <h1 className="h3 mb-3 font-weight-normal">Your course details</h1>
            <div className="form-group">
              <label htmlFor="course_name">Course Name</label>
              <input
                type="text"
                className="form-control"
                name="course_name"
                placeholder="Enter name"
                value={course.course_name}
                onChange={HandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Course Details</label>
              <textarea
                type="text"
                className="form-control"
                name="course_details"
                placeholder="enter description"
                value={course.course_details}
                onChange={HandleChange}
              />
            </div>
            <div className="form-group">
                <label htmlFor="name">category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  placeholder="Enter category"
                  value={course.category}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="enter price"
                  value={course.price}
                  onChange={HandleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="enter suitable tags , tags help us to search your course"
                  value={tag}
                  onChange={HandleTagChange}
                />
                <button type="button" className="btn btn-sm btn-danger add-btn" onClick={addtag}>Add a tag</button>
                <div>
                <ul>
                {course.tags.map((tag) => (<li>{tag}</li>))}
                </ul>


                </div>
                
              </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block sbt-btn">
              Sign in
            </button>
          </form>
        </div>
          </div>
          <Footer />
        </div>
      ) : (
        window.location.href='/instructorlogin'
      )}
    </div>
    )
}

export default MakeCourse
