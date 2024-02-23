const calculateSum = numbers => {
    
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
};


const numbersArray = [5,10,15,20,25];
const result = calculateSum(numbersArray);

console.log(`The sum of the numbers is: ${result}`);
