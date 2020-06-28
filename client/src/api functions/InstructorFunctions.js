import axios from 'axios'


export const instructorlogin = user => {
    return axios
      .post('api/instructor/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
          if(response.data.token){
            localStorage.setItem('instructortoken', response.data.token)
          }
        console.log(response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}