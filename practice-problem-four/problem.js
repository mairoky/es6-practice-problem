/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/
const numbersOne = [12, 15, 32, 42, 50];
const numbersTwo = [9, 61, 25, 84, 63, 88];
const maxNumber = (arrOne, arrTwo) => {
    const newArray = [...arrOne, ...arrTwo];
    const max = Math.max(...newArray);
    return max;
}
console.log(maxNumber(numbersOne, numbersTwo));