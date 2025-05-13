---

# Portofolio

Portofolio pribadi berbasis web yang dibangun menggunakan **PHP** dan **MySQL**, serta berjalan secara lokal menggunakan **XAMPP**. Proyek ini menampilkan biodata, gambar, dan informasi kontak dengan struktur folder modular.

## Fitur

- Menampilkan informasi pribadi dan gambar karya
- Terhubung ke database MySQL (menggunakan `koneksi.php`)
- Desain responsif
- Struktur folder rapi dan terpisah

## Struktur Folder

/asset           - Berisi gambar-gambar portofolio /script          - JavaScript tambahan /style.css       - File CSS utama /index.html      - Halaman awal portofolio /get_data.php    - File untuk mengambil data dari database /koneksi.php     - File koneksi ke database (MySQL) /*.php lainnya   - File backend untuk fitur tambahan

## Instalasi dan Menjalankan Proyek

1. Pastikan kamu sudah menginstal [XAMPP](https://www.apachefriends.org/index.html).
2. Clone repositori ini atau download ZIP-nya.
   ```bash
   git clone https://github.com/arizex/portfoliosxdb.git

3. Pindahkan folder proyek ke htdocs:

cp -r portfoliosxdb /opt/lampp/htdocs/   # Untuk Linux (XAMPP di /opt)
# Atau pindahkan manual ke C:\xampp\htdocs di Windows


4. Jalankan Apache dan MySQL di XAMPP.


5. Buat database baru di phpMyAdmin, dan impor file SQL jika tersedia.


6. Buka proyek di browser:

http://localhost/portfoliosxdb



Konfigurasi Database

Edit file koneksi.php sesuai pengaturan lokal XAMPP kamu:

```<?php```
$host = "localhost";
$user = "root";
$pass = "";
$db   = "nama_database_kamu";

$conn = mysqli_connect($host, $user, $pass, $db);
?>

Teknologi yang Digunakan

HTML5, CSS3, JavaScript

PHP

MySQL

XAMPP (untuk menjalankan server lokal)


Lisensi

Proyek ini bebas digunakan untuk pembelajaran atau referensi pribadi.

Penulis :
Aris Ramadhani
[GitHub](https://github.com/arizex)
