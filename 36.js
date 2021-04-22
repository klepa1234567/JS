const getRandomNumber = (from, to) =>
    from + Math.random() * (to - from);

const request = url => new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000,3000);
     setTimeout(() => {
         resolve({
             userData: {
                 name:'Tom',
                 age:17,
             },
             source: url
         });
     }, randomDelay) ;
});

const server =[
    'https:us',
    'https:es',
    'https:as',
];

const getUserASAP = userId => {
    const userUrls = server
        .map(serverUrl => `${serverUrl}/users/${userId}`);
    const  requestw = userUrls
        .map(userUrl  => request(userUrl));
    return Promise.race(requestw);
};
getUserASAP('user-id-1')
    .then(res => console.log(res));