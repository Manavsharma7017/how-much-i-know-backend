const express = require('express')
const app = express();

function check1(req,res,next){
    const kideny=req.query.kidenyid;
    const username=req.headers.username;
    const passward=req.headers.passward;
    if (username != "ma" || passward != "pass") {
        res.status(400).json({"msg":"the following username and passward is not recognise by our backend"});
    }
    else{
        next();
    }
}

function check2(req,res,next){
    const kideny=req.query.kidenyid;
    
    if (kideny != 1 && kideny != 2) {
        res.status(400).json({"msg":"the following number of kidney is not recognise by our backend"});
    }
    else{
        next();
    }
}
//app.use(check2());
//for using a middle ware in every request we use
//app.use(express.json())

app.get("/h",check1,check2,(req,res)=>{
    res.json({
        "msg":"yor are fine",
    });
});
app.get("/k",check2,(req,res)=>{
    res.json({
        "msg":"your kidney is fine",
    });
});

app.listen(3000)