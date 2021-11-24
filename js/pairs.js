let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export let Pairs = () => {
    console.log(y.length);
    for (let index = 0; index < 18; index++) {
        let x = Math.floor(Math.random() * y.length);
        let butt = window.frames[index]; 
        let lastChildX = butt.lastElementChild;
        let lastChildY = window.frames[x].lastElementChild;
        console.log(typeof lastChildX.alt);
        
        butt.addEventListener('click', () => {
            if(lastChildX.alt === lastChildY.alt){
                console.log(`${lastChildX.alt}`)
            }
        });
    };
};