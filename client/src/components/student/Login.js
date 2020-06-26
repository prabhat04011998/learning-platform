import React, { useState } from 'react'
import Header from '../../includes/Header2'
import Footer from '../../includes/Footer'
import SubHeader from '../../includes/SubHeader'
import { useHistory } from 'react-router-dom'
import '../../css/LoginRegister.css'
import { studentlogin } from '../../api'

function Login() {
    const history= useHistory()

    const [state,setState]=useState({
        email:'',
        password:''
    })
    
      function onChange(e) {
       setState({
            ...state,
            [e.target.name]: e.target.value 
        })
      }


     function onSubmit(e) {
        e.preventDefault()
    
        const user = {
          email:state.email,
          password:state.password
        }
    
        studentlogin(user).then(res => {
          if (res.status == "1") {
            history.push(`/profile`)
          }
        })
      }

    return (
        <div>
            <Header />
            <SubHeader />
           <div className="form-container">
           <div className="login-form col-lg-6 col-sm-12">
            <form noValidate onSubmit={onSubmit} className="my-form">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={state.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
            </div>
           </div>
            <Footer />
        </div>
    )
}

export default Login
