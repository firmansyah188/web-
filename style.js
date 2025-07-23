// JavaScript untuk fungsionalitas menu mobile

// 1. Dapatkan elemen tombol menu dan elemen menu mobile dari HTML
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// 2. Tambahkan 'event listener' untuk mendeteksi klik pada tombol
mobileMenuButton.addEventListener('click', () => {
    // 3. Ketika tombol diklik, toggle (tampilkan/sembunyikan) class 'hidden' pada elemen menu
    mobileMenu.classList.toggle('hidden');
});
