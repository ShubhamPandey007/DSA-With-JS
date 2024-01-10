// javascript program to append an obj to an array

let array = [1, 2, 3];

let object = {x: 12, y: 44};

const insertObject= (arr, obj) => {
    
    // append object
    arr.push(obj);
    console.log(arr);
}

insertObject(array, object);