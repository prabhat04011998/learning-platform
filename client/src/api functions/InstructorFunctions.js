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

export const getAllCourse = instructortoken => {
    return axios
      .get('api/instructor/getcourses',{headers: {
        Authorization: `${instructortoken}`
      }})
      .then(response => {
        return response.data.message
      })
      .catch(err => {
        console.log(err)
      })
}

export const makeCourse = (course,instructortoken) => {
  return axios
    .post('api/instructor/makecourse',course,{headers: {
      Authorization: `${instructortoken}`
    }})
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchProfile = instructortoken => { 
  console.log(instructortoken);
  return axios
    .get('api/instructor/fetch',{headers: {
      Authorization: `${instructortoken}`
    }})
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchBasicProfile = id => { 
  return axios
    .post('api/instructor/fetchbasic',{
      instructor_id:id
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const editProfile = (instructor,instructortoken) => {
  return axios
    .put('api/instructor/update',instructor,{headers: {
      Authorization: `${instructortoken}`
    }})
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}