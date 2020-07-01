import React from 'react'
import { useHistory } from 'react-router-dom'

const SubHeader2 = () => {

   const history= useHistory()
   
   function logOut() {
       
      if(window.location.pathname.includes('admin')){
         localStorage.removeItem('admintoken')
      }else if(window.location.pathname.includes('student')){
         localStorage.removeItem('studenttoken')
      }else if(window.location.pathname.includes('instructor')){
         localStorage.removeItem('instructortoken')
      }
      history.push(`/`)
    }
  

    return (
        <div className="subheader row">
            
            <div className="col-lg-2 col-sm-6 col-md-4">
               <a href="" className="subheader-link"><h3>Development</h3></a>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
               <a href="" className="subheader-link"><h3>Promotions</h3></a>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
               <a href="" className="subheader-link"><h3>Advertisements</h3></a>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
               <a href="" className="subheader-link"><h3>Settings</h3></a>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
               <a href="" className="subheader-link"><h3>Collections</h3></a>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
               <button onClick={logOut} className="btn btn-danger logout">Logout</button>
            </div>
                     
        </div>
    )
}

export default SubHeader2
