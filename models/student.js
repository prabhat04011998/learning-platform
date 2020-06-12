 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const StudentSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  email:{
      type:String,
      required:true
  },
  student_name: {
    type: String,
    required: true
  },
  contact:{
      type:String,
      required:false
  }
})


module.exports = Student = mongoose.model('students', StudentSchema)