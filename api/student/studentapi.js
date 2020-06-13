const express = require('express');
const student = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Student = require('../../models/student');

process.env.SECRET_KEY = 'secret'


student.post('/register', (req,res) => {
    const mystudent = req.body
    Student.findOne({
        email: req.body.email
      })
        .then(student => {
          if (!student) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              mystudent.password = hash
              Student.create(mystudent)
                .then(student => {
                  res.json({ status: student.email + '  Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
          } else {
            res.json({ error: 'student with this email already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
})


  
student.post('/login', (req, res) => {
    Student.findOne({
      email: req.body.email
    })
      .then(student => {
        if (student) {
          if (bcrypt.compareSync(req.body.password, student.password)) {
            // Passwords match
            const payload = {
              _id: student._id,
              student_name: student.student_name,
              contact: student.contact,
              email: student.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 100000
            })
            res.send("token- "+token)
          } else {
            // Passwords don't match
            res.json({ error: 'student does not exist' })
          }
        } else {
          res.json({ error: 'student does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })
  

module.exports = student