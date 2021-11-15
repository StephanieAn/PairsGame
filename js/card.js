let queryString = location.search.substring(1);
console.log(queryString);

const btn = document.querySelectorAll('button');

export function Click(){
        
    btn.forEach(button => {
        let random ='card'+ Math.round(Math.random() * 50);
        let attribute = button.setAttribute('id',random);
        console.log(attribute);
    });
    
    const button = window.document.getElementById(queryString);

    button.addEventListener('click', () => {
        document.querySelector('#img').style.display = 'flex';
    });
};