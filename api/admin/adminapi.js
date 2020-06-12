const express = require('express');
const admin = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../../models/admin');
const Instructor = require('../../models/instructor');


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


module.exports = admin