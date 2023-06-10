let a = 30;
console.log(a);

//Arithmetic Operators

const num = 18;
const num2 = 30;
//addition +
console.log(num+num2);
console.log(num-num2);
console.log(num/num2);
console.log(num*num2);
console.log(num%num2);

let age =30;
age++;
console.log(age);
age--;
console.log( "age",age);
age+=5;
console.log("newAge",age);

let powerNum = num**num2;
console.log(powerNum);

var b=10;
var c="10"
let comparison =b ==c;
let notEqual = b!=c;
console.log("comparison",comparison);
console.log("notEqual",notEqual);
let strictly =b ===c;
console.log("strictly",strictly);
let strictlyNot =b !== c;
console.log({strictlyNot})

//logical Operators
const age1=25;
const age2=38;

if(age1>age2 || num > num2){
    console.log(true)

}
else{
    console.log(false)
}