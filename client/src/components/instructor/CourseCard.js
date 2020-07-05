import "../../css/InstructorCourses.css";
import React from "react";

function CourseCard({
  name,
  details,
  category,
  price,
  courseimage,
  numstudents,
}) {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className="card">
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
      </div>
    </div>
  );
}

export default CourseCard;
