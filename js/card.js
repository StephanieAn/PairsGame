export function Click(){

    for (let index = 0; index < 20; index++) {
        let button = document.getElementById(index); 
        let child = button.lastElementChild;
        
        button.addEventListener('click', () => {
            child.style.display = 'flex';            
        }) ;
    };
    
};