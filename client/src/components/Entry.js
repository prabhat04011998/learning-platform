import React from 'react'
import Header2 from '../includes/Header2'
import Footer from '../includes/Footer'
import SubHeader from '../includes/SubHeader'
import '../css/Entry.css'
import student from '../images/student.png'
import teacher from '../images/teacher.png'

function Entry() {
    return (
        <div>
            <Header2 />
            <SubHeader />

           <div className="entry-container">
           <div className="row entry-div">
                <div className="col-lg-6 entity-box">
                    <h1>Instructor's Portal</h1>
                    <div className="entry-data"> 
                        <img src={teacher} className='entity-img' />
                        <div className="data-options">
                            <a href="/instructorlogin"><h2>Login</h2></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 entity-box">
                    <h1>Student's Portal</h1>
                    <div className="entry-data">
                        <img src={student} className='entity-img' />
                        <div className="data-options">
                            <a href="/studentlogin"><h2>Login</h2></a>
                            <a href="/studentregister"><h2>Register</h2></a>
                        </div>
                    </div>
                </div>
            </div>
           </div>

            <Footer />
        </div>
    )
}

export default Entry
