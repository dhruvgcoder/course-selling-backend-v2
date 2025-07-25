const { z } = require("zod")

const userInput = (req,res) => { 
const inputValidation = z.object({
    email : z.string().email().max(100),
    password : z.string().min(8).max(100) ,
    firstName : z.string().min(2).max(100) ,
    lastName : z.string().min(1).max(100)
});

const dataParseWithSuccess = inputValidation.safeParse(req.body)

if(!dataParseWithSuccess.success){
    res.json({
        msg : "Input fields are incorrect",
        error : dataParseWithSuccess.error.issues
        });
    return 
    }
return dataParseWithSuccess.data
};

module.exports = userInput