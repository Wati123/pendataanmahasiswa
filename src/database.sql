create database penduduk;
use penduduk;
create table ktp(
    nik INT(16) AUTO_INCREMENT PRIMARY KEY,
    nama_lengkap VARCHAR(50),
    jenis_kelamin VARCHAR(25),
    alamat VARCHAR(100),

);