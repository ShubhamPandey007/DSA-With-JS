// program to add element to an array
// const array = [1, 2, 3];

// function addElement(arr) {

//     // adding new array element
//     arr.unshift(4);
//     arr.push(6);
//     arr.shift();
    
//     console.log(arr);
// }

// calling the function
// passing array argument
// addElement(array);

//Add Element to Array Using splice()

// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);

