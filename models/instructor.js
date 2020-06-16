 
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
    },
    socialmedia_profiles:{
        instagram:String,
        facebook:String,
        linkedin:String,
        twitter:String
    },
    profile_image:{
        type:String,
        required:false
    }

})

InstructorSchema.methods.toggleActive = async function(input){
    const instructor = this
    if(input == 1){
        instructor.isActive=true
    }else{
        instructor.isActive=false
    }
    instructor.save()
}


module.exports = Instructor = mongoose.model('Instructors', InstructorSchema)
