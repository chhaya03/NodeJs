const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res) =>{
  res.send('Hello World')
})
app.get('/about' , (req,res) =>{
  res.send('about world!')
})

app.listen(port,() =>{
  console.log(`example app listening at http://localhost:${port}`)
})