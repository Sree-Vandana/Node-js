console.log(__filename);
console.log(__dirname);
// add module other part is module.js

function add(a, b){
  return a+b;
}

// second function
function sub(a, b){
  return a-b;
}

// it is better to mention module.add or else we cannot use add_m.add we need to use add_m(a, b)
// so for easyness mention module.exports.<function_name> = function_name
module.exports.add = add;   // or exports.add = add; (shorthand)

module.exports.sub = sub;   // exports.sub = sub

// another way to export 
/*
exports.add = function add(a, b){
  return a+b;
}
*/