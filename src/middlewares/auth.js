const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const validateToken = function(req,res,next){
    let token = req.headers["x-Auth-Token"];
    if(!token) {
        token = req.headers["x-auth-token"];
               }
    if(!token){
        return res.send({status: false, msg:"token must be present"});
              }
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if(!decodedToken) {
        return res.send({status: false, msg:"token is invalid"});
                      }
     next()
}

const authoriseToken = async function(req,res,next){
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
     next()
}

module.exports.validateToken = validateToken
module.exports.authoriseToken = authoriseToken