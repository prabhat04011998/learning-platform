const express = require('express');
const instructor = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Instructor = require('../../models/instructor');
const Course = require('../../models/course');

process.env.SECRET_KEY = 'secret'
  
instructor.post('/login', (req, res) => {
    Instructor.findOne({
      email: req.body.email
    })
      .then(instructor => {
        if (instructor) {
          if (bcrypt.compareSync(req.body.password, instructor.password)) {
            // Passwords match
            const payload = {
              _id: instructor._id,
              instructor_name: instructor.instructor_name,
              contact: instructor.contact,
              email: instructor.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 100000
            })
            res.send("token- "+token)
          } else {
            // Passwords don't match
            res.json({ error: 'User does not exist' })
          }
        } else {
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })
  
instructor.post('/makecourse', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          const mycourse = {
            instructor_id:decoded._id,
            course_name:req.body.course_name,
            course_details:req.body.course_details,
            data:[]
          }
          Course.create(mycourse)
                .then(course => {
                  res.json({ status: course.course_name + '  Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
          res.status(200).send('coruse added successfully')
        } else {
          res.send('instructor does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

instructor.get('/getcourses', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
         Course.find({
           instructor_id:instructor._id
         }).then(courses => {
           if(courses.length > 0){
              res.send(courses)
           }else{
              res.send('no courses for the user')
           }
         })
        } else {
          res.send('instructor does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  instructor.post('/deletecourse', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          Course.findByIdAndDelete(req.body.courseid, function (err,docs) {
            if (err) {
              res.json({
                status: "0",
                msg: "An error occured"
              })
            } else {        
              res.status(200).json({
                msg: "Deleted Succesfully",
                status: "1"
              });
            }
        })
        } else {
          res.send('instructor does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })


module.exports = instructor



  