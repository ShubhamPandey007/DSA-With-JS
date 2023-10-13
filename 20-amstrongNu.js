//Program to Check Armstrong Number

const prompt = require ("prompt-sync")();
const number = parseInt(prompt("Enter a number:"));

var temp = number;
var noOfDigits = number.toString().length;
var sum = 0;
while(temp>0){
    
    var digit = temp % 10;
    sum += digit**noOfDigits;
    temp = parseInt(temp/10);
}
if(sum == number){
    console.log(`${number} is an armstrong number`);
}else{
    console.log(`${number} is not an armstrong number`);
}