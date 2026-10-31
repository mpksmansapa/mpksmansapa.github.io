# Panduan Website MPK SMANSAPA

Website ini menggunakan HTML, CSS, dan JavaScript biasa tanpa instalasi dependency.

## Susunan file

- `index.html`: seluruh isi halaman, nama pengurus, foto, dokumentasi, dan tautan.
- `style.css`: warna, font, jarak, ukuran foto, dan tata letak responsif.
- `script.js`: interaksi menu navigasi dan tahun hak cipta otomatis.
- `assets/`: logo, gambar placeholder, dan foto yang Anda tambahkan.

Tidak ada lagi `MPK_DATA` atau generator kartu. Edit setiap kartu langsung di HTML. Komentar seperti `KEPENGURUSAN INTI` dan `DOKUMENTASI KEGIATAN` menandai bagian halaman.

## Mengubah pengurus

1. Unggah foto ke folder `assets/`, misalnya `ketua.jpg`.
2. Buka `index.html`, cari komentar `Pengurus: Ketua MPK`.
3. Ganti `src="assets/foto-pengurus.svg"` dengan `src="assets/ketua.jpg"` pada kartu itu.
4. Sesuaikan `alt` foto, jabatan dalam `<h3>`, dan nama dalam `<p>`.
5. Edit teks periode pada elemen `id="period"`.

Setiap pengurus memiliki `<article class="person">` sendiri. Salin atau hapus satu blok artikel lengkap untuk menambah atau mengurangi pengurus.

## Mengubah dokumentasi

Cari komentar `Dokumentasi 01`, `02`, atau `03`. Pada kartu yang ingin diisi:

1. Ganti `src` gambar dengan foto Anda, misalnya `assets/kegiatan-01.jpg`.
2. Sesuaikan `alt` agar menjelaskan isi foto.
3. Ganti judul `<h3>` dan keterangan `<p>`.
4. Hapus `<span class="badge">FOTO BELUM DITAMBAHKAN</span>` setelah foto asli dipasang.
5. Tambahkan tanggal jika diperlukan. Contoh:

```html
<time datetime="2026-10-31">31 Oktober 2026</time>
```

Salin satu blok `<article class="event">` lengkap untuk menambah dokumentasi. Gunakan foto yang diizinkan untuk dipublikasikan.

## Memasang tautan Google Form

Cari `id="form-pending"` pada bagian `RUANG ASPIRASI`. Ganti tombol nonaktif tersebut dengan tautan berikut dan isi URL sebenarnya:

```html
<a
  class="button"
  href="TAUTAN_GOOGLE_FORM_ANDA"
  target="_blank"
  rel="noopener noreferrer"
>
  Buka formulir aspirasi ↗
</a>
```

Sesuaikan keterangan di `id="form-note"`, misalnya: “Formulir dibuka di tab baru. Baca keterangan formulir sebelum mengirim.” Pengaturan identitas/anonimitas mengikuti Google Form. Website tidak menyimpan jawaban.

## Tema dan tampilan responsif

Warna pada bagian `:root` di `style.css` mengikuti logo marun–emas. Logo asli berada di `assets/logo-mpk.png`. File yang diberikan berukuran 150 × 150 piksel dan dapat diganti dengan PNG resolusi lebih tinggi pada jalur yang sama.

Aturan `@media` di `style.css` mengatur layout tablet dan ponsel. Navigasi menjadi menu lipat pada layar sampai 1000px. Jika batas ini diubah, sesuaikan juga `matchMedia` di `script.js`.

## Menerbitkan perubahan

Edit file pada branch `main` dan simpan commit. GitHub Pages akan menjalankan build dan deployment. Periksa hasilnya melalui tab Actions. Profil organisasi, nama, periode, foto, serta Google Form tetap perlu diisi sesuai data resmi.
