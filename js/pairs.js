export let Pairs = () => {
    for (let index = 0; index < 18; index++) {
        let butt = document.getElementById(index); 
        let lastChild = butt.lastElementChild;
        console.log(typeof lastChild.alt);
        
        butt.addEventListener('click', () => {
            console.log(lastChild.alt);
        })
    };
};