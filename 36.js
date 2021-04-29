async function func() {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(17);
        },1000)
    })
    const result = await promise;
    console.log(result);
    return 1;

}
const result = func();
