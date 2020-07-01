import React from 'react'
import "../../css/InstructorDashboard.css";

function InstructorSidebar() {
    return (
        <div>
        <div className="admin-panel-sidenav" id="mySidebar">
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Student Management</h3>
          </div>
          <div className="admin-panel-sidebar-options">
            <ul id="sidebar-options1">
              <li>
                <a href="/createinstructor">My Students</a>
              </li>
              <hr />
              <li>
                <a href="">options2</a>
              </li>
              <hr />
              <li>
                <a href="#">options3</a>
              </li>
            </ul>
          </div>
  
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Course Management</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options2">
              <li>
                <a href="">add Course</a>
              </li>
              <hr />
              <li>
                <a href="">options2</a>
              </li>
              <hr />
              <li>
                <a href="">options3</a>
              </li>
            </ul>
          </div>
  
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Heading 3</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options3">
              <li>
                <a href="/">options</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default InstructorSidebar
