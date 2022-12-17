const numbers = [1, 2, 3, 4, 5,];

const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
} 

console.log(numbersDouble);