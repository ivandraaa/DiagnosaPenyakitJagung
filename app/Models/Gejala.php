<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gejala extends Model
{
    use HasFactory;
    protected $table = 'gejala';
    protected $guard = ["id"];
    protected $fillable = ["kode_gejala", "gejala"];

    public function fillTable()
    {
        $gejala2 = [
            [
                "kode_gejala" => "G001",
                "gejala" => "terdapat bercak kecil berbentuk oval pada daun jagung"
            ],
            [
                "kode_gejala" => "G002",
                "gejala" => "terdapat bercak memanjang dan berbentuk ellips"
            ],
            [
                "kode_gejala" => "G003",
                "gejala" => "terdapat bercak berwarna hijau keabu-abuan atau coklat"
            ],
            [
                "kode_gejala" => "G004",
                "gejala" => "bercak memiliki panjang 2.5-15cm "
            ],
            [
                "kode_gejala" => "G005",
                "gejala" => "bercak pertama muncul pada daun yang terbawah dan kemudian berkembang menuju daun bagian atas"
            ],
            [
                "kode_gejala" => "G006",
                "gejala" => "munculnya bercak berwarna agak kemerahan pada pelepah atau bagian pangkal tanaman"
            ],
            [
                "kode_gejala" => "G007",
                "gejala" => "bercak kemerahan tersebut kemudian berubah menjadi abu-abu seiring berkembangnya penyakit"
            ],
            [
                "kode_gejala" => "G008",
                "gejala" => "bercak meluas dan pembentukan sklerotium yang memiliki bentuk tidak beraturan"
            ],
            [
                "kode_gejala" => "G009",
                "gejala" => "penyebaran bercak dari bagian bawah ke atas pelepah"
            ],
            [
                "kode_gejala" => "G010",
                "gejala" => "terdapat serangan pada varietas rentan yang menyerang pucuk tanaman atau tongkol pelepah"
            ],
            [
                "kode_gejala" => "G011",
                "gejala" => "terdapat permukaan daun berwarna putih dengan garis-garis klorotik"
            ],
            [
                "kode_gejala" => "G012",
                "gejala" => "pada pagi hari di sisi bawah daun jagung terdapat lapisan beledu putih yang terdiri dari konidiofor dan konidium jamur"
            ],
            [
                "kode_gejala" => "G013",
                "gejala" => "penyakit ini menyerang tanaman jagung dalam 1-2 minggu setelah infeksi awal"
            ],
            [
                "kode_gejala" => "G014",
                "gejala" => "terdapat warna kuning yang memanjang sejajar tulang daun dengan batas yang jelas antara daun sehat dan terinfeksi"
            ],
            [
                "kode_gejala" => "G015",
                "gejala" => "tanaman jagung mengalami kerdil, daun menggulung, dan bunga jantan berubah menjadi massa daun berlebihan"
            ],
            [
                "kode_gejala" => "G016",
                "gejala" => "bercak-bercak kecil berbentuk bulat sampai oval pada permukaan daun jagung bagian atas dan bawah"
            ],
            [
                "kode_gejala" => "G017",
                "gejala" => "penyakit menyebar melalui angin dan menginfeksi tanaman jagung lain"
            ],
            [
                "kode_gejala" => "G018",
                "gejala" => "penyakit terjadi pada dataran rendah hingga tinggi dan berkembang baik pada musim penghujan atau kemarau"
            ],
            [
                "kode_gejala" => "G019",
                "gejala" => "penyebarannya melalui spora yang terbawa angin dan dapat menjangkiti tanaman jagung di sekitarnya"
            ],
            [
                "kode_gejala" => "G020",
                "gejala" => "terdapat bercak noda kuning kemerahan pada daun, mirip dengan warna besi yang berkarat"
            ],
            [
                "kode_gejala" => "G021",
                "gejala" => "terdapat luka nekrotik kecil berwarna coklat dengan lingkaran kuning klorosis di daun bagian bawah"
            ],
            [
                "kode_gejala" => "G022",
                "gejala" => "terdapat luka memanjang berbentuk persegi empat yang sejajar dengan urat daun"
            ],
            [
                "kode_gejala" => "G023",
                "gejala" => "terdapat bercak daun berwarna hijau kekuningan atau cokelat kemerahan"
            ],
            [
                "kode_gejala" => "G024",
                "gejala" => "bibit jagung yang terkena menjadi layu atau mati dalam 3-4 minggu"
            ],
            [
                "kode_gejala" => "G025",
                "gejala" => "terdapat penularan melalui angin atau percikan air hujan yang menyebabkan infeksi pertama pada tanaman jagung"
            ],           
        ];

        return $gejala2;
    }
}
