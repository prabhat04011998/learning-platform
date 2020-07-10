import React from 'react'

function StudentSidebar() {
    return (
        <div>
            <div className="admin-panel-sidenav" id="mySidebar">
        <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">My profile</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options3">
            <li>
                <a href="/studentdashboard"> Profile</a>
              </li>
              <hr />
              <li>
                <a href="/studentedit">Edit Profile</a>
              </li>
              <hr />
            </ul>
          </div>
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Courses</h3>
          </div>
          <div className="admin-panel-sidebar-options">
            <ul id="sidebar-options1">
              <li>
                <a href="/studentcourses">My Courses</a>
              </li>
              <hr />
              <li>
                <a href="/studentRequestAccess">Request Access</a>
              </li>
              <hr />
              <li>
                <a href="#">options3</a>
              </li>
            </ul>
          </div>
  
          <div className="admin-panel-sidebar-heading" id="sidebar-heading">
            <h3 className="sidebar-list">Request Management</h3>
          </div>
          <div className="admin-panel-sidebar-options" id="sidebar-options">
            <ul id="sidebar-options2">
              <li>
                <a href="">ongoing requests</a>
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
  
          
        </div>
        </div>
    )
}

export default StudentSidebar
