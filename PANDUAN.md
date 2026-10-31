# Panduan Website MPK SMANSAPA

Draf statis HTML/CSS/JavaScript tanpa instalasi dependency. `index.html` berada di root agar kompatibel dengan GitHub Pages. Branch draf: `website-mpk-draft`.

## Data yang perlu dikonfirmasi

- Nama lengkap sekolah, logo resmi, warna identitas, dan profil/tugas MPK sesuai ketentuan sekolah.
- Periode, susunan pengurus inti, nama, dan foto yang diizinkan untuk dipublikasikan.
- Foto dokumentasi beserta nama kegiatan, tanggal, deskripsi, dan teks alternatif.
- Tautan Google Form resmi. Pengaturan anonim/login mengikuti formulir, bukan website.

Biru tua dan emas serta monogram M/MPK adalah usulan visual sementara, bukan logo atau identitas resmi. Profil dan empat jabatan merupakan rancangan awal. Jangan menerbitkan nama/foto contoh sebagai data nyata.

## Mengubah konten

Buka `index.html`, cari `const MPK_DATA` di bagian bawah. Isi `period`, `aspirationFormUrl`, `members`, dan `activities`. Semua nilai awal sengaja kosong. Contoh bentuk data (ganti dengan data terverifikasi):

```js
const MPK_DATA = {
  period: 'ISI PERIODE RESMI',
  aspirationFormUrl: '',
  members: [
    {role: 'Ketua MPK', name: 'ISI NAMA RESMI', photo: 'assets/ketua.jpg'}
  ],
  activities: [
    {title: 'ISI NAMA KEGIATAN', date: '2026-10-31', description: 'ISI DESKRIPSI', photo: 'assets/kegiatan.jpg', alt: 'ISI DESKRIPSI FOTO'}
  ]
};
```

Unggah foto ke folder `assets/`. Tanggal menggunakan YYYY-MM-DD. Sesuaikan daftar jabatan dengan struktur sebenarnya. Tautan formulir diterima jika HTTPS pada `forms.gle` atau `docs.google.com/forms/`. Jika kosong/tidak valid, tombol tetap nonaktif.

Untuk profil, ganti teks pada bagian `#tentang`. Warna berada di `:root` pada CSS. Ganti monogram header dan ilustrasi hero dengan logo resmi bila tersedia. Hapus label draf hanya setelah konten disahkan.

## Meninjau dan menerbitkan

Buka `index.html` di browser untuk peninjauan lokal. Draf belum mengganti `main`. Setelah disetujui dan data dilengkapi, gabungkan PR ke `main`. Di Settings → Pages, pastikan sumber publikasi sesuai (misalnya Deploy from a branch → main → /root). Penggabungan tidak otomatis mengaktifkan Pages jika belum dikonfigurasi.

## Pemeriksaan awal

Sintaks JavaScript, tampilan desktop, navigasi anchor, FAQ, dan status tombol formulir kosong sudah diperiksa. CSS mencakup breakpoint ponsel; pemeriksaan perangkat seluler nyata, foto aktual, dan tautan formulir aktual masih perlu dilakukan setelah materi tersedia. Referensi EXO dan Instagram belum berhasil dibaca saat pembuatan draf, sehingga desain belum diklaim mengikuti branding resminya.
