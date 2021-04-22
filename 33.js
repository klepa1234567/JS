const asyncCalculator = num => (
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`Inital value: ${num}`);
            resolve(num);
        },500);
    })

)
    .then(value => {
    const pr = new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 500)
    });
    return pr;
})
    .then(value => {
        const result = value * 2;
        console.log(`Doubled value: ${result}`);
        return result;
    });

asyncCalculator(4)
    .then(value => console.log(value));