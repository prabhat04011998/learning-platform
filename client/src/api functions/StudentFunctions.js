import axios from 'axios'


export const studentlogin = user => {
    return axios
      .post('api/student/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
          if(response.data.token){
            localStorage.setItem('studenttoken', response.data.token)
          }
        console.log(response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}


export const studentregister = newUser => {
   return axios
    .post('api/student/register', {
      student_name: newUser.student_name,
      email: newUser.email,
      password: newUser.password,
      contact: newUser.contact
    })
    .then(response => {
      console.log(' Student Registered')
    })
}