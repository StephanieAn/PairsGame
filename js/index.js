const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
    this.lastElementChild.style.display = 'flex'; 
}

cards.forEach(card => card.addEventListener('click', flipCard));