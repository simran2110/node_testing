const express = require('express');
var app = express();
app.get('/',(req,res)=>{
  res.status(200).send({
      message : "Hello world!",
      name : "ajay"
  });
})
app.listen(3000);
module.exports.app = app;