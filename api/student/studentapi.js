const express = require('express');
const student = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const Student = require('../../models/student');
const Course = require('../../models/course');
const Report = require('../../models/report');
const Instructor = require('../../models/instructor');
var nodemailer = require('nodemailer');
const { deleteOne } = require('../../models/student');
const fileUpload = require('express-fileupload');
student.use(fileUpload())

process.env.SECRET_KEY = 'secret'
var transporter = nodemailer.createTransport({
  host:"smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});
  
// ------------------------student login api---------------------------------------

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
            res.json({
              status:"1",
              token:token
            })
          } else {
            // Passwords don't match
            res.json({
              status:"0",
              message:"student does not exist"
            })
          }
        } else {
          res.json({
            status:"0",
            message:"student does not exist"
          })
        }
      })
      .catch(err => {
        res.json({
          status:"-1",
          message:err
        })
      })
  })


  // --------------------------student registration api -------------------------


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
                res.json({ 
                  status: 1,
                  message: student.email + '  Registered!' 
                })
              })
              .catch(err => {
                res.json({ error: err })
              })
          })
        } else {
          res.json({ error: 'student with this email already exists' })
        }
      })
      .catch(err => {
        res.json({ error: err })
      })
    
})

// ----------------------------update student details-------------------------------
  
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

// -------------------------------------api to submit your reciept and requet course access --------------------

  student.post('/buycourse', (req, res) => {
    var decoded  = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Student.findById(decoded._id ).then((student) => {
      if(student){
        Course.findById(req.body.courseid)
        .then(async (course) => {
          if(course){
           if(course.price <= 0){
            const objforstudent = {
              coursename : course.course_name,
              courseid : course._id,
              paymentid : 'none',
              amount : course.amount,
              purchase_date : new Date().toLocaleDateString(),
              instructor_id:course.instructor_id
            }

            const objforcourse = {
              student : student._id,
              paymentid : 'none',
              amount : course.amount,
              purchase_date : new Date().toLocaleDateString()
            }
              student.courses.push(objforstudent)
              course.students.push(objforcourse)
              student.save()
              course.save()
            res.json({
              status : 1,
              msg : 'course purchased successfull'
            })
           }else{


            if (req.files === null) {
              return res.status(400).json({ msg: 'No file uploaded' });
            }else{
              const file = req.files.file;
  
              file.mv(`./uploads/${student.student_name}_${file.name}`, err => {
                if (err) {
                  console.error(err);
                }
              });
              
              var instructor_email= await Instructor.findById(course.instructor_id).then((ins) => {
                return ins.email
              })
  
              var mailOptions = {
                from: student.email,
                to: instructor_email,
                subject: 'application for course',
                text: `student name  -${student.student_name}  student email - ${student.email} courseName  - ${course.course_name}`,
                html:`<h1>Details</h1><ul><li>email-${student.email} </li>
                <li>name-${student.student_name} </li>
                <li>courseName-${course.course_name} </li>
                <li>courseId-${course._id} </li></ul>`,
                attachments: [
                  {   
                      filename: file.name,
                      path: `uploads/${student.student_name}_${file.name}`
                  }
                ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              res.json({
                status : 1,
                msg : 'request sent successfull'
              })
            }
            
           }
          }else{
            res.send('no course found with matching id')
          }
        })
      }else{
        console.log('no');
        
      }
    })
  })

  student.post('/report_instructor' , async (req,res) => {

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Student.findById(decoded._id).then((student) => {

    })

  })

module.exports = student


