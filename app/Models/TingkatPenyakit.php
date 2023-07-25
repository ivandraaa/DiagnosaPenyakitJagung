<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TingkatPenyakit extends Model
{
    use HasFactory;
    protected $table = 'tingkat_penyakit';
    protected $guard = ["id"];
    protected $fillable = ['kode_penyakit', 'penyakit'];

    public function fillTable()
    {
        $penyakit = [
            [
                "kode_penyakit" => "P001",
                "penyakit" => "Hawar Daun"
            ],
            [
                "kode_penyakit" => "P002",
                "penyakit" => "Busuk Pelepah"
            ],
            [
                "kode_penyakit" => "P003",
                "penyakit" => "Bulai"
            ],
            [
                "kode_penyakit" => "P004",
                "penyakit" => "Karat Daun"
            ],
            [
                "kode_penyakit" => "P005",
                "penyakit" => "Bercak Daun"
            ],
        ];
        return $penyakit;
    }
}
