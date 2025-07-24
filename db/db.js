const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
async function connectDB (){

try {
const dbConnect = await mongoose.connect(process.env.DB_URL);
const connectionState = dbConnect.connection.readyState
const statusCode = {
    0 : "connected",
    1 : "disconnected",
    2 : "connecting",
    3 : "disconnecting"
    }
const statusNow = statusCode[connectionState] || "unknown"
console.log("DB Status : " ,statusNow);
return statusNow;
}
catch(err){
    throw err;
}
};

module.exports = connectDB
