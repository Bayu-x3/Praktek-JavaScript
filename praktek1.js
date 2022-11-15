// Program menginput dan memunculkan Nama awal dan Nama Akhir. Menggunakan readline-sync

var readlineSync = require('readline-sync'); // menambahkan package readline-sync
var frs = readlineSync.question('First name: '); // menginput nama awal
var lst = readlineSync.question('Last name: '); //menginput nama akhir
console.log("Namanya adalah " + frs + " " + lst); // Memunculkan hasil inputan menggunakan console.log 
