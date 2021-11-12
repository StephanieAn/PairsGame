export function Click(){
    const btn = document.querySelectorAll('button');
    // console.log(typeof btn);
    // console.log(btn);

    btn.forEach(button => {
        let random ='card'+ Math.round(Math.random() * 50);
        let attribute = button.setAttribute('id',random);
        return attribute;
    });

    let btnID = btn[1].id;
    const button = document.getElementById(btnID);

    button.addEventListener('click', () => {
        document.querySelector('#img').style.display = 'flex';
    });
};