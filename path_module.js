// the argument that we give to this require function node asssumes that it is a built in function.
// if no built in module, node looks for relative path like "./path"
const path = require('path')  // object with bunch of methods

var pathObj = path.parse(__filename);
console.log(pathObj);

// use async methods in real time; as they are non blocking
const fs = require('fs');
// var files = fs.readdirSync('./');
// console.log(files);

// all async methods take a function as their last arg
// node calls this function when async op completes
// this is call back fn
fs.readdir('./', function(err, files){  // only one of these two (err or files/result) is going to have value
  if(err) console.log("erroe: " + err);
  else console.log("result: "+ files);
})