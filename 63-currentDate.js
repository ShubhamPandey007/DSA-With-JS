// Program to display the date and local time

const date = new Date();

//get thee date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

//display date
console.log('Date: ' + n);

//display time
console.log('Time: ' + time);