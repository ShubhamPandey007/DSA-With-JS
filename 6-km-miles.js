//Program to Convert Kilometers to Miles

const prompt = require("prompt-sync")()
const kilometers = parseInt(prompt("Enter the kilometers value :"));

const factor = 0.621371;  //1km is equal to 0.621371 miles.
const miles = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${miles}`);