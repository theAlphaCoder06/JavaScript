const { lookup } = require("dns");


let n = prompt("Enter the value of n ")
let sum = 0;
for(let i = 1; i<=n; i++){
  sum += i;
}
console.log(sum);

// For In Loop

let obj = {
  satyam: 90,
  ankit: 30,
  naman: 100,
  cp: 70
}

for(let a in obj){
  console.log("Marks of a", a, "are", obj[a])
}

// For Of Loop(works only when loop is iterable)
for(let b of "Shubham"){
  console.log(b);
}