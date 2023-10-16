//JavaScript Program to Guess a Random Number

const prompt = require('prompt-sync')();
const number = parseInt(prompt('Guess a number from 1 to 10:'));

function guessNumber(){


const random = Math.floor(Math.random() * 10) + 1;

while (number !== random){
    number = parseInt(prompt('Guess a number from 1 to 10:'));
}
if(number == random){
    console.log('youk guessed the correct number.');
}
}
guessNumber();
