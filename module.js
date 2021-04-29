// this function is out add module.
// to make it act as a module we can add this function in different file and call it here.

/*
function add(a, b){
  return a+b;
}
*/

var add_m = require('./add_module');  // if we dont stiore this in a var, the scope will be onlyto this line and we cannot use it anywhere in this file.

var result = add_m.add(4, 5);
console.log("the output is "+ result);
console.log(add_m.sub(1, 2));