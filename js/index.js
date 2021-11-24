const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard)return;
    if(this === firstCard) return false;

    this.classList.add('flip');
    this.lastElementChild.style.display = 'flex'; 
    
    if(!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return;
    };

    secondCard = this;
    checkForMatch(); 
};

function checkForMatch(){
    let isMatch = firstCard.dataset.alt === secondCard.dataset.alt;
    isMatch ? disableEvent() : unFlip();
};

let disableEvent = () =>{
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    resetBoard();
}

let unFlip = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.lastElementChild.style.display = 'none'; 
        secondCard.classList.remove('flip');
        secondCard.lastElementChild.style.display = 'none'; 
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let random = Math.floor(Math.random()*19);
        card.style.order = random;
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard));