import React from 'react'
import "../../css/InstructorDashboard.css";

function InstructorSidebar() {
    return (
        <div>
        <div className="admin-panel-sidenav" id="mySidebar">
        <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">My profile</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options3">
            <li>
                <a href="/instructordashboard"> Profile</a>
              </li>
              <hr />
              <li>
                <a href="/instructoredit">Edit Profile</a>
              </li>
              <hr />
            </ul>
          </div>
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Course Management</h3>
          </div>
          <div className="admin-panel-sidebar-options">
            <ul id="sidebar-options1">
              <li>
                <a href="/instructormakecourse">Add Course</a>
              </li>
              <hr />
              <li>
                <a href="/instructorcourses">My Courses</a>
              </li>
              <hr />
              <li>
                <a href="#">View Modules</a>
              </li>

            </ul>
          </div>
  
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Request Management</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options2">
              <li>
                <a href="">View All Request </a>
              </li>
              <hr />
            </ul>
          </div>
  
          
        </div>
      </div>
    )
}

export default InstructorSidebar
