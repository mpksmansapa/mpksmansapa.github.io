// Terapkan tema sebelum CSS dirender untuk menghindari kilatan tema yang salah.
(() => {
  const root = document.documentElement;
  let preference = null;

  // Penyimpanan dapat diblokir browser; tema tetap bisa digunakan tanpa penyimpanan.
  try {
    preference = localStorage.getItem('mpk-theme');
  } catch {
    preference = null;
  }

  const hasSavedTheme = preference === 'light' || preference === 'dark';
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  root.dataset.theme = hasSavedTheme ? preference : (systemIsDark ? 'dark' : 'light');
  root.dataset.themePreference = hasSavedTheme ? 'manual' : 'system';
})();
