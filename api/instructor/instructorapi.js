const express = require('express');
const instructor = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Instructor = require('../../models/instructor');


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
  


module.exports = instructor


//   users.get('/profile', (req, res) => {
//     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
//     User.findOne({
//       _id: decoded._id
//     })
//       .then(user => {
//         if (user) {
//           res.json(user)
//         } else {
//           res.send('User does not exist')
//         }
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
//   })
  