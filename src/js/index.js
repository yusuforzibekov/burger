document.addEventListener("DOMContentLoaded", () => {
    setupVideoUnmuteButton();
    sortFoods();
});

function setupVideoUnmuteButton() {
    const video = document.getElementById("bg-video");
    const unmuteBtn = document.getElementById("unmute-btn");

    unmuteBtn.style.display = "block";

    unmuteBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            unmuteBtn.textContent = "🔊";
        } else {
            video.muted = true;
            unmuteBtn.textContent = "🔇";
        }
    });
}

function sortFoods() {
    const foodLinks = document.querySelectorAll('.food__link');
    const foodCards = document.querySelectorAll('.food__card');

    foodLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const category = link.getAttribute('data-type');

            foodCards.forEach(card => {
                const cardType = card.getAttribute('data-type');

                if (category == 'All' || cardType === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}