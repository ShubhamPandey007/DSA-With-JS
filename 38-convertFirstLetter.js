//Program to Convert the First Letter of a String into UpperCase

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a string:');

const result = capitalizeFirstLetter(string);


console.log(result);
