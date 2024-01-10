//Find the largest number among three numbers

const prompt = require ('prompt-sync')()
let num1 = parseInt(prompt("Enter the first value :"));
let num2 = parseInt(prompt("Enter the second value :"));
let num3 = parseInt(prompt("Enter the third value"));
// let num1 =12;
// let num2 =22;
// let num3 =15;
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
    // console.log(num1 + "is the largest")
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    // console.log(num2 + "is the largest")

}
else {
    largest = num3;
    // console.log(num3 + "is the largest")
}

console.log("The largest number is " + largest);