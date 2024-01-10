//We can count the number of keys/properties in a JavaScript object using the Object.keys() method.

// Count the Number of Key in an Object Using Object.key()

// const myObject = {
//     neme: 'Roy',
//     age: 34,
//     gender: 'male',
//     hobbies: ['reading', 'games', 'coding'],
//     email: 'james@gmail.com'

// }

// const numberofProperties = Object.keys(myObject).length;

// console.log(" Number of properties :" + numberofProperties);


//2nd-> Count the Number of Key in an Object Using for...in

// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    gender: 'male',
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);
