//Program to Find LCM of two numbers

const number1 = 10;
const number2 = 12;

const twoNumbersLCM = (num1, num2) => {
  let hcf;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }
  let lcm = (num1 * num2) / hcf;
  return lcm;
};

console.log(twoNumbersLCM(number1, number2));