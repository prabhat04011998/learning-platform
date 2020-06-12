const express = require('express');
const student = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Student = require('../../models/student');

process.env.SECRET_KEY = 'secret'

student.get('/any',async (req,res) => {
    res.send('student')
})



module.exports = student