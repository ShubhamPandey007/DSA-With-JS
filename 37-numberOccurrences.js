//Check the Number of Occurrences of a Character in the String

function countString(str, letter){
    let count = 0;
    for(let i=0; i<str.length; i++){
        //check if the character is at that position

        if(str.charAt(i)=== letter){
            count += 1;
        }
    }
    return count;
}
const prompt = require('prompt-sync')();
const string = prompt('Enter a string:')
const letterToCheck = prompt("Enter a letter to check:")

//passting parameters and calling the function
const result = countString(string, letterToCheck);
console.log(result);