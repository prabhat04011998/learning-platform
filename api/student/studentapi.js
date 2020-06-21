const express = require('express');
const student = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const Student = require('../../models/student');

process.env.SECRET_KEY = 'secret'

  
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

  
student.patch('/update' , async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Student.findOneAndUpdate( decoded._id  , req.body , function (err ,student) {
    if (!student){
      res.json({
          status: "0",
          msg: "Student not found"
      })
    }else {
      res.status(200).json({
          msg: "Student updated successfully",
          status: "1"
      });
    }
 })
})

  // student.post('/buycourse', (req, res) => {
  //   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  //   Student.findOne({
  //     _id: decoded._id
  //   })
  //     .then(student => {
  //       if (student) {
  //         Course.findById(req.body.courseid)
  //         .then(course => {
  //           if(course){
  //            if(course.price <= 0){
  //             const obj = {
  //               coursename : course.course_name,
  //               courseid : course._id,
  //               paymentid : 'test',
  //               amount : course.price,
  //               purchase_date : Date.now()
  //             }
  //               student.courses.push(obj)
  //               student.save()
  //             res.json({
  //               status : 1,
  //               msg : 'course purchased successfull'
  //             })
  //            }else{
  //              //payment gateaway logic
  //              console.log('some logic');
               
  //            }
  //           }else{
  //             res.send('no course found with matching id')
  //           }
  //         })
  //       } else {
  //         res.json({ error: 'student does not exist' })
  //       }
  //     })
  //     .catch(err => {
  //       res.send('error: ' + err)
  //     })
  // })
  

module.exports = student