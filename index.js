const express = require("express");
const dotenv = require("dotenv").config({path: "./.env"})
const bodyParser = require('body-parser');
const router=require('./src/router')
//Error Handling
if (dotenv.error) {
  throw dotenv.error;
}
const app = new express();
app.use(bodyParser.json({extended:true,limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb",parameterLimit:50000}))
app.use("/",router)
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
