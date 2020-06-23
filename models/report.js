 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ReportSchema = new Schema({
  instructor_id:{
      type:String,
      required:true
  },
  student_id:{
    type:String,
    required:true
  },
  course_id:{
    type:String,
    required:true
  },
  purchase_date:{
    type:Date,
    required:true
  },
  report_date:{
    type:Date,
    required:true
  }
})


module.exports = Report = mongoose.model('reports', ReportSchema)