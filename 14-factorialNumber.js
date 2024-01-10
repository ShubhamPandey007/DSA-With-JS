//Program to Find the Factorial of a Number


function findFactorial(num) {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result = result * i;
      }
      return result;
    }

    console.log(findFactorial(5));
    console.log(findFactorial(7));

