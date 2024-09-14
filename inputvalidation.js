const express = require('express')
const app = express();
app.use(express.json());
// global chach
//in case of an error we use global chach when ever there is an error it get called
app.use((err,req,res,next)=>{
  res.json({
    msg:"something went wrong"
  })
});
app.post("/",(req,res)=>{
    //kidneyid=[1,2]
    
    const kidneyid = req.body.kidneyid;
    const kidneylength=kidneyid.length;

   res.send("your kidney is "+ kidneylength);
});
app.listen(3000)

