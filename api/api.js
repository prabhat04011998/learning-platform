const express = require('express')
const api = express.Router();


const adminapi= require('./admin/adminapi')
const instructorapi=require('./instructor/instructorapi')
const studentapi=require('./student/studentapi')

api.use('/admin',adminapi)
api.use('/instructor',instructorapi)
api.use('/student',studentapi)

module.exports = api
