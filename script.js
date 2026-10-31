// Interaksi menu navigasi. Isi halaman diedit langsung di index.html.
const menuButton = document.querySelector('.menu');
const navigation = document.getElementById('navigasi');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Tutup menu jika pengguna berpindah ukuran layar.
const compactNavigation = window.matchMedia('(max-width: 1000px)');
compactNavigation.addEventListener('change', closeMenu);

// Tutup menu saat mengetuk area di luar header.
document.addEventListener('click', (event) => {
  if (
    menuButton.getAttribute('aria-expanded') === 'true' &&
    !event.target.closest('header')
  ) {
    closeMenu();
  }
});

// Tombol Escape menutup menu dan mengembalikan fokus ke tombol Menu.
document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    menuButton.getAttribute('aria-expanded') === 'true'
  ) {
    closeMenu();
    menuButton.focus();
  }
});

// Perbarui tahun hak cipta secara otomatis.
document.getElementById('year').textContent = new Date().getFullYear();
