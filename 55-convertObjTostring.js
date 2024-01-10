//JavaScript Program to Convert Objects to Strings

//convert object to string Using JSON.stringify()

const person = {
    name: 'jack',
    age: 27
}

const result = JSON.stringify(person);
console.log(result);
console.log(typeof result);

//Convert Object to String Using String()

const person1 = {
    name: 'rocky',
    age: 29
}
const result1 = String(person1);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);
console.log(typeof result1);