const express = require('express');
const instructor = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fileUpload = require('express-fileupload');
instructor.use(fileUpload())
var nodemailer = require('nodemailer');
const Instructor = require('../../models/instructor');
const Course = require('../../models/course');
const Student = require('../../models/student');
instructor.use(cors())
process.env.SECRET_KEY = 'secret'
  var transporter = nodemailer.createTransport({
  host:"smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});
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
              email: instructor.email,
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

// api to update instructors details

instructor.put('/update' , async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Instructor.findOneAndUpdate( decoded._id  , req.body , function (err , instructor) {
    if(err){
      res.json({
        status: "-1",
        message: err
    })
    }else{
      if (!instructor){
        res.json({
            status: "0",
            message: "Instructor not found"
        })
      }else {
        res.status(200).json({
            message: "Instructor updated successfully",
            status: "1"
        });
      }
    }
 })
})
///////////////////// api to fetch instructor details //////////////

instructor.get('/fetch' , async (req,res) => {   
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Instructor.findById( decoded._id , function (err , instructor) {
    if(err){
      res.json({
        status: "-1",
        message: err
    })
    }else{
      if (!instructor){
        res.json({
            status: "0",
            message: "Instructor not found"
        })
      }else {
        res.status(200).json({
            message: instructor,
            status: "1"
        });
      }
    }
 })
 .catch((Err) => {
   console.log(err);
   res.json({
    status: "-1",
    message: err
})
 })
})

/////--------------api to get basic details of instructor------------------//////

instructor.post('/fetchbasic' , async (req,res) => {   
  
  Instructor.findById( req.body.instructor_id , function (err , instructor) {
    if(err){
      res.json({
        status: "-1",
        message: err
    })
    }else{
      if (!instructor){
        res.json({
            status: "0",
            message: "Instructor not found"
        })
      }else {
        const data = {
          name:instructor.instructor_name,
          contact:instructor.contact,
          details:instructor.instructor_description
        }
        res.status(200).json({
            message: data,
            status: "1"
        });
      }
    }
 })
 .catch((Err) => {
   console.log(err);
   res.json({
    status: "-1",
    message: err
})
 })
})

// api to make courses
  
instructor.post('/makecourse', async (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then( async instructor => {
        if (instructor) {
          const course = new Course(req.body)
          course.instructor_id=decoded._id
          await course.save((err) => {
            if(err){
                res.json({
                  status:"-1",
                  message:err
                })
            }else{
                return res.json({
                    status:"1",
                    message:"course made successfully"
                })
            }
        })
        } else {
          res.json({
            status:"0",
            message:"instructor not found"
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
              res.json({
                status:"1",
                message:courses
              })
           }else{
              res.json({
                status:"0",
                message:"no courses for instructor "
              })
           }
         })
        } else {
          res.json({
            status:"0",
            message:"instructor not found"
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

  // ------------------------------------api to update course info----------------------------------

instructor.put('/updatecourse', async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          Course.findOneAndUpdate( {_id : req.body._id}  , req.body , function (err , course) {
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
          res.json({
            status:"0",
            message:"no instructor"
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


// ------------------------------api to let instructor delete course-------------------------------

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

//--------------------------------- api to create a course module--------------------------------------

instructor.post('/addmodule' , async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          const mymodule = {
            module_name:req.body.module_name,
            created_at:Date.now()
          }
          Course.findById(req.body.courseid)
          .then(course => {
            if(course){
              course.modules.push(mymodule)
              course.save()             
              res.status(200).json({
                status:"1",
                message:"module added successfully"
              })
            }else{
              res.json({
                status:"0",
                message:"no course with matching id "
              })
            }
          })
        } else {
          res.json({
            status:"0",
            message:"no instructor with matching id "
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

//------------------get complete course data -------------------------------/

instructor.post("/getcoursedetails" , async (req,res) => {
  Course.findById(req.body.course_id,(err,course) => {
    if(!err){
      if(course){
        
        res.json({
          status:"1",
          message:course
        })
      }else{
        res.json({
          status:"0",
          message:"no course"
        })
      }
    }else{
      res.json({
        status:"-1",
        message:err
      })
    }
  })
})


  // ----------------------------api to add data to course module ---------------------------------------

  instructor.post('/dataupload', (req, res) => {

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    })
      .then(instructor => {
        if (instructor) {
          if (req.files === null) {
            return res.status(400).json({status:"0", message: 'No file uploaded' });
          }
          const file = req.files.file;

          file.mv(`./uploads/${instructor.instructor_name}_${file.name}`, err => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                status:"-1",
                message:err
              });
            }else{
              Course.findById(req.body.courseid)
             .then(course => {
               course.modules.forEach(module => {
                 if(module._id == req.body.moduleid){
                   module.data.push(`${file.name}`)
                 }
               });
               course.save()        
             })
            res.json({ status:"1",
          message:"uploaded successfully" });
            }
          });
        } else {
          res.json({status:"0",
        message:'instructor does not exist'})
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
    
  });
  
  // ----------------------------api to approve the course request  ---------------------------------------
instructor.post('/processRequest' , async (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Instructor.findOne({
      _id: decoded._id
    }).then((instructor) => {
      const objforstudent = {
        coursename : req.body.course_name,
        courseid : req.body.course_id,
        paymentid : req.body.payment_id,
        amount : req.body.amount,
        purchase_date : new Date().toLocaleDateString(),
        instructor_id:instructor._id
      }
      
      Student.findOne({email : req.body.student_email}).then((student) => {
        if(!student){
          res.json({
            status:"0",
            message:"student's email is not valid"
          })
        }else{
          student.courses.push(objforstudent)
        student.save()
        const objforcourse = {
          student : student._id,
          paymentid : req.body.payment_id,
          amount : req.body.amount,
          purchase_date : new Date().toLocaleDateString()
        }
        Course.findById(req.body.course_id).then((course) => {
          course.students.push(objforcourse)
          course.save()
        })

        var mailOptions = {
          from: instructor.email,
          to: student.email,
          subject: 'approval for course',
          text: `Dear student your rerquest for the course is approved and course is now activated for your id 
          regards `,
          html:`<h1>Details</h1><ul><li>Dear student your rerquest for the course is approved and course is now activated for your id 
          regards</li></ul>`
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });   
        res.json({
          status:"1",
          message: "done"
        })

        }
      })   
    }).catch((err)=>{
      res.json({
        status:"-1",
        error:err
      })
    })
 
})
  

module.exports = instructor



  