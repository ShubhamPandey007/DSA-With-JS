//Program to Clone a JS Object

//declaring object
const person = {
    name: 'sun',
    age: 34,
}

//clonning the object 
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

//changing the value of cloneperson 
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);