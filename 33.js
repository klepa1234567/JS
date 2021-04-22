const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value)
        resolve(value);
    }, delay);
});
const asynvNum1 = getValueWithDelay(56,1000);
const asynvNum2 = getValueWithDelay(undefined,2000);
const asynvNum3 = getValueWithDelay(10,2000);

// const getSum = numbers =>
//     numbers.reduce((acc, num) => acc + num, 0);
const asyncSum = (...asyncNumbers) => {
    return  Promise.allSettled(asyncNumbers)
        .then(numbers => console.log(numbers))
};
asyncSum(asynvNum1,Promise.reject(new Error('err')),asynvNum3)
    .then(result => console.log(result))