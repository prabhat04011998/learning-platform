import "../../css/InstructorCourses.css";
import React, { useEffect } from "react";
import EditCourse from "./EditCourse";


function CourseCard({
  name,
  details,
  category,
  price,
  courseimage,
  numstudents,
  handleEdit,
  handleModule,
  viewcourse
}) {


  return (
    <div className=' contain-card'>
        <img className="card-img-top" src={courseimage} alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-title">{name}</h3>
          <p class="card-text">{details}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">price - {price}</li>
          <li class="list-group-item">category- {category}</li>
          <li class="list-group-item">
            number of students enrolled - {numstudents}
          </li>
        </ul>
        <button className = 'btn btn-primary opt-btn' onClick={() => {handleEdit()}}>Edit</button>
        <button className='btn btn-danger opt-btn'>delete</button>
        <button className='btn btn-primary opt-btn' onClick={() => {handleModule()}}>Add Module</button>
        <button className='btn btn-danger opt-btn' onClick={() => {viewcourse()}}>View</button>
    </div>
  );
}

export default CourseCard;
