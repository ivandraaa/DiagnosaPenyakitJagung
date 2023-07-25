<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;
    protected $fillable = ["isi", "judul", "kode_penyakit", "id_gambar", "url_gambar"];

    public function penyakit()
    {
        return $this->belongsTo(TingkatPenyakit::class, 'kode_penyakit', 'kode_penyakit');
    }

    public function fillTabel()
    {
        $artikel = [
            [
                "kode_penyakit" => "P001",
                "url_gambar" => 'https://i0.wp.com/www.kampustani.com/wp-content/uploads/2022/03/penyakit-pada-tanaman-jagung-5.jpg?resize=2480%2C1267&ssl=1',
                "judul" => 'Hawar Daun',
                "isi" => 'Penyakit hawar daun adalah suatu penyakit tanaman pada jagung yang disebabkan oleh infeksi cendawan patogen yang bernama Bipolaris maydis (sebelumnya dikenal sebagai Helminthosporium maydis). Gejala awal terinfeksi adalah munculnya bercak-bercak kecil berbentuk oval pada daun tanaman jagung. Kemudian, bercak tersebut akan memanjang dan berbentuk ellips, dan akhirnya berkembang menjadi nekrotik yang disebut hawar. Nekrosis ini biasanya berwarna hijau keabu-abuan atau coklat. Penyakit hawar daun dapat menyebabkan kerusakan serius pada tanaman jagung, terutama jika infeksi berat terjadi. Bercak-barcak hawar akan berkembang dari daun yang terbawah menuju daun bagian atas, dan jika tidak dikendalikan dengan baik, tanaman jagung dapat cepat mati atau mengering akibat penyakit ini. Pencegahan dan pengendalian hawar daun pada tanaman jagung melibatkan beberapa langkah. Berikut adalah beberapa tindakan yang dapat diambil:

                Pengendalian penyakit ini dapat dilakukan dengan cara memusnahkan seluruh bagian tanaman yang  terserang  sampai  ke akarnya  (Eradikasi  tanaman).  Secara kimiawi menggunakan fungisida dengan bahan aktif mankozeb dan dithiocarbamate. Dosis/konsentrasi sesuai dengan petunjuk pada kemasan.'
            ],
            [
                "kode_penyakit" => "P002",
                "url_gambar" => 'https://i0.wp.com/www.kampustani.com/wp-content/uploads/2022/03/penyakit-pada-tanaman-jagung-7.jpg?resize=2386%2C1267&ssl=1',
                "judul" => 'Busuk Pelepah',
                "isi" => 'Penyakit busuk pelepah, disebabkan oleh jamur Rhizoctonia solani, merupakan suatu kondisi patogenik yang dapat menyerang berbagai jenis tanaman. Rhizoctonia solani adalah jamur tanah yang menyebabkan pembusukan pada jaringan tanaman, terutama di bagian pelepah atau pangkal tanaman. Penyakit ini dapat menyebabkan kerugian ekonomi yang signifikan dalam pertanian dan hortikultura karena tanaman yang terinfeksi menjadi lemah dan berpotensi mati. Pencegahan dan pengendalian busuk pelepah pada tanaman jagung melibatkan beberapa langkah. 
                
                Berikut adalah beberapa tindakan yang dapat diambil adalah:

                Dengan menjaga kelembaban areal pertanaman, yaitu dengan pengaturan jarak tanam tidak terlalu rapat dan pengaturan drainase air agar tidak terjadi genangan. Pergiliran tanaman dengan tanaman bukan sefamili. Pengendalian kimiawi dengan menggunakan fungisida berbahan aktif mankozeb dan karbendazim. Dosis/konsentrasi sesuai dengan petunjuk pada kemasan.'
            ],
            [
                "kode_penyakit" => "P003",
                "url_gambar" => 'https://i0.wp.com/www.kampustani.com/wp-content/uploads/2022/03/penyakit-pada-tanaman-jagung-4.jpg?resize=2480%2C1267&ssl=1',
                "judul" => 'Bulai',
                "isi" => 'Penyakit ini menjadi momok menakutkan di kalangan petani jagung, karena dampaknya yang mengharuskan petani untuk membongkar tanaman jagungnya sebelum dapat panen. Penyakit bulai merupakan penyakit utama pada tanaman jagung yang disebabkan oleh jamur Peronosclerospora Maydis. Perkembangan penyakit ini dimulai dengan infeksi konidia (spora jamur) yang jatuh di permukaan daun jagung. Konidia tersebut kemudian berkembang dan masuk ke dalam jaringan tanaman muda melalui stomata dan selanjutnya berkembang hingga ke titik tumbuh tanaman. Infeksi jamur ini bisa dilihat cukup jelas pada pagi hari antara pukul 04.00-05.30, dimana pada daun yang terinfeksi akan terlihat spora jamur berbentuk butiran berwarna putih. 
                
                Pencegahan dan pengendalian penyakit Bulai pada tanaman jagung yaitu:

                Penanaman jagung secara serempak, pemusnahan seluruh bagian tanaman terserang sampai ke akarnya (Eradikasi  tanaman). Pengendalian kimiawi  dapat dilakukan dengan cara perlakuan  benih  menggunakan fungisida berbahan  aktif metalaksil  dengan  dosis  2 gram (0,7 g bahan aktif) per kg benih. Selain itu penyemprotan tanaman pada umur 5, 10, dan 15 hari menggunakan fungisida berbahan aktif metalaksil, famoksadon, atau benomil. Dosis/konsentrasi sesuai dengan petunjuk pada kemasan.'
            ],
            [
                "kode_penyakit" => "P004",
                "url_gambar" => 'https://i0.wp.com/www.kampustani.com/wp-content/uploads/2022/03/penyakit-pada-tanaman-jagung-2.jpg?resize=2480%2C1267&ssl=1',
                "judul" => 'Karat Daun',
                "isi" => 'Penyakit karat daun pada jagung berpotensi  mengganggu kestabilan produksi jagung. Penyakit ini disebabkan oleh cendawan Puccinia polysora dan Puccinia sorghil. Penyakit karat ini termasuk endemis dan seringkali menjadi  penyebab utama  rendahnya produksi jagung. Oleh karena itu sifat ketahanan terhadap penyakit karat daun menjadi salah satu persyaratan untuk membudidayakan tanaman ini. Penyakit ini menginfeksi jagung pada fase pertumbuhan generatif hingga masa panen terutama  pada daun tanaman. Jika tingkat serangannya berat maka infeksi  mencapai seludang daun dan tongkol. Kehilangan hasil akibat penyakit ini antara 45% hingga 70% tergantung intensitas serangan dan dukungan faktor cuaca ekstrim. 
                
                Untuk mengendalikan penyakit Karat Daun pada tanaman jagung, beberapa langkah pencegahan dan pengendalian yang dapat dilakukan antara lain:

                Dengan cara pemusnahan seluruh bagian tanaman terserang sampai ke  akarnya (Eradikasi tanaman). Pengendalian  kimiawi dapat dilakukan dengan aplikasi fungisida berbahan aktif benomil, metil tiofanat,    karbendazim, atau difenokonazole dengan dosis/konsentrasi sesuai dengan petunjuk pada kemasan.'
            ],
            [
                "kode_penyakit" => "P005",
                "url_gambar" => 'https://i0.wp.com/www.kampustani.com/wp-content/uploads/2022/03/penyakit-pada-tanaman-jagung-3.jpg?resize=2480%2C1267&ssl=1',
                "judul" => 'Bercak Daun',
                "isi" => 'Penyakit Bercak Daun adalah penyakit yang menyerang tanaman jagung dan disebabkan oleh jamur Bipolaris maydis. Penyakit ini ditandai dengan adanya bercak pada daun tanaman jagung yang berukuran bervariasi, dari kecil hingga lebih besar, dengan warna awal yang cenderung hijau atau klorotik dan kemudian berubah menjadi coklat kemerahan. Terdapat dua tipe bercak daun, yaitu ras O dan T, dengan ras T memiliki tingkat bahaya yang lebih tinggi dan dapat menyebabkan kerusakan serius pada tanaman jagung, bahkan menyebabkan tanaman layu dan mati. Bercak daun ini dapat menyebabkan penurunan hasil panen. 
                
                Untuk mengendalikan penyakit Bercak Daun pada brokoli, beberapa langkah pencegahan dan pengendalian yang dapat dilakukan antara lain:

                Dengan cara pemusnahan seluruh bagian tanaman terserang  sampai  ke  akarnya  (Eradikasi  tanaman).  Pengendalian kimiawi  dapat  dilakukan  dengan aplikasi  fungisida berbahan  aktif benomil,  metil tiofanat, karbendazim, atau difenokonazole dengan dosis/konsentrasi sesuai dengan petunjuk pada kemasan.'
            ],
        ];
        return $artikel;
    }
}
