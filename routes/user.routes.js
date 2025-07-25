const { Router } = require("express")
const userRouter = Router()
const verifyUser = require("../middleware/userMiddleware")
const { getProfile , 
    userSignUp  , 
    userSignIn ,
    purchaseCourse , 
    myCourses 
    } = require("../controllers/user.controller")

userRouter.get("/profile",verifyUser,getProfile)
userRouter.post("/signup",userSignUp)
userRouter.post("/signin",userSignIn)
userRouter.post("/purchase/course",verifyUser,purchaseCourse)
userRouter.get("/my/courses",verifyUser,myCourses)

module.exports = userRouter


