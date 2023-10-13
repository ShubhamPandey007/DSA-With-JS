//Program to Check if the Numbers Have Same Last Digit

const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter a first integer:"));
const b = parseInt(prompt("Enter a second integer :"));
const c = parseInt(prompt("Enter a third integer:"));

//find the last integer
const res1 = a % 10;
const res2 = b % 10;
const res3 = c % 10;

//compare the last digits
if(res1 === res2 && res1 === res3){
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}else{
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}
