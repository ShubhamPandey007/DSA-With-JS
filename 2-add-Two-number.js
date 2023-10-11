//Program to Add Two Numbers

// const num1 =50;
// const num2 =40;

// const sum = num1 + num2;
// console.log(sum);


//method2

// function  addition (a,b){
//     return a+b;
// };
// let num1 = 20;
// let num2 = 30;
// console.log(addition(num1,num2));


//method 3

function add2() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        }
        return sum;
       }
       console.log(add2(1, 2));

