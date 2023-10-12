//Program to Display the Multiplication Table


function table (num, range){
    for (let i=  1; i < range; i++){
        result = num * i;
        console.log(`${num} * ${i} = ${result}`);
    }
}
table( 8, 6);
