const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());

app.get('/todo',(req,res)=>{

    res.send([
        {
            title:"gym1",
            description:"snfi"
        },
        {
            title:"gym2",
            description:"snfi"
        },
        {
            title:"gym3",
            description:"snfi"
        }
    ]);

});

app.listen(3000);