//Program to Swap Two Variables values

//take input value from the user
const prompt=require('prompt-sync')()
let a =parseInt(prompt("Enter the first value: "));
let b = parseInt(prompt('Enter the second value: '));

// let a= 8;  //take value dircet
// let b= 6;
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

