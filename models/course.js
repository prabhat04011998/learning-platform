 
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
    modules:[{
        module_name:String,
        created_at:Date,
        data:[]
    }],
    category:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    course_image:{
        type:String,
        required:false
    },
    banner_image:{
        type:String,
        required:false
    },
    course_advertisement:{
        type:String,
        required:false
    },
    tags:{
        type:[],
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    updated_on:{
        type:Date,
        required:false
    },
    course_feedback:{
        type:String,
        required:false
    },
    students:{
        type:[]
    }
})

module.exports = Course = mongoose.model('Courses', courseSchema)

