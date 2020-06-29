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
import CreateInstructor from './components/admin/CreateInstructor'

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
     
     </div>
     </Router>
 )
}

export default App;
