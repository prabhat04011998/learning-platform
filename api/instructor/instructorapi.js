const express = require('express');
const instructor = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Instructor = require('../../models/instructor');


process.env.SECRET_KEY = 'secret'

instructor.get('/any',async (req,res) => {
    res.send('instructor')
})



module.exports = instructor