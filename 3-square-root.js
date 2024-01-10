//Program to Find the Square Root of given Number

const prompt = require ("prompt-sync")()
let num = parseInt (prompt ("Enter  the number : "))
// let num = 9;
function squareRoot (num){
    squareRoot = num * num;
    return squareRoot;
}
a = squareRoot (num);
console.log(`the square root of ${num} is ${a}`);