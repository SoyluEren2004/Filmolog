const stars = document.querySelectorAll('.rate .star');

const ratingResult = document.createElement('div');
document.querySelector('.rate').appendChild(ratingResult);
ratingResult.id = 'rating-result';

let selectedRating = 0;
let ratings = []; 

stars.forEach(star => {
    star.addEventListener('click', () => {

        selectedRating = parseInt(star.getAttribute('data-rate'));
        ratings.push(selectedRating);
        ratingResult.textContent = `Seçilen Oylama: ${selectedRating} Yıldız`;

        updateStars(selectedRating);

        const average = calculateAverage(ratings);
        ratingResult.textContent += ` | Ortalamaya Göre Oylama: ${average.toFixed(2)} Yıldız`;
    });

    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-rate'));
        updateStars(rating);
    });

    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});


function updateStars(rating = 0) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-rate'));
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}


function calculateAverage(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
}
