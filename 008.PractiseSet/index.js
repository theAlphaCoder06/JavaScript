let age = prompt("What's your age ")
if(age<10 && age<20){
  console.log("Your age lies between 10 and 20");
}
else{
  console.log("Your age doesn't lies between 10 and 20");
}



let  number = prompt("Enter any number")
let a = Number.parseInt(number);
switch(a){
  case 12:
    console.log("The number you entered is 12")
    break;

  case 13:
    console.log("The number you entered is 13")
    break;

  default:
    console.log("Uh! Some random number")
}