// JavaScript to illustrate startsWith() method

function func() {
 
    // Original string
    let str = 'It is a great day.';
 
    // Checking the condition
    let value = str.startsWith('It');
    console.log(value);
}
func();


//program to check if a string starts with another string


const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)){
    console.log('The string strats with "he" .');
}
else {
    console.log('The string does not starts with "he" ');
}