 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const InstructorSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    instructor_name: {
        type: String,
        required: true
    },
    instructor_description:{
        type:String,
        required:false
    },
    contact:{
        type:String,
        required:false
    },
    isActive:{
        type:Boolean,
        default:false
    }

})


module.exports = Instructor = mongoose.model('Instructors', InstructorSchema)