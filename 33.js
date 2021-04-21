const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken'){
            setTimeout(() => {
                reject(new Error('User not'));
            }, 1000);
        }else {
            setTimeout(() => {
                resolve({
                    name: 'Jon',
                    age: 17,
                    email: `${userId}`,
                    userId
                });
            }, 1000);
        }
    });
    return request;
};
requestUserData('broken')
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    })
    .then(data => 4)
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));