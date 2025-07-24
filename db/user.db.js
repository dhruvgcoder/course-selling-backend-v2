const mongoose = require("mongoose")
const { Schema , model } = mongoose
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
    firstName : { 
        type : String ,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true ,
        unique : true ,
        trim : true

      },
    password : {
        type : String ,
        required : true ,
        trim : true
    },
    watchHistory : [{
        courseId :{ 
        type : ObjectId, 
        ref : 'Course'  
        }
    }],
    watchProgress : [{
    courseId : {
        type : ObjectId ,
        ref : 'Course' 
    },
    progressBar : {
        type : Number,
        min : 0,
        max : 100
    }
}]
} , 
{timestamps : true});

const User = model('User',userSchema);
module.exports = User