//Program to Find the Factors of a Number

const prompt = require('prompt-sync')();
const num = prompt('Enter a positive number:');

console.log(`The factor of ${num} is :`);

//looping through 1 to num
for (let i = 1; i <= num; i++){
    if(num % i == 0){
        console.log(i);
    }
}