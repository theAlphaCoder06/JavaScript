const marks = {
  shubham: 43,
  naman: 100,
  kriti: 200,
  ankit: 0
}

for(let i=0; i<Object.keys(marks).length; i++){
  console.log("The mark of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}

// Using for in loop
for(let key in marks){
  console.log("The mark of " + key + " is " + marks[key]);
}


let cn = 4;
let i;
while(i != cn){
  console.log("Try again")
  i = prompt("Enter a number");
}
console.log("You have entered a correct number.")

