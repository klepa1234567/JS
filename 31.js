
const pinger = (num, period) => {
    let i = num;
    const interval = setInterval(() => {
        if (i-- > 0){
            console.log('Ping');
        } else {
            clearInterval(interval);
        }

    }, period);

    // setTimeout(() => {
    //     console.log('CLEAR');
    //
    // }, num * period);
}
pinger(5, 1000)