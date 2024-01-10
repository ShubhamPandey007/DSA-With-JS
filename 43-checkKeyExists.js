// program to check if a key exists 

//Check if Key Exists in Object Using in Operator


// const person = {
//     id: 1,
//     name: 'John',
//     age: 23
// }

// // check if key exists
// const hasKey = 'name' in person;

// if(hasKey) {
//     console.log('The key exists.');
// }
// else {
//     console.log('The key does not exist.');
// }


//Check if Key Exists in Object Using hasOwnProperty()

// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}

//check if key exists
const hasKey = person.hasOwnProperty('name');

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}