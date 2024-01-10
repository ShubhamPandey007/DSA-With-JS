// program to create JavaScript object using object literal

const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
   
    score: {
        maths: 90,
        science: 80
    },
    greet: function() {
        console.log('Hello everyone.');
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);