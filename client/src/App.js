import React, {Fragment,useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Entry from './components/Entry'
import StudentLogin from './components/student/Login'
import StudentRegister from './components/student/Register'
import InstructorLogin from './components/instructor/Login'

function App() {
 return(
     <Router>
     <div>
     <Route exact path="/" component={Home} />
     <Route exact path="/entry" component={Entry} />
     <Route exact path="/studentlogin" component={StudentLogin} />
     <Route exact path="/studentregister" component={StudentRegister} />
     <Route exact path="/instructorlogin" component={InstructorLogin} />
     </div>
     </Router>
 )
}

export default App;
