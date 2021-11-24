export let ClickOpen = () => {
    for (let index = 0; index < 18; index++) {
        let button = document.getElementById(index); 
        let child = button.lastElementChild;
        
        button.addEventListener('click',(firstClick, secondClick) => {
            child.style.display = 'flex'; 
            button.setAttribute('onclick', true); 
            firstClick = this;
            secondClick = this;
            console.log(`This is the first click: ${firstClick.lastElementChild.alt}`);
            console.log(`This is the second click: ${secondClick}`);
        });
        button.addEventListener('dblclick', () => {
            child.style.display = 'none';
            button.setAttribute('onclick', false);
        }); 
    }; 
};
