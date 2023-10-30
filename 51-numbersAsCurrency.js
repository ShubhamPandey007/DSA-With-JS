// program to format numbers as currency string

// Format Numbers as Currency String Using concatenation

// const number = 1234.5678;

// const result = '$ ' + number.toFixed(2);

// console.log(result);





// Format Numbers as Currency String Using toLocaleString()
const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);