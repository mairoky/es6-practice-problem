/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/
const numbers = [5, 6, 7, 8, 9];
const average = (numbers) => {
    let sum = 0;
    let average = 0;
    const arrLength = numbers.length;
    for (const number of numbers) {
        const squared = Math.pow(number, 2);
        sum = sum + squared;
    }
    average = sum / arrLength;
    return average.toFixed(2);
}
console.log(average(numbers));

