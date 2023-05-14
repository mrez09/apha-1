<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Prosiding;

class ProsidingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $prosiding = [
            [
                'name'          =>  'Pengelolaan Sumber daya Alam Berbasis Pada Kearifan Lokal Masyarakat Adat dan Eksistensinya Dalam Hukum Nasional',
                'slug'          =>  'pengelolaan-sumber-daya-alam-berbasis-pada-kearifan-lokal-masyarakat-adat-dan-eksistensinya-dalam-hukum-nasional', 
                'category'      =>  'Hukum Adat',
                'url'           =>  '',
                'thumbnail'     =>  'prosiding/DsqnGXBp2L0xbc0clOBCVuPMScAKl7MVixmbJ2Lp.png',
                'decription'    =>  '<h3>Abstrak</h3><p>Hubungan antara masyarakat hukum adat dengan sumber daya air diwujudkan sebagai
                hak ulayat. Objek hak ulayat tidak hanya tanah, namun meliputi juga air, tumbuhan-tumbuhan
                dan binatang liar. Hak ulayat secara eksplisit telah diakui keberadaannya dalam Pasal 18B
                ayat (2) UUD 1945 yang menyatakan negara mengakui dan menghormati kesatuan-kesatuan
                masyarakat hukum adat beserta hak-hak tradisional sepanjang masih hidup dan sesuai dengan
                perkembangan masyarakat dan Prinsip Negara Kesatuan Republik Indonesia dan Pasal 4
                huruf j Ketetapan MPR No. IX/MPR/2001 tentang Pembaharuan Agraria dan Pengelolaan
                Sumber Daya Alam bahwa pembaharuan agraria dan pengelolaan sumber daya alam harus
                dilaksanakan sesuai dengan tetap mengakui, mengormati dan melindungi hak masyarakat
                hukum adat dan keragaman budaya bangsa.
                Pelestarian lingkungan, khususnya pelestarian sumber daya air pada dasarnya bertujuan
                mencegah terjadinya penurunan kualitas lingkungan hidup yang terkait sumber air serta
                peningkatan daya dukung lingkungan terhadap kesediaan air terus berlanjut. Hakikat dari
                pengelolaan sebuah kawasan lingkungan hidup mengimplementasikan adanya partisipasi dan
                pelibatan aktif dari masyarakat sekitar sehingga mampu tercapainya tujuan yang utama
                meningkatkan kesejahteraan masyarakat. Melestarikan sumber daya air, pada prinsipnya
                penegakan hukum perlu memberikan kepastian hukum perlindungan dan pengurusan
                lingkungan beserta segala sumber alam yang terdapat di dalamnya. Sumber daya air diurus
                berasaskan asas keseimbangan, kemanfaatan umum, keterpaduan dan keserasian, keadilan,
                kemandirian serta terbuka dan akuntabilitas. Warga masyarakat ikut melindungi dan
                melestarikan sumber daya air dilakukan secara merata ke seluruh lapisan masyarakat, di
                wilayah tanah air sehingga setiap warga negara berhak menikmati hasil secara nyata.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
                'created_at'    =>  '2023-05-01 07:36:51',
            ]
                
        ];
        Prosiding::insert($prosiding);
    }
}
