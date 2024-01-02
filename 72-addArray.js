// program to add element to an array
const array = [1, 2, 3];

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    arr.push(6);
    arr.shift();
    
    console.log(arr);
}

// calling the function
// passing array argument
addElement(array);