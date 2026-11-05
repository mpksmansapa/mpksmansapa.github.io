# Panduan Website MPK SMANSAPA

Website ini menggunakan HTML, CSS, dan JavaScript biasa tanpa instalasi dependency.

## Susunan file

- `index.html`: isi halaman utama, nama pengurus, foto, dokumentasi, dan tautan.
- `style.css`: warna, font, jarak, ukuran foto, dan tata letak responsif.
- `script.js`: interaksi menu navigasi dan tahun hak cipta otomatis.
- `assets/`: logo, gambar placeholder, dan foto yang Anda tambahkan.

Tidak ada lagi `MPK_DATA` atau generator kartu. Edit setiap kartu langsung di HTML. Komentar seperti `KEPENGURUSAN INTI` dan `DOKUMENTASI KEGIATAN` menandai bagian halaman.

## Mengubah pengurus

1. Unggah foto ke folder `assets/`, misalnya `ketua.jpg`.
2. Buka `index.html`, cari komentar `Kepengurusan Inti: Ketua`.
3. Ganti `src="assets/foto-pengurus.svg"` dengan `src="assets/ketua.jpg"` pada kartu itu.
4. Sesuaikan `alt` foto, jabatan dalam `<h4>`, dan nama dalam `<p>`.
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

Warna pada bagian `:root` di `style.css` mengikuti logo marun–emas. Logo asli berada di `assets/logo-mpk.png`. Logo telah diperbarui menggunakan gambar resolusi lebih tinggi dengan latar transparan.

Aturan `@media` di `style.css` mengatur layout tablet dan ponsel. Navigasi menjadi menu lipat pada layar sampai 1100px. Jika batas ini diubah, sesuaikan juga `matchMedia` di `script.js`.

## Menerbitkan perubahan

Edit file pada branch `main` dan simpan commit. GitHub Pages akan menjalankan build dan deployment. Periksa hasilnya melalui tab Actions. Profil organisasi, nama, periode, foto, serta Google Form tetap perlu diisi sesuai data resmi.

## Arsip kepengurusan

Tautan di samping judul Kepengurusan Inti membuka `arsip-kepengurusan.html`.
Halaman ini menggunakan `style.css`, `theme.js`, dan `script.js` yang sama dengan halaman utama.

1. Ganti “Periode belum dicantumkan” dengan tahun kepengurusan sebenarnya.
2. Isi nama dan ganti foto pada masing-masing dari sepuluh kartu jabatan: enam pengurus inti serta Ketua dan Wakil untuk Komisi 1 dan Komisi 2.
3. Sesuaikan keterangan “Data pengurus pada periode ini belum dilengkapi.”
4. Untuk periode tambahan, salin seluruh `<section class="section tinted" ...>` sampai penutupnya sebelum komentar `AKHIR PERIODE ARSIP`.
5. Pada bagian salinan, ubah `archive-period-1`, `archive-inti-1`, `archive-komisi-1-period-1`, dan `archive-komisi-2-period-1` menjadi ID unik (misalnya berakhiran `-2`), termasuk nilai `aria-labelledby` yang merujuknya.

Semua data tetap diedit langsung satu per satu di HTML.

## Pendiri website

Buka `pendiri.html`, lalu cari komentar `PENDIRI 1` dan `PENDIRI 2`.
Ganti `src` foto dengan jalur foto di folder `assets/`, sesuaikan `alt`,
isi nama pada `<h3>`, dan keterangan pada `<p>`.
Kedua kartu tetap berdampingan pada layar HP.

Tautan “Pendiri Website” tersedia pada navbar halaman utama, arsip, dan pendiri.
Jika mengganti nama file halaman, sesuaikan tautannya di ketiga file HTML.
