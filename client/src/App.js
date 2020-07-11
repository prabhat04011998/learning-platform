import React, {Fragment,useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import AdminLogin from './components/admin/Login'
import Entry from './components/Entry'
import StudentLogin from './components/student/Login'
import StudentRegister from './components/student/Register'
import InstructorLogin from './components/instructor/Login'
import AdminDashboard from './components/admin/AdminDashboard'
import InstructorDashboard from './components/instructor/InstructorDashboard'
import StudentDashboard from './components/student/StudentDashboard'
import StudentCourses from './components/student/MyCourse'
import RequestCourse from './components/student/RequestCourse'
import CoursePage from './components/student/CoursePage'
import CreateInstructor from './components/admin/CreateInstructor'
import MakeCourse from './components/instructor/MakeCourse'
import InstructorCourses from './components/instructor/InstructorCourses'
import EditInstructor from './components/instructor/EditProfile'
import MyCourse from './components/student/MyCourse';
import StudentEdit from './components/student/StudentEdit'
import AllCourses from './components/AllCourses'
import CourseDescription from './components/Course Info/CourseDescription'
import EditCourse from './components/instructor/EditCourse';
import AddModule from './components/instructor/AddModule'

function App() {
 return(
     <Router>
     <div>
     <Route exact path="/" component={Home} />
     <Route exact path="/entry" component={Entry} />
     <Route exact path="/admindashboard" component={AdminDashboard} />
     <Route exact path="/instructordashboard" component={InstructorDashboard} />
     <Route exact path="/studentdashboard" component={StudentDashboard} />
     <Route exact path="/studentlogin" component={StudentLogin} />
     <Route exact path="/adminlogin" component={AdminLogin} />
     <Route exact path="/studentregister" component={StudentRegister} />
     <Route exact path="/instructorlogin" component={InstructorLogin} />
     <Route exact path="/createinstructor" component={CreateInstructor} />
     <Route exact path="/instructorcourses" component={InstructorCourses} />
     <Route exact path="/instructormakecourse" component={MakeCourse} />
     <Route exact path="/instructoredit" component={EditInstructor} />
     <Route exact path="/studentcourses" component={MyCourse} />
     <Route exact path="/studentrequestcourse" component={RequestCourse} />
     <Route exact path="/studentcoursepage" component={CoursePage} />
     <Route exact path="/studentedit" component={StudentEdit} />
     <Route exact path="/allCourses" component={AllCourses} />
     <Route exact path="/CourseDescription:id" component={CourseDescription} />
     <Route exact path="/editCourse:id" component={EditCourse} />
     <Route exact path="/addModule:id" component={AddModule} />
     </div>
     </Router>
 )
}

export default App;
