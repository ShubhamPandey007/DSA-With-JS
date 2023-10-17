//Program to Sort Words in Alphabetical Order


// JS Program to sort words in alphabetical order
const prompt = require('prompt-sync')();
const sentence = prompt('Enter a sentence:');

// converting to an array
let words = sentence.split(' ');

// sort the array elements
words.sort();

console.log('The sorted words are:');

for (let element of words) 
  console.log(element);
