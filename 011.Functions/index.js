// Syntax
/*
function name_of_function(parameters){
  code
}
*/

function avg(a,b,c){
  return Math.round(a+b+c)/2;
}
console.log(avg(1,2,4));

// Arrow function - Preferable(modern J)

const sum = (p,q)=>{
    return p + q;
}
console.log(sum(2,3));