// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const add = (numOne, numTwo = 0) => numOne + numTwo;
const result = add(10);
console.log(result);