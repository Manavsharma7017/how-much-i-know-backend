const jwt =require("jsonwebtoken")
const {passward}=require("../pass/passward")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
const token =req.headers.token;
const jwttoken=token.split(" ");
const finaltoken =jwttoken[1];
  try{
    const decode=jwt.verify(finaltoken,passward);
    if(decode.username){
        next();
    }
    else{
        res.status(403).json({
            msg:"invalid axcess"
        })
    }
  }
  catch(e){
    res.json({
        msg:"not allowed"
    })
  }
  
   
}

module.exports = adminMiddleware;