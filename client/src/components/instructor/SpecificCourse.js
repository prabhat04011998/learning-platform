import React, { useState, useEffect } from "react";
import Header2 from "../../includes/Header2";
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/SubHeader";
import { useParams } from "react-router-dom";
import { fetchCourseDetails,addData } from "../../api functions/InstructorFunctions";
import "../../css/InstructorCourses.css";
import courseimg from "../../images/seo-course-image.webp";

function CourseDescription() {
  const [course, setCourse] = useState({
    course_name: "",
    _id: "",
    course_details: "",
    price: "",
    category: "",
    tags: [],
    modules: [],
    instructor_id: ""
  });

  const [document,setDocument]=useState(null)
  const [moduleid,setModuleid]=useState("")

  const { id } = useParams();

  const handleFileChange = (e) =>{
    setDocument(e.target.files[0])
  }

  function onSubmit(e){
    e.preventDefault()
    const data = new FormData()
    data.append('file' , document)
    data.append('courseid',moduleid)
    addData(localStorage.instructortoken,data).then((res) => {
        console.log(res);
    })
  }

  useEffect(() => {
    async function setState() {
      await fetchCourseDetails(id, localStorage.instructortoken).then((res) => {
        setCourse(res.message);
      });
    }
    setState();
  }, []);

  return (
    <div>
      <Header2 />
      <SubHeader />
      <div className="specific-div">
        <h1>{course.course_name}</h1>
        <h1>category-{course.category}</h1>
        <img className="module-img" src={courseimg} alt="Card image cap" />
        <h1>Modules</h1>
        {course.modules.map((m) => {
          return (
            <div>
              <div className="module-box">
                <h2>name-{m.module_name}</h2>
                <h2>created at-{m.created_at.split("T")[0]}</h2>
                <div>
                <h3>Upload Files here</h3>
                <form noValidate onSubmit={onSubmit}>
                  <div className="form-group ">
                    <h2>Attach File</h2>
                    <input
                      type="file"
                      name="file"
                      className="file-input"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary request-btn"
                    onClick={() => {setModuleid(m._id)}}
                  >
                    get ModuleId 
                  </button>
                  <button
                    type="submit"
                    className="btn btn-lg btn-danger request-btn"
                  >
                    Add Data
                  </button>
                </form>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default CourseDescription;
