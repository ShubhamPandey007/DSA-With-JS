//Program to Calculate the Area of a Triangle

const prompt = require('prompt-sync')();
const baseValue = parseInt(prompt('Enter the base of a triangle :'));
const heightValue = parseInt(prompt('Enter the height of a triangle :'));

//calculate the area 
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`);
