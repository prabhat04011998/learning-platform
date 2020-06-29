import axios from 'axios'


export const adminlogin = user => {
  return axios
    .post('api/admin/login', {
      username: user.username,
      password: user.password
    })
    .then(response => {
        if(response.data.token){
          localStorage.setItem('admintoken', response.data.token)
        }
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const allInstrcutor = admintoken => {
    return axios
      .get('api/admin/allinstructor',{headers: {
        Authorization: `${admintoken}`
      }})
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const allStudent = admintoken => {
    return axios
      .get('api/admin/allstudent',{headers: {
        Authorization: `${admintoken}`
      }})
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const allCourse = admintoken => {
    return axios
      .get('api/admin/allcourses',{headers: {
        Authorization: `${admintoken}`
      }})
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}


export const instructorregister = (newUser,admintoken) => {
    return axios
     .post('api/admin/registerinstructor', newUser,{headers: {
      Authorization: `${admintoken}`
    }})
     .then(response => {
       console.log('Instructor Registered')
     })
 }

//  {
//     "email":"veeralsharma@gmail.com",
//     "password":"veeral",
//     "instructor_name":"veeral",
//     "instructor_description":"some information about our instructor",
//     "contact":"2435324523",
//     "profile_image":"our profile image name/link",
//     "socialmedia_profiles":{
//         "instagram":"xyz",
//         "facebook":"asdfa",
//         "linkedin":"ASdfa",
//         "twitter":"sdfa"
//     }
// }