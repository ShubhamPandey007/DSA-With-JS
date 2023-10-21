//program to merge property of two objects

const person = {
    name: 'shubham',
    age: 30
}
const student = {
    gender: 'male'
}

//merge two objects
const newperson = Object.assign(person, student);

console.log(newperson);
