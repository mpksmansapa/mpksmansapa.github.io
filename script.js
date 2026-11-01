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

// MODE TERANG / GELAP
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.title = isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#181316' : '#650c25';
}

applyTheme(root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
themeToggle.hidden = false;

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.themePreference = 'manual';
  applyTheme(nextTheme);

  try {
    localStorage.setItem('mpk-theme', nextTheme);
  } catch {
    // Jika penyimpanan diblokir, pilihan tetap berlaku selama halaman ini dibuka.
  }
});

// Ikuti perubahan tema perangkat selama pengunjung belum memilih tema sendiri.
systemTheme.addEventListener('change', (event) => {
  if (root.dataset.themePreference === 'system') {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});
