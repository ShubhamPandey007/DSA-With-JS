//Program to Count the Number of Vowels in a String


// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count =  str.match(/[aeiou]/gi).length;


    // return number of vowels
    return count;
}

// take input
const prompt = require("prompt-sync")();
const string = prompt("Enter a string:")

const result = countVowel(string);

console.log(result);