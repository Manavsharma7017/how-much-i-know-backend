const express = require('express')
const app = express();

app.use(express.json());
const users=[{
    name:"manav",
    kideny:[{
        healthy:false,
    }]

}]
app.get("/",function(req,res){
    const health=users[0].kideny;
    const noofk=health.length;
    let noofhk=0;
    for(let i=0;i<noofk;i++){
        if(users[0].kideny[i].healthy){
            noofhk++;
        }
    }
    const noofuk=noofk-noofhk;
    
    res.json({
       noofk,
       noofhk,
       noofuk,
    })
})
app.post("/",function(req,res){
   const ishealthy=req.body.ishealthy;
   users[0].kideny.push({
     healthy: ishealthy,
   })
   res.json({
    msg: "done"
   })
  
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kideny.length;i++){
        users[0].kideny[i].healthy=true;
    }
    res.json();
})
app.delete("/",function(req,res){

    const newk=[];
    for(let i=0;i<users[0].kideny.length;i++){
        if(users[0].kideny[i].healthy){
            newk.push({
                healthy:true,
            })
        }
    }
    users[0].kideny=newk;
    res.json({
        msg:"done"
    })
    //how to send a status code 
    // res.sendStatus(411).json({
    //     msg:"nfszjgfhio")}
    
})
app.listen(3000)