export let ClickOpen = () => {
 
    for (let index = 0; index < 20; index++) {
        let button = document.getElementById(index); 
        let child = button.lastElementChild;
        
        button.addEventListener('click',function firstclick() {
            child.style.display = 'flex'; 
            button.setAttribute('onclick', true);  
        });
    }; 
};
