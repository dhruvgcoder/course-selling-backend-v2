const express = require("express")
const app = express()

const connectDB = require("./db/db")
const userRouter = require("./routes/user.routes")
// const {adminRouter} = require("./routes/admin.routes")
// const {courseRouter} = require("./routes/course.routes")

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 3000;

app.use(express.json()) 

async function startServer(){
try {
const status = await connectDB();
console.log("DB Connection Status : ",status)

if(status === "connected"){
    app.listen(PORT,function(){
        console.log("Server is listening on PORT : ",PORT)
    });
}
else{
    console.error("Server Crashed - Unable to connect backend" )
    process.exit(1);
        }
    }catch(err){
        console.log(err.message)
    }
};

app.use("/user",userRouter);
// app.use("/admin",adminRouter);
// app.use("/course",courseRouter);

app.get('/',function(req,res){
    res.send("Health Check : API is running..")
})

startServer();

