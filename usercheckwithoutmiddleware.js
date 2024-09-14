const express = require('express')
const app = express();
  

app.get("/",function(req,res){
    const kideny=req.query.kidenyid;
   const username=req.headers.username;
   const passward=req.headers.passward;
    if (username != "ma" || passward != "pass") {
        res.status(400).json({"msg":"you are dead"});
        console.log("1");
      return
    }
   else if (kideny != 1 && kideny != 2) {
    res.status(400).json({
        "msg":"you are dead",
    });
    console.log("2");
    return
   }
   res.status(200).send("you are good");
console.log("3");
});
app.listen(3000)