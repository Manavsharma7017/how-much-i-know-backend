const jwt =require("jsonwebtoken")
const {passward}=require("../pass/passward")

function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = userMiddleware;