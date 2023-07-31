a. **Github Public Repo URL**: https://github.com/IndraW01/mid-term.git

b. **Readme pada Repo**, mencakup:

**i. Jelaskan struktur database Anda**:
Struktur database untuk proyek ini terdiri dari tiga koleksi: VideoThumbnail, Product, dan Comment. Setiap koleksi mewakili data untuk Video Thumbnail List, Product List, dan Comment List, masing-masing.

- **Koleksi VideoThumbnail**:
  - `videoID`: String - ID dari video.
  - `imageUrl`: String - URL gambar thumbnail video.

- **Koleksi Product**:
  - `videoID`: String - ID video yang terkait dengan produk.
  - `productID`: String - ID produk.
  - `link`: String - Tautan ke produk.
  - `title`: String - Judul produk.
  - `price`: String - Harga produk.

- **Koleksi Comment**:
  - `videoID`: String - ID video yang berkaitan dengan komentar.
  - `username`: String - Nama pengguna orang yang mengirimkan komentar.
  - `comment`: String - Teks komentar.
  - `timestamp`: Date - Timestamp ketika komentar dikirimkan (diatur ke tanggal saat ini secara default).

**ii. Jelaskan struktur API Anda**:
API dibangun menggunakan ExpressJS dan terhubung ke database MongoDB menggunakan Mongoose. API ini menyediakan endpoint untuk mengakses dan memanipulasi data untuk Video Thumbnail List, Product List, Comment List, dan Submit Comment.

Route utama API sebagai berikut:

- **GET /video-thumbnails**: Mengambil daftar thumbnail video.

- **GET /products/:videoID**: Mengambil daftar produk untuk video tertentu (diidentifikasi oleh `videoID`).

- **GET /comments/:videoID**: Mengambil daftar komentar untuk video tertentu (diidentifikasi oleh `videoID`).

- **POST /submit-comment**: Mengirimkan komentar baru untuk video.

**iii. Daftar permintaan API dan respons (format Gist)**:
Berikut adalah Gist dengan contoh permintaan dan respons API: [URL Gist]

**iv. Cara menjalankannya secara lokal**:
Untuk menjalankan API secara lokal, ikuti langkah-langkah berikut:

1. Klone repositori:
   ```bash
   git clone [URL Repositori Publik Github Anda]
   cd video_thumbnail_api
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Atur koneksi MongoDB:
   - Pastikan Anda telah menginstal MongoDB dan menjalankannya secara lokal.
   - Modifikasi `DB_URI` di `db.js` untuk sesuaikan dengan URI koneksi MongoDB Anda.

4. Jalankan server:
   ```bash
   node app.js
   ```

5. Server akan berjalan di `http://localhost:3000` (secara default).

6. Sekarang Anda dapat menggunakan alat seperti Postman atau curl untuk menguji endpoint API secara lokal.

