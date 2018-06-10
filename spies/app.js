var db = require('./db.js');
module.exports.handleSignup=(email , password)=>{
  //check if email exists 
  //save user to database
  db.save({email, password});
// or  
  //db.save({email : email , password : password});

  //send the welcome email
}