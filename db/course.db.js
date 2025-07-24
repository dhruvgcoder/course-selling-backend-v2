const mongoose = require("mongoose")
const { Schema , model } = mongoose
const ObjectId = Schema.Types.ObjectId

const courseSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String ,
        required : true ,
        trim : true
    },
    price : {
        type : Number ,
        required : true,
        min : 0
    },
    creator : {
        type : ObjectId,
        ref : "Admin",
        required : true
    }
},
{ timestamps:true }
);

const Course = model("Course",courseSchema)
module.exports = Course