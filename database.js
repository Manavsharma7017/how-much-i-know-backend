//mongo db
const mongoose=require("mongoose");
const express = require("express");
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://manav:Manav%400603@cluster0.svddq7z.mongodb.net/userappnew")
const manav=mongoose.model('manav',{name:String,
    email:String,
    passward:String});
//without http
const newuser=new manav({name:"mana",
email:"manonomfmf",
passward:"12345"}
);
newuser.save()

//with http
app.post('/',(req,res)=>{
    const username=req.body.name;
    const useremail=req.body.email;
    const userpassward=req.body.passward;
    const emailexist=users.findOne({email:useremail});
    if(emailexist){
        return res.send("email already exist")
    }
    const newuser=new users({name:username,
    email:useremail,
    passward:userpassward}
    );
    newuser.save()
    res.json({
        msg:"login s"
    })
})
app.listen(3000);

