const User  = require("../db/user.db")
const userInput  = require("./inputValidation")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const verifyJWT = process.env.JWT_SECRET

const getProfile = function(req,res){

};

const userSignUp = async function(req,res){
const validateInput = userInput(req,res);
// if(!validateInput) return;
const { 
    firstName , 
    lastName ,
    email ,
    password ,       
    } = validateInput

const duplicateCheck = await User.findOne({ email });
    if(duplicateCheck){
        return res.json({
            msg : "Email Already Registered , Please Login"
    });
    
}
const hashedPassword = await bcrypt.hash(password,12)
const userData = await User.create({
    firstName ,
    lastName ,
    email ,
    password : hashedPassword
    });
res.status(200).json({
    msg : "User Signed Up Successfully",
    data : userData
    });
};

const userSignIn = async function(req,res){

const { email , password } = req.body
const checkUser = await User.findOne({ email })
if(!checkUser){
    res.status(404).json({
        msg : "User does not exist"
    })
}
const checkPassword = await bcrypt.compare(password , checkUser.password)
if(checkPassword){
    const token = jwt.sign({
        id : checkUser._id.toString()
    }, verifyJWT)
    return res.json({
        msg : token,
        signinStaus : "Success"
    });
}else{
    res.json({
        msg : "Invalid Credentials",
        signinStatus : "Error"
        });
    }
};
const purchaseCourse = function(req,res){

};
const myCourses = function(req,res){

};

module.exports = { 
    getProfile , 
    userSignUp  , 
    userSignIn ,
    purchaseCourse , 
    myCourses 
    }