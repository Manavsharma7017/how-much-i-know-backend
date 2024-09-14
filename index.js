const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send({
    msg : "2+2=4"
  })
 })

app.listen(port)