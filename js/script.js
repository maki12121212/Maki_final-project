// Memeriksa apakah pengguna telah memilih dark mode sebelumnya
const isDarkMode = localStorage.getItem('darkMode');

// Fungsi untuk mengaktifkan dark mode
function enableDarkMode() {
  // Tambahkan kelas 'dark-mode' ke elemen <body>
  document.body.classList.add('dark-mode');
  
  // Simpan preferensi dark mode pada penyimpanan lokal
  localStorage.setItem('darkMode', true);
}

// Fungsi untuk menonaktifkan dark mode
function disableDarkMode() {
  // Hapus kelas 'dark-mode' dari elemen <body>
  document.body.classList.remove('dark-mode');
  
  // Hapus preferensi dark mode dari penyimpanan lokal
  localStorage.removeItem('darkMode');
}

// Cek status dark mode saat halaman dimuat
if (isDarkMode) {
  enableDarkMode();
}

// Togle dark mode ketika tombol di klik
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
// Mendeteksi perubahan ukuran layar
window.addEventListener('resize', function() {
  // Tambahkan logika atau aksi yang ingin dilakukan saat ukuran layar berubah
  // Contoh: mengubah tampilan, mengatur ulang tata letak, memuat ulang konten, dll.
});

// Mendeteksi perubahan orientasi perangkat
window.addEventListener('orientationchange', function() {
  // Tambahkan logika atau aksi yang ingin dilakukan saat orientasi perangkat berubah
  // Contoh: mengubah tampilan, mengatur ulang tata letak, memuat ulang konten, dll.
});


  
