//JavaScript Program to Check Whether a String Contains a Substring

// take input

const prompt = require('prompt-sync')();
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check: ');

// check if string contains a substring
// if(str.includes(checkString)) {
//     console.log(`The string contains ${checkString}`);
// } else {
//     console.log(`The string does not contain ${checkString}`);
// }


//second method to check 


if(str.indexOf(checkString) !== -1) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}