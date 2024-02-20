function jamBerjalan() {
   //mendapatkan tanggal sekarang
   let waktu = new Date();

   //mendapatkan waktu jam, menit dan detik
   let jam = waktu.getHours();
   let menit = waktu.getMinutes();
   let detik = waktu.getSeconds();
   let sesi = "AM";

   //mengubah jam 00 menjadi 12
   if (jam == 0) {
      jam = 12;
   }

   if(jam > 12){
      jam = jam - 12;
      sesi = "PM";
   }

   jam = (jam < 10) ? "0" + jam : jam;
   menit = (menit < 10) ? "0" + menit : menit;
   detik = (detik < 10) ? "0" + detik : detik;

   let gabunganWaktu = jam + ":" + menit + ":" + detik;

   //meletakan fungsi gabunganWaktu ke elemen HTML
   document.getElementById("displayClock").textContent = gabunganWaktu;

   setTimeout(jamBerjalan, 1000)
}

jamBerjalan();