const verifyUser = function(req,res ,next){
    console.log( "Test Middleware Reached")
    next();
};

module.exports = verifyUser

