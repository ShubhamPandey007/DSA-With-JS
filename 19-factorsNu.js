//factors of a number 

const prompt = require("prompt-sync")();
const number = parseInt(prompt("please enter a number"));
for(let i = 0; i <= number; i++){
    if(number%i == 0){
        console.log(i);
    }
}