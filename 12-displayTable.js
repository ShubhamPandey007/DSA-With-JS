//Program to Display the Multiplication Table

const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a number :'));
 
//creating a multiplication table
for (let i = 0; i <= 10; i++){

    //multiply i with number
    const result = i * number;
    
    console.log(`${number} * ${i} = ${result}`);
}