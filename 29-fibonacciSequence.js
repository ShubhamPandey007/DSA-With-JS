//Program to Display Fibonacci Sequence Using Recursion

// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// for(var i=0; i<=5; i++){
//     var temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }


function fibonacciSequence(num) {
    // n = how many sequence of numbers
    if (num < 2) {
      return num;
    } else {
      return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
    }
  }
  const n = 5;
  if (n <= 0) {
    console.log("Enter the positive number");
  } else {
    for (let i = 0; i < n; i++) {
      console.log(fibonacciSequence(i));
    }
  }
  
  fibonacciSequence(5);




