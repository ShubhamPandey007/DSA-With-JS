//JavaScript Program to Split Array into Smaller Chunks

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }
}

splitIntoChunk(array, chunk);



// program to split array into smaller chunks

function splitInto(arr, chunk) {
    
    while(arr.length > 0) {

    let temArray1;
    tempArray1 = arr.splice(0, chunk);
    console.log(tempArray1);

}
}
splitInto(array, chunk);