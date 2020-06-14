const express = require('express');
const instructor = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fileUpload = require('express-fileupload');
instructor.use(fileUpload())

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

// api to make courses
  
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

// api to get all courses of logged in instructor

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

  // api to update course info

instructor.patch('/updatecourse', async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          if (req.body['courseid']){
            delete req.body.feed_id;
          }
          if (req.body['_id']){
            delete req.body._id;
          }
          var queryValue =  req.query.courseid 
          if(!queryValue || Object.keys(req.body).length === 0){
              console.log("empty query parmas or request body is empty");
              res.json({
                  status: "0",
                  msg: "empty query parmas or request body is empty"
              });
              return;
          }
          Course.findOneAndUpdate( {_id : queryValue}  , req.body , function (err , course) {
            if (!course){
              res.json({
                  status: "0",
                  msg: "course not found"
              })
            }else {
              res.status(200).json({
                  msg: "course updated successfully",
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


// api to let instructor delete course

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

  // api to add data to course

  // instructor.post('/dataupload', (req, res) => {

  //   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
  //   Instructor.findOne({
  //     _id: decoded._id
  //   })
  //     .then(instructor => {
  //       if (instructor) {
  //         if (req.files === null) {
  //           return res.status(400).json({ msg: 'No file uploaded' });
  //         }
        
  //         const file = req.files.file;
        
  //         file.mv(`${__dirname}/uploads/${instructor.instructor_name}_${file.name}`, err => {
  //           if (err) {
  //             console.error(err);
  //             return res.status(500).send(err);
  //           }
  //           Course.findById(req.body.courseid)
  //            .then(course => {
  //              course.data.push(file.name)
  //            })
  //           res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  //         });
  //       } else {
  //         res.send('instructor does not exist')
  //       }
  //     })
  //     .catch(err => {
  //       res.send('error: ' + err)
  //     })
    
  // });
  


module.exports = instructor



  