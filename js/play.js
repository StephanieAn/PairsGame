let btnPlay = document.getElementById('btn__start');
export let Play = () => {
    btnPlay.addEventListener('click', () => {
        let buttons = document.querySelectorAll('button');
        console.log(buttons);
    })
}