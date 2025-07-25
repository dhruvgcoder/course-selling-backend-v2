const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyUser = function(req,res,next){
const token = req.headers.token
try {
const decoded = jwt.verify(token , process.env.JWT_SECRET)
    if(decoded){
        req.userId = decoded.id
     };
    next();
}catch(err){
    console.error("Invalid token",err.message)
    }
};

module.exports = verifyUser