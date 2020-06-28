import axios from 'axios'


export const allInstrcutor = user => {
    return axios
      .post('api/admin/allinstructor')
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const allStudent = user => {
    return axios
      .post('api/admin/allstudent')
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const allCourse = user => {
    return axios
      .post('api/admin/allcourses')
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}


export const instructorregister = newUser => {
    return axios
     .post('api/admin/registerinstructor', newUser)
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