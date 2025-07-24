const mongoose = require("mongoose")
const { Schema , model } = mongoose
const ObjectId = Schema.Types.ObjectId

const adminSchema = new Schema({
   firstName : {
        type : String,
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
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    courseCreated : [{
         type : ObjectId,
        ref : 'Course'
        }]

}, {timestamps : true});

const Admin = model("Admin",adminSchema)
module.exports = Admin
