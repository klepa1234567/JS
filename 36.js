const successRequest = Promise.resolve({name: 'Tom'});
successRequest
    .then(data => {
        console.log(data);
        throw new Error('Unexpected')
    })
    .catch(err => {
        console.error(err.message);
    });
const  failedRequest = Promise.reject(new Error('Fail'));
failedRequest
    .then(data => {
        console.log(data);
    })
    .catch(err => {
       console.log(err.message)
        throw err;
    })
    .then(data => {
        console.log(data)
    });
window.addEventListener('unhandledrejection', function (e) {
    console.log(e.reason.message);
})