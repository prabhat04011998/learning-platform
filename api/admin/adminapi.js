const express = require('express');
const admin = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../../models/admin');
const Student = require('../../models/student');
const Instructor = require('../../models/instructor');
const Course = require('../../models/course');


process.env.SECRET_KEY = 'secret'

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
module.exports = admin