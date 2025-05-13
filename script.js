// Ambil semua elemen kartu dan elemen info
const cards = document.querySelectorAll('.card');
const info = document.querySelector('.song-info');

// Tambahkan event listener ke setiap kartu
cards.forEach(card => {
  card.addEventListener('click', () => {
    info.textContent = 'Sedang Dilihat: ' + card.textContent;
  });
});

// Tombol Lihat Detail (untuk contoh, hanya alert)
const button = document.getElementById('playPause');
button.addEventListener('click', () => {
  alert(info.textContent);
});