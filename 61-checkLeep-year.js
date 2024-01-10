//JavaScript Program to Check Leap Year

//using if else

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const prompt = require('prompt-sync')();
const year = prompt('Enter a year:');

checkLeapYear(year);



//using newDate()

function checkleapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if(leap) {
        console.log(year + ' is a leap year');
    }else {
        console.log(year + ' is not a leap year');
    }
}
checkleapYear(year);

