// There are 7 primitive data type in JS
// Null
// Number
// Symbol
// String
// Boolean
// Bigint
// Undefined

let a = null;
let b = 345;
let c = true;
let d =BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined; //let g both are same
console.log(a, b, c, d, e, f);
console.log(typeof f);

//Objects -> key value pairs -> non-primitive data types

const item = {
  "Kriti" : true,
  "Shubham" : false,
  "Ankit" : 67
}

console.log(item["Shubham"]);
console.log(item["dsl;jas"]);