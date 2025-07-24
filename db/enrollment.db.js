const mongoose = require("mongoose")
const { Schema , model } = mongoose
const ObjectId = Schema.Types.ObjectId

const enrollmentSchema = new Schema({
    course :{
        type : ObjectId,
        ref : "Course",
        required : true
    },
    user : {
        type : ObjectId ,
        ref : "User",
        required : true
    },
    orderId : {
        type : String,
        required : function (){
            return this.paymentStatus !=="free"  
        }  
    },
    paymentMethod : {
        type : String,
        enum : ["upi","debit_card","credit_card"],
        required : function () {
            return  this.paymentStatus !=="free"
        } 
    },
    paymentStatus : {
        type : String,
        enum : ["success","pending","cancelled","free"],
        default : "pending"
    },
    price : {
        type : Number ,
        default : 19.99,
        min : 0 
    },
    purchaseDate : {
        type : Date,
        default : Date.now
    },
    isActive : {
        type : String,
        enum : ["active","cancelled","refunded","expired"],
        default : "active"
    }
},
{ timestamps : true }
);

enrollmentSchema.index({
    user : 1 ,  
    course : 1
},
{unique : true } 
);   

enrollmentSchema.index({
    paymentStatus : 1,
    orderId : 1
});

const Enrollment = model("Enrollment",enrollmentSchema)
module.exports = Enrollment