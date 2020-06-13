 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    instructor_id:{
        type:String,
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    course_details:{
        type:String,
        required:false
    },
    data:[]
})

module.exports = Course = mongoose.model('Courses', courseSchema)