//JavaScript Program to Compare Two Strings

const prompt = require('prompt-sync')();
const string1 = prompt('Enter first string to compare:');
const string2 = prompt('Enter second string to compare:');

//compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();
if(result) {
    console.log('The string are similar.');
}else {
    console.log('The string are not similar.');

}