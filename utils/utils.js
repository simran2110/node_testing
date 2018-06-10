// module.exports.add = (a,b) =>{
//   return a + b;
// }
module.exports.asyncAdd = (a,b,res) =>{
  setTimeout(()=>{
    res(a+b);
  },1000);
}

module.exports.add = (a,b) => a+b;

module.exports.square =(x) => x*x;
// https://mochajs.org/

// npm i mocha@3.0.0 --save-dev
// this will install mocha only for development purpose . emans if we put our code on heroku on that it will not get installed.
