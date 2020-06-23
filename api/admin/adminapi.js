const express = require('express');
const admin = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../../models/admin');
const Student = require('../../models/student');
const Instructor = require('../../models/instructor');
const Course = require('../../models/course');
const instructor = require('../../models/instructor');


process.env.SECRET_KEY = 'secret'

admin.get('/allinstructor',async (req,res) => {
  Instructor.find()
  .then(instructor => {
      if (instructor) {
        if(instructor.length == 0){
          res.send('no instructors present')
        }else{
          res.status(200).send(instructor)
        }
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

admin.get('/allstudent',async (req,res) => {
  Student.find()
  .then(student => {
      if (student) {
        if(student.length == 0){
          res.send('no instructors present')
        }else{
          res.status(200).send(student)
        }
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

admin.get('/allcourses', async (req,res)=> {
  Course.find()
  .then(courses => {
    if (courses) {
      if(courses.length == 0){
        res.send('no courses present')
      }else{
        res.status(200).send(courses)
      }
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})


admin.post('/registerinstructor', (req,res) => {
    const myinstructor = req.body
    Instructor.findOne({
        email: req.body.email
      })
        .then(instructor => {
          if (!instructor) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              myinstructor.password = hash
              Instructor.create(myinstructor)
                .then(instructor => {
                  instructor.toggleActive(1)
                  res.json({ status: instructor.email + '  Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
          } else {
            res.json({ error: 'Instructor already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
})

admin.post('/switchactive' , (req,res) => {
  Instructor.findById(req.body.instructorid)
   .then( instructor => {
      if(instructor.isActive == true){
        instructor.toggleActive(0)
      }else{
        instructor.toggleActive(1)
      }
   })
})

admin.post('/checkReport', async (req,res) => {
  
})

admin.post('/banInstructor', async (req,res) => {
  
})

module.exports = admin