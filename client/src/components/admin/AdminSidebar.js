import React from "react";
import "../../css/AdminDashboard.css";

function AdminSidebar() {
  return (
    <div>
      <div className="admin-panel-sidenav" id="mySidebar">
        <div className="admin-panel-sidebar-heading" id="sidebar-heading">
          <h2 className="sidebar-list">Instructor options</h2>
        </div>
        <div className="admin-panel-sidebar-options">
          <ul id="sidebar-options1">
            <li>
              <a href="/createinstructor">Create Instructor</a>
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
          <h2 className="sidebar-list">Heading 2</h2>
        </div>
        <div className="admin-panel-sidebar-options" id="sidebar-options">
          <ul id="sidebar-options2">
            <li>
              <a href="">options1</a>
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
          <h2 className="sidebar-list">Heading 3</h2>
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
  );
}

export default AdminSidebar;
