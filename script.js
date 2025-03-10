// Можна додати функцію для пошуку відео
document.querySelector('.search-bar input').addEventListener('input', function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(function(card) {
        let title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
