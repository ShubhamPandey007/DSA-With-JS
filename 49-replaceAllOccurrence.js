//JavaScript Program to Replace All Occurrences of a String

const string = 'Mr Red has a red house and a red car';

//regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

//display the result
console.log(newText);