const express = require("express")
const app = express()
const connectDB = require("./db/db")
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

app.get('/',function(req,res){
    res.send("API is running..")
})

startServer();

