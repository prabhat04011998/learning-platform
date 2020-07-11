import React, { useState, useEffect } from "react";
import Header from "../../includes/Header2";
import { useHistory, useParams } from 'react-router-dom'
import Footer from "../../includes/Footer";
import SubHeader from "../../includes/Subheader2";
import InstructorSidebar from "./InstructorSidebar";
import "../../css/InstructorCourses.css";
import courseimg from "../../images/seo-course-image.webp";
import { GetACourse } from "../../api functions/AdminFunctions";
import { addModule } from "../../api functions/InstructorFunctions";

function AddModule() {
    const {id} = useParams()
    const history = useHistory();
    const [error,setError]=useState("")
    const [course,setCourse] = useState({
        _id:"",
        course_name:"",
        category:""
    })
    const [module,setModule]=useState("")
    const [moduleMade,setModuleMade]=useState(false)

    function onSubmit(e){
        e.preventDefault()
        addModule(course._id,module, localStorage.instructortoken).then((res) => {
            console.log(res);
          if (res.status == "1") {
            setCourse({
                _id:"",
                course_name:"",
                category:""
            })
            setModuleMade(true);
            setTimeout(function () {
              history.push(`/instructordashboard`);
            }, 2000);
            
          } else if (res.status == "-1") {
            setError(res.message._message);
            setCourse({
                _id:"",
                course_name:"",
                category:""
            })
          } else {
            setError(res.message);
            setCourse({
                _id:"",
                course_name:"",
                category:""
            })
          }
        });
        
    }

    const HandleModule = (e) =>{
        setModule(e.target.value)
      }
    
    useEffect(() => {
        async function setState(){
            await GetACourse(id).then((res) => {         
                setCourse({
                    _id:res.message._id,
                    course_name:res.message.course_name,
                    category:res.message.category
                })  
            })
        
        }
        setState()
      }, []);

    
    return (
        <div>
      {localStorage.instructortoken ? (
        <div>
          <Header />
          <SubHeader />
          <InstructorSidebar />
          <div id="" className="addmodule container-fluid">
          {moduleMade ? (
            <h3 className="success">module creation Success !!! redirecting .........</h3>
          ) : null}
          {error ? <h3 className="error">{error}</h3> : null}
            <img src={courseimg} className="addmodule-pic" />
            <div className="addModuleinfo">
            <h1>{course.course_name}</h1>
            <h2>{course.category}</h2>
            </div>
            <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <h2>Module name</h2>
              <input
                type="text"
                className="form-control name-module"
                name="module"
                placeholder="Enter name for module"
                value={module}
                onChange={HandleModule}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block sbt-btn">Create</button>
            </form>
          </div>
          <Footer />
        </div>
      ) : (
        window.location.href='/instructorlogin'
      )}
    </div>
    )
}

export default AddModule
