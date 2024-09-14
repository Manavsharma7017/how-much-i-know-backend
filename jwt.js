const jwt=require("jsonwebtoken");

const username="manav";
const passward="123423412";
const jwtpassward="hihi";

const token =jwt.sign({
    username,
    passward
},jwtpassward);
console.log(token);

const veriy=jwt.verify(token,jwtpassward);
console.log(veriy);
