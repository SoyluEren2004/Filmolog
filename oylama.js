// Yıldızları seç
const stars = document.querySelectorAll('.rate .star');

// Oylama sonucunu gösterecek alan
const ratingResult = document.createElement('div');
document.querySelector('.rate').appendChild(ratingResult);
ratingResult.id = 'rating-result';

// Oylama sayıları ve toplam puan
let selectedRating = 0;
let ratings = []; // Girilen oylar

// Yıldızlara tıklama olayını ekle
stars.forEach(star => {
    star.addEventListener('click', () => {
        // Seçilen yıldızın değerini al
        selectedRating = parseInt(star.getAttribute('data-rate'));
        ratings.push(selectedRating); // Oyu kaydet
        ratingResult.textContent = `Seçilen Oylama: ${selectedRating} Yıldız`;

        // Yıldızları güncelle
        updateStars(selectedRating);

        // Oylama ortalamasını hesapla
        const average = calculateAverage(ratings);
        ratingResult.textContent += ` | Ortalamaya Göre Oylama: ${average.toFixed(2)} Yıldız`;
    });

    // Yıldızın üzerine gelme (hover) olayını ekle
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-rate'));
        updateStars(rating);
    });

    // Yıldızdan ayrılma (mouseout) olayını ekle
    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});

// Yıldızları güncelleyen fonksiyon
function updateStars(rating = 0) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-rate'));
        if (starValue <= rating) {
            star.classList.add('selected');  // Seçilen yıldızlar altın olacak
        } else {
            star.classList.remove('selected');
        }
    });
}

// Ortalama hesaplayan fonksiyon
function calculateAverage(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0); // Oylamaları toplar
    return total / ratings.length; // Ortalama hesaplar
}
