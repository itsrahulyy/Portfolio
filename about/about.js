let currentCard = 0;

function showCard(index) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    if (index >= totalCards) currentCard = 0;
    if (index < 0) currentCard = totalCards - 1;

    cards.forEach((card, i) => {
        card.style.transform = `translateX(${(i - currentCard) * 100}%)`;
    });
}

function nextCard() {
    currentCard++;
    showCard(currentCard);
}

function prevCard() {
    currentCard--;
    showCard(currentCard);
}

document.addEventListener('DOMContentLoaded', () => {
    showCard(currentCard);
});
