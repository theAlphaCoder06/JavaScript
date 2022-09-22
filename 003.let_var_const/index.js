//Never use var, it was used before ES6(ECMAScript). var might introduce bug in your code
// Preference order
// var<let<const

//var can be updated and redeclard in its scope, unlike var

let a = 45;
var b = "shubham";
var c = null;
var d = undefined;
{
  var b = "this";
  console.log(b);
  let a = "that";
  console.log(a);
}
console.log(b);
console.log(a);

//As usual, const can't be redeclared and changed neither assignement
//const must be initialized while declaring

const author = "Shubham";
console.log(author);