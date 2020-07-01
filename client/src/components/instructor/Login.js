import React, { useState } from 'react'
import Header from '../../includes/Header2'
import Footer from '../../includes/Footer'
import SubHeader from '../../includes/SubHeader'
import { useHistory } from 'react-router-dom'
import '../../css/LoginRegister.css'
import { instructorlogin } from '../../api functions/InstructorFunctions'

function Login() {
  const [error,setError] = useState(false)
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
    
        instructorlogin(user).then(res => {
          if (res.status == "1") {
            history.push(`/instructordashboard`)
            setState({
              email:'',
              password:''
          })
          }else{
            setError(true)
            setState({
              email:'',
              password:''
          })
        }
        })
      }

    return (
        <div>
            <Header />
            <SubHeader />
           <div className="form-container">
           <div className="login-form col-lg-6 col-sm-12">
           {error ? (<h3 className="error">invalid credentials try again</h3>) : null}
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
