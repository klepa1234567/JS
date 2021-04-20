const addImageWithPromise = imgSrc => {
    const p = new Promise((resolveCb, rejectCb) =>{
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            const {width, height} = imgElem;
            resolveCb({width, height});
        };
        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => rejectCb(new Error()))
    });
    return p;
};
const imgSrc = 'https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg'
const result = addImageWithPromise(imgSrc)
console.log(result);