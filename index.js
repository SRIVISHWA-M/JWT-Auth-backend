// console.log("Server started!") 
const express = require ('express')
const cookieParser = require ('cookie-parse')
const cors = require ('cors')
const { verify } = require ('jsonwebtoken')
const { Hash, compare } = require ('bcryptjs')
const app = express()
app.use(express.json())
app.get('/',(_req,res) => {
  res.send("you are in Right path")
})

app.listen(1222,() =>{
  console.log("server is going....");
})