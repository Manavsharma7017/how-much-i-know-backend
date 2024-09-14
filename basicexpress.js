const express = require('express')
const app = express()
function calcuatesum(n){
    let ans=0;
    for(let i=0;i,i<=n;i++){
        ans+=i;
    }
    return ans;
}
app.get("/",function(req,res){//there is also a next callback function 
     const n=req.query.n;
     const ans =calcuatesum(n);
     res.send(ans.toString());
})
app.listen(3000)


//ctrl +c to stop a server
