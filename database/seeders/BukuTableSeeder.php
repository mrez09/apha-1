<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Buku;

class BukuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $buku = [
            [
                'name'          =>  'Kearifan Lokal Masyarakat Hukum Adat Dalam Mewujudkan Kedaulatan Pangan Ditengah Pandemi Covid 19',
                'slug'          =>  'kearifan-lokal-masyarakat-hukum-adat-dalam-mewujudkan-kedaulatan-pangan-ditengah-pandemi-covid-19',
                'harga'          =>  '50000', 
                'category'      =>  'Hukum Adat',
                'url'           =>  '',
                'thumbnail'     =>  'buku/3welAAuGju3fGXLMQRJA1SwuF3vW8AvKKYDGRVtW.png',
                'decription'    =>  '<h3><strong>Kearifan Lokal Masyarakat Hukum Adat Dalam Mewujudkan Kedaulatan Pangan Ditengah Pandemi Covid 19</strong></h3><p>Rp. 80.000</p><figure class="table"><table><tbody><tr><td>Tim Editor</td><td>: Dr. Ning Adiasih, S.H., M.H<br>: Dr. C Woro Murdiati R, S.H., M.Hum<br>: Dr. Rina Yulianti, S.H., M.H</td></tr><tr><td>ISBN</td><td>: 978-623-94988-1-8</td></tr><tr><td>Penerbit</td><td>: Lembaga Studi Hukum Indonesia</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 257 Halaman</td></tr><tr><td>Berat</td><td>: 800gr</td></tr><tr><td>Ukuran</td><td>: 23 cm</td></tr><tr><td>Tahun Terbit</td><td>: 2020</td></tr></tbody></table></figure><p>Buku berjudul “Kearifan Lokal Masyarakat Hukum Adat Dalam Mewujudkan Kedaulatan Pangan Ditengah Pandemi Covid 19” adalah lanjutan dari buku “Melihat Covid 19 Dari Perspektif Hukum Adat”.</p><p>Kearifan lokal masyarakt hukum adat yang berkaitan dengan kedaulatan pangan tersebar diseluruh pelosok Nusantara. Kearifan lokal tersebut adalah Peninggaln dari para leluhur dan merupakan aset bangsa yang muatannya tidak hanya berorientasi pada pemenuhan kebutuhan pangan, tetapi juga memiliki dimensi ramah lingkungan hidup dan keberlanjutan. Namun demikian, kita sangat perihatin, ternyata keragaman kearifan lokal yang luar biasa itu belum sepenuhnya menjadi basis dalam pembuatan peraturan perundang-undangan yang berkaitan dengan kedaulatan pangan baik oleh pembentuk undang-undang maupun pemerintah. Oleh sebab itu, APHA dan pemerintah, agar muatan peraturan perundang-undangan yang berkaitan dengan kedaulatan pangan lebih berbasis pada kearifan lkal yang tersebar diseluruh Nusantara.</p>',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
                'created_at'    =>  '2023-05-01 07:36:51',
            ],
            [
                'name'          =>  'Konsepsi Perlindungan Tanah Masyarakat Adat',
                'slug'          =>  'konsepsi-perlindungan-tanah-masyarakat-adat', 
                'harga'          =>  '50000',
                'category'      =>  'Hukum Adat',
                'url'           =>  '',
                'thumbnail'     =>  'buku/6KE5BiTHLwqjKKpVfVFG1x4IP6KlSyy4KJj8JD14.png',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'decription'   =>  '<h3><strong>Konsepsi Perlindungan Tanah Masyarakat Adat</strong></h3><p><strong>(Studi Pada Masyarakat Sedulur Sikep dan Baduy)</strong></p><p>Rp. 50.000</p><figure class="table"><table><tbody><tr><td>Tim Editor</td><td>: Dr. Laksanto Utomo, S.H., M.Hum</td></tr><tr><td>ISBN</td><td>: 978-602-8659-78-9</td></tr><tr><td>Penerbit</td><td>: Media Kampus Indonesia</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 215 Halaman</td></tr><tr><td>Berat</td><td>: 200gr</td></tr><tr><td>Ukuran</td><td>: 18 cm</td></tr><tr><td>Tahun Terbit</td><td>: 2020</td></tr></tbody></table></figure><p>Pada awal berlakunya UUPA sudah mulai terasa adanya gejala ketimpangan pemilikan dan penguasan tanah. Perbandingan antara ketersediaan tanah sebagai sumber &nbsp;daya alam yang langka di satu sisi, dan pertambahan jumlah penduduk dengan berbagai pemenuhan kebutuhannya akan tanah disisi lain, tidak mudah dicari titik temunya.</p><p>Pertanyaan yang timbul adalah bagaiman sebenarnya makna “untuk sebesar-besarnya kemakmuran rakyat” yang menjadi landasan UUPA itu dipahami dan diterjemahkan secara benar dalam berbagai kebijakan yang mendukung atau relevan dengan bidang pertanahan. Tampaknya pilihan tepat adalah melakukan refleksi terhadap hal0hal yang mendasar daripada sekedar mendata kekurangan peraturan pelaksanaan UUPA yang memang dianggap penting.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  1,
                'created_at'    =>  '2023-05-02 06:55:53',
            ],
            [
                'name'          =>  'Hukum Adat - Teori, Sejarah, Pengakuan Negara, Dan Yurisprudensi',
                'slug'          =>  'hukum-adat-teori-sejarah-pengakuan-negara-dan-yurisprudensi', 
                'harga'          =>  '50000',
                'category'      =>  'Hukum Audit',
                'url'           =>  '',
                'thumbnail'     =>  'buku/24D1lSSQtpJM1q71yxw41jxjN6sw9Q8wX2DrXdjq.png',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'decription'   =>  '<h3><strong>Melihat Covid-19 Dari Perspektif Hukum Adat</strong></h3><p>Rp. 80.000</p><figure class="table"><table><tbody><tr><td>Tim Editor</td><td>: Dr. Jaja Ahmad Jayus, S.H., M.Hum</td></tr><tr><td>ISBN</td><td>: 978-623-231-280-7</td></tr><tr><td>Penerbit</td><td>: PT. Rajagrafindo Persada</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 275 Halaman</td></tr><tr><td>Berat</td><td>: 300gr</td></tr><tr><td>Ukuran</td><td>: 20 cm</td></tr><tr><td>Tahun Terbit</td><td>: Februari 2020</td></tr></tbody></table></figure><p>Buku <i>Hukum Adat: Teori, Sejarah, Pengakuan Negara dan Yurisprudensi </i>ini mencoba menyatukan teori, sejarah, pengakuan negara, dan yurisprudensi putusan pengadilan yang berkaitan dengan hukum adat, Dalam hal pengakuan negara ini, penulis merangkum berbagai peraturan baik dalam amendemen UUD 1945 hingga peraturan atau keputusan kepala daerah yang mengakui hak-hak masyarakat adat.</p><p>Buku ini dimaksudkan untuk menambah pengetahuan dan khazanah tentang hukum adat di Indonesia yang sudah mulai dibahas &nbsp;pada masa pemerintahan Hindia Belanda. Selain itu, Keberadaan buku ini diharapkan akan menjadi referensi kepada mahasiswa dan khalayak umum untuk membahas hukum adat dengan segala ragam kompleksitasnya.</p><p>Buku ini disusun untuk memberikan wawasan dan pengetahuan kepada para pembaca, khususnya para akademisi dan mahasiswa S1 hukum, dan pada umumnya praktisi dan masyarakat Indonesia.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
                'created_at'    =>  '2023-05-05 06:55:53',
            ],
            [
                'name'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat',
                'harga'          =>  '50000', 
                'category'      =>  'Hukum Adat 3',
                'url'           =>  '',
                'thumbnail'     =>  'buku/t1f9HaYo2BTpRC2yMRap2WajhMujLDrJFU2sw86o.png',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'decription'    =>  '<h3><strong>Melihat Covid-19 Dari Perspektif Hukum Adat</strong></h3><p>Rp. 80.000</p><figure class="table"><table><tbody><tr><td>Tim Editor</td><td>: Dr. Laksanto Utomo, S.H., M.Hum</td></tr><tr><td>ISBN</td><td>: 978-602-53077-8-2</td></tr><tr><td>Penerbit</td><td>: Lembaga Studi Hukum Indonesia</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 373 Halaman</td></tr><tr><td>Berat</td><td>: 800gr</td></tr><tr><td>Ukuran</td><td>: 23 cm</td></tr><tr><td>Tahun Terbit</td><td>: Mei 2020</td></tr></tbody></table></figure><p>Ketika pertama kali diumumkan sebagai pandemi global pada 11 Maret 2020 lalu oleh WHO jumlah infeksi diseluruh dunia telah mencapai lebih dari 121.000. Indonesia masih merasa aman dari wabah virus yang sudah melumpuhkan sebagian negara-negar didunia, Presiden Joko Widodo pada awal Maret lalu yang tadinya membuat masyarakat berada di zona nyaman, harus mengakui kekalahan dengan adanya laporan kasus Covid-19 yang disebabkan oleh virus SARS-Cov-2 atau yang lebih dikenal dengan sebutan virus Corona.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
                'created_at'    =>  '2023-05-11 06:55:53'
            ],
            [
                'name'          =>  'Melihat-Covid-19-dari-perspektif-hukum-adat',
                'slug'          =>  'melihat-covid-19-dari-perspektif-hukum-adat',
                'harga'          =>  '50000', 
                'category'      =>  'Umum',
                'url'           =>  '',
                'thumbnail'     =>  'buku/Ai4oItcmfPGy5Mb8mgrYWI1ospBpxwX9FEzNRX7H.png',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'decription'   =>  '<h3><strong>Melihat Covid-19 Dari Perspektif Hukum Adat</strong></h3><p>Rp. 80.000</p><figure class="table"><table><tbody><tr><td>Tim Editor</td><td>: Dr. Laksanto Utomo, S.H., M.Hum</td></tr><tr><td>ISBN</td><td>: 978-602-53077-8-2</td></tr><tr><td>Penerbit</td><td>: Lembaga Studi Hukum Indonesia</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 373 Halaman</td></tr><tr><td>Berat</td><td>: 700gr</td></tr><tr><td>Ukuran</td><td>: 23 cm</td></tr><tr><td>Tahun Terbit</td><td>: Mei 2020</td></tr></tbody></table></figure><p>Penyebaran virus yang tak pernah disangka akan sampai di Indonesia itu hingga kini masih berlanjut. Pusat Pemodelan Matematika dan Simulasi Institut Teknologi Bandung mempekirakan pandemi ini akan mencapai puncakna pada akhir Maret dan berakhir pada pertengahan April 2020. Bahkan dengan kedinamisan data yang ada, prediksi tersebut bisa saja berubah. Data ini tentunya bukan untuk membuuat kepanikan di tengah masyarakat, namun lebih untuk membuat masyarakat waspada dan memberikan gambaran bagi pemerintah dalam penanganannya, yakni pengangan secara kompehensif, khususnya untuk mencegah penyebaran yang lebih luas agar jumlah infeksi dapat ditekan.</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  1,
                'created_at'    =>  '2023-05-12 06:55:53',
            ],
            [
                'name'          =>  'Hukum Adat Bali - Aneka Kasus dan Penyelesaiannya',
                'slug'          =>  'hukum-adat-bali-aneka-kasus-dan-penyelesaiannya',
                'harga'          =>  '50000', 
                'category'      =>  'Hukum-Adat',
                'url'           =>  '',
                'thumbnail'     =>  'news/QJYdeDPP3NDxwwuzpcS8ZBhGpszuBYJPLCM31OGe.png',
                'sinopsis'    =>  '<h3>ini Sinopsis.</p>',
                'decription'   =>  '<h3><strong>Hukum Adat Bali - Aneka Kasus dan Penyelesaiannya</strong></h3><p>Rp. 140.000</p><figure class="table"><table><tbody><tr><td>Penulis</td><td>: Wayan P. Windia</td></tr><tr><td>ISBN</td><td>: 978-602-61325-0-5</td></tr><tr><td>Penerbit</td><td>: Aksara Bali</td></tr><tr><td>Cover</td><td>: Hard Cover</td></tr><tr><td>Halaman</td><td>: 257 Halaman</td></tr><tr><td>Berat</td><td>: 800gr</td></tr><tr><td>Ukuran</td><td>: 23 cm</td></tr><tr><td>Tahun Terbit</td><td>: 2020</td></tr></tbody></table></figure><p>Aneka kasus yang diungkapkan dalam buku :Hukum Adat Bali: Aneka Kasus dan Penyelesainnya", pada dasarnya sudah pernah dipublikasikan lewat minggguan “Prima” (1993 - 1998) dan majalah bulanan "Sarad" (2000 - 2010), dalam bentuk Tanya Jawab.</p><p>Starategi menjawab pertanyaan yang diajukan, dari dulu hingga sekarang masih tetap sama. Pertanyaan yang dijawab terbatas pada pertanyaan yang dimengerti dan diketahui jawabannya, Kalau kasus yang dikemukakan cukup sulit dan pertanyaannya juga susah dimengerti, dipikirkan sejenak dengan santai untuk menemukan jawabannya. Kalau ketemu jawaban, <i>astungkara</i>, pertanyaanya akan dijawab. Kalau tidak, dibiarkan berlalu tanpa jawaban. Kalau kasus dan pertanyaannya yang dikemukakan demikian sulit sehingga tidak mungkin dijawab, tidak pernah dipikirkan dan pasti juga tidak pernah dijawab. Mengecewakan penanya, pastilah. Tetapi cara ini dianggap lebih baik, dibandingkan asal jawab dengan jawaban asal-asalan.&nbsp;</p>',
                'rating'        =>  9.2,
                'is_featured'   =>  1,
                'created_at'    =>  '2023-05-12 08:40:23',
            ]
                
        ];
        Buku::insert($buku);
    }
}
