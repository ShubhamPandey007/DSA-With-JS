//Program to Reverse a String

const prompt = require("prompt-sync")();
const string = prompt("Enter a string:");

function reverseString(str){
    let newString = "";
    for (let i=str.length-1;i>=0;i--){
        newString += str[i];
    }
    return newString;
}

const result = reverseString(string);
console.log(result);