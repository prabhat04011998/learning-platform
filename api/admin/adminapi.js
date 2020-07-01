const express = require("express");
const admin = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../../models/admin");
const Student = require("../../models/student");
const Instructor = require("../../models/instructor");
const Course = require("../../models/course");
const instructor = require("../../models/instructor");

process.env.SECRET_KEY = "secret";

// admin.post('/registeradmin', (req,res) => {
//   const myadmin = req.body
//   Admin.findOne({
//       username: req.body.username
//     })
//       .then(admin => {
//         if (!admin) {
//           bcrypt.hash(req.body.password, 10, (err, hash) => {
//             myadmin.password = hash
//             Admin.create(myadmin)
//               .then(admin => {
//                 res.json({ status: admin.username + '  Registered!' })
//               })
//               .catch(err => {
//                 res.send('error: ' + err)
//               })
//           })
//         } else {
//           res.json({ error: 'Instructor already exists' })
//         }
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
// })

admin.post("/login", (req, res) => {
  Admin.findOne({
    username: req.body.username,
  })
    .then((admin) => {
      if (admin) {
        if (bcrypt.compareSync(req.body.password, admin.password)) {
          // Passwords match
          const payload = {
            _id: admin._id,
            username: admin.username,
            password: admin.password,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 100000,
          });
          res.json({
            status: "1",
            token: token,
          });
        } else {
          // Passwords don't match
          res.json({status:"0",
             message: "Admin does not exist" });
        }
      } else {
        res.json({status:"0",
        message: "Admin does not exist" });
      }
    })
    .catch((err) => {
      res.json({status:"-1",
      message: err });
    });
});

admin.get("/allinstructor", async (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    _id: decoded._id,
  })
    .then((admin) => {
      if (admin) {
        Instructor.find()
          .then((instructor) => {
            if (instructor) {
              if (instructor.length == 0) {
                res.send("no instructors present");
              } else {
                res.status(200).send(instructor);
              }
            }
          })
          .catch((err) => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          status: "0",
          message: "instructor does not exist",
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

admin.get("/allstudent", async (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    _id: decoded._id,
  })
    .then((admin) => {
      if (admin) {
        Student.find()
          .then((student) => {
            if (student) {
              if (student.length == 0) {
                res.send("no instructors present");
              } else {
                res.status(200).send(student);
              }
            }
          })
          .catch((err) => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          status: "0",
          message: "instructor does not exist",
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

admin.get("/allcourses", async (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    _id: decoded._id,
  })
    .then((admin) => {
      if (admin) {
        Course.find()
          .then((courses) => {
            if (courses) {
              if (courses.length == 0) {
                res.send("no courses present");
              } else {
                res.status(200).send(courses);
              }
            }
          })
          .catch((err) => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          status: "0",
          message: "instructor does not exist",
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

admin.post("/registerinstructor", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    _id: decoded._id,
  })
    .then(async (admin) => {
      if (admin) {
        const myinstructor = req.body;
        Instructor.findOne({
          email: req.body.email,
        })
          .then((instructor) => {
            if (!instructor) {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                myinstructor.password = hash;
                Instructor.create(myinstructor)
                  .then((instructor) => {
                    instructor.toggleActive(1);
                    res.json({
                      status: "1",
                      message: instructor.email + "  Registered!",
                    });
                  })
                  .catch((err) => {
                    res.send({
                      status: "-1",
                      message: err,
                    });
                  });
              });
            } else {
              res.json({
                status: "0",
                message: instructor.email + "already exist !",
              });
            }
          })
          .catch((err) => {
            res.send({
              status: "-1",
              message: err,
            });
          });
      } else {
        res.json({
          status: "0",
          message: "not an admin ",
        });
      }
    })
    .catch((err) => {
      res.send({
        status: "-1",
        message: err,
      });
    });
});

admin.post("/switchactive", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    _id: decoded._id,
  })
    .then((admin) => {
      if (admin) {
        Instructor.findById(req.body.instructorid).then((instructor) => {
          if (instructor.isActive == true) {
            instructor.toggleActive(0);
          } else {
            instructor.toggleActive(1);
          }
        });
      } else {
        res.json({
          status: "0",
          message: "instructor does not exist",
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

admin.post("/checkReport", async (req, res) => {});

admin.post("/banInstructor", async (req, res) => {});

module.exports = admin;
