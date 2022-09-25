let a = prompt("Hey whats your age: ");
console.log(typeof a); 
a = Number.parseInt(a); //typecasting - string to int
console.log(typeof a);

if(a<9){
  console.log("Choti bachi ho kya!");
}

// Ternery Operator

console.log("You", (a<18?"can't drive.":"can drive."));