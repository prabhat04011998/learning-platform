import React, { useEffect, useState } from "react";
import Logo from "../images/logo.webp";
import "../css/includes.css";

const MainHeader = () => {
  const [loggedIn, setloggedIn] = useState('');

  useEffect(() => {
    const studenttoken = localStorage.studenttoken;
    const teachertoken = localStorage.instructortoken;
    if (studenttoken) {
      setloggedIn('student');
    }else if(teachertoken){
      setloggedIn('teacher')
    }
  }, []);

    

  function isloggedIn() {
    if (loggedIn == 'student') {
      return (
        <a href="/studentdashboard">
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-search"></span> Explore
          </button>
        </a>
      );
    }else if(loggedIn == 'teacher'){
      return (
        <a href="/instructordashboard">
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-search"></span> Explore
          </button>
        </a>
      );
    }else {
      return (
        <a href="/entry">
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-user"></span> Sign Up
            <span className="glyphicon glyphicon-log-in loginicon-nav"></span>{" "}
            Login
          </button>
        </a>
      );
    }
  }

  return (
    <nav className="navbar navbar-default header-nav">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src={Logo} className="header-logo" />
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li>{isloggedIn()}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;