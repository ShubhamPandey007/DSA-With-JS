//Program to Print All Prime Numbers in an Interval

const prompt = require('prompt-sync')();
const lowerNumber = parseInt(prompt('Enter lower number :'));
const higherNumber = parseInt(prompt('Enter the higher number :'));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} area.`);

//looping from lowerNumber to higherNumber
for(let i= lowerNumber; i <= higherNumber; i++){
    let flag = 0;

    //looping through 2 to user input number
    for(let j = 2; j <i; j++){
        if (i% j == 0){
            flag = 1;
            break;
        }
    }
    //if number greater than 1 and not ddivisible by other numbers
    if(i > 1 && flag == 0){
        console.log(i);
    }
}