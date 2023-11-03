//JavaScript Program to Display Date and Time

const date = new Date(2023, 11, 2, 7, 36, 34);
console.log(date);

// The six numbers in new Date() specify year, month, day, hour, minute, second respectively.

// display the date and time

const dates = new Date(2023, 11, 2, 7, 36, 34);

//get the date as a string
const n = date.toDateString();

//get the time as a string
const time = date.toLocaleTimeString();

//display date
console.log('Date:' + n);

//display time
console.log('Time:' +time);
