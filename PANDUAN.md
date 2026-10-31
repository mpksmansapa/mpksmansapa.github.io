# Panduan Website MPK SMANSAPA

Website statis HTML/CSS/JavaScript. Tidak membutuhkan instalasi dependency. Draf berada pada branch `website-mpk-draft`; `index.html` di root kompatibel dengan GitHub Pages.

## Tema dan aset

Tema merah marun, emas, putih, dan aksen gelap mengikuti logo yang diberikan. Logo asli disimpan di `assets/logo-mpk.png` dan digunakan pada header, beranda, footer, serta favicon. Gambar yang diberikan berukuran 150 × 150 piksel; Anda dapat menggantinya dengan PNG beresolusi lebih tinggi pada jalur yang sama.

Tersedia empat tempat foto pengurus dan tiga tempat dokumentasi. Ini adalah placeholder, bukan foto atau kegiatan nyata:

- `assets/foto-pengurus.svg`: tempat foto pengurus.
- `assets/dokumentasi.svg`: tempat foto kegiatan.

## Menambah nama dan foto pengurus

1. Unggah foto ke folder `assets/`, misalnya `ketua.jpg`, `wakil.jpg`, `sekretaris.jpg`, dan `bendahara.jpg`.
2. Buka `index.html` dan cari `const MPK_DATA` di bagian bawah.
3. Isi `name` dan ganti `photo` pada masing-masing anggota. Contoh bentuk data:

```js
{role: 'Ketua MPK', name: 'NAMA PENGURUS', photo: 'assets/ketua.jpg'}
```

Sesuaikan jumlah anggota dan jabatan pada daftar `members` dengan struktur sebenarnya. Isi `period` dengan periode kepengurusan. Jika nama belum diisi, website menampilkan “Nama belum dicantumkan”.

## Menambah dokumentasi kegiatan

1. Unggah foto, misalnya `assets/kegiatan-01.jpg`.
2. Ubah salah satu entri `activities` menjadi data kegiatan sebenarnya:

```js
{
  title: 'NAMA KEGIATAN',
  date: '2026-10-31',
  description: 'KETERANGAN KEGIATAN',
  photo: 'assets/kegiatan-01.jpg',
  alt: 'DESKRIPSI ISI FOTO',
  placeholder: false
}
```

Tanggal menggunakan YYYY-MM-DD. `placeholder: false` menghilangkan label “FOTO BELUM DITAMBAHKAN”. Tambahkan atau hapus entri untuk mengubah jumlah kartu. Gunakan foto yang diizinkan untuk dipublikasikan. Jika foto gagal dimuat, website menampilkan keterangan foto belum tersedia.

## Mengaktifkan Google Form

Isi `aspirationFormUrl` dengan tautan HTTPS resmi dari `forms.gle` atau `docs.google.com/forms/`. Tombol tetap nonaktif jika tautan kosong atau tidak valid. Identitas/anonimitas dan persyaratan login mengikuti pengaturan Google Form. Website tidak menyimpan jawaban.

## Menyesuaikan profil dan menerbitkan

Edit teks pada bagian `#tentang` sesuai profil/tugas MPK resmi sekolah. Susunan jabatan dan profil awal masih perlu disesuaikan. Hapus label draf setelah konten siap.

Tinjau `index.html` di browser, kemudian gabungkan pull request ke `main` bila ingin mengganti website utama. Di Settings → Pages, pastikan sumber publikasi sesuai (misalnya Deploy from a branch → main → /root). Penggabungan tidak otomatis mengaktifkan Pages yang belum dikonfigurasi.

## Pemeriksaan

Sintaks JavaScript, tampilan desktop, pemuatan logo dan placeholder, navigasi, FAQ, dan tombol formulir kosong diperiksa. CSS memiliki breakpoint ponsel; perangkat seluler nyata dan URL Google Form aktual belum diuji. Data pengurus, kegiatan, dan tautan formulir belum diisi. Referensi EXO dan Instagram belum berhasil dibaca saat pembuatan draf.
