//Program to Check if the Numbers Have Same Last Digit

const prompt = require("prompt-sync")();
const a = parseInt(prompt("please enter 'a' number:"));
const b = parseInt(prompt("please enteer 'b' number:"));
const c = parseInt(prompt("please enter 'c' number:"));

var res1 = a%10;
var res2 = b%10;
var res3 = c%10;

if (res1 === res2 && res1 === res3){
    console.log(`${a}, ${b}, ${c}, are having the same last digit.`);
}else{
    console.log(`${a}, ${b}, ${c}, are not having the same last digit.`);
}