const express = require('express')
const z=require("zod");
const app = express()
const schema=z.array(z.number());
app.use(express.json());

app.post("/",(req,res)=>{
    //kidneyid=[1,2]
    const kidneyid = req.body.kidneyid;
  
    const response=schema.safeParse(kidneyid);
    if(!response.success){
        res.send("wrong input");
    }
    else{
        res.send(response);
    }
});
app.listen(3000)