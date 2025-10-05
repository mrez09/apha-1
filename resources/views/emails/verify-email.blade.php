<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Verifikasi Email Anggota</title>
</head>
<body style="font-family: Arial, sans-serif; background-color:#f7f7f7; padding:20px; margin:0;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background-color:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <tr>
            <td style="background-color:#ff6b00; color:#fff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
                Verifikasi Email Anggota
            </td>
        </tr>

        <tr>
            <td style="padding:30px; text-align:center; color:#333;">
                <img src="https://i.imgur.com/YVIOupK.gif" alt="Verifikasi Email" width="145" height="70" style="margin-bottom:15px;">
                <h2 style="margin:10px 0;">Halo, {{ $user->name }} 👋</h2>
                <p style="margin:10px 0;">Terima kasih telah mendaftar sebagai anggota kami.</p>
                <p style="margin:10px 0;">Klik tombol di bawah ini untuk memverifikasi alamat email kamu:</p>

                <a href="{{ $url }}" 
                   style="display:inline-block; margin-top:20px; padding:12px 25px; background-color:#ff6b00; color:#fff; text-decoration:none; border-radius:5px; font-weight:bold;">
                    Verifikasi Sekarang
                </a>

                <p style="margin-top:20px; font-size:13px; color:#666;">
                    Jika tombol tidak berfungsi, salin dan tempel tautan berikut ke peramban Anda:<br>
                    <a href="{{ $url }}" style="color:#067df7;">{{ $url }}</a>
                </p>

                <p style="margin-top:30px; font-size:12px; color:#999;">
                    Jika kamu tidak merasa mendaftar, abaikan email ini.
                </p>
            </td>
        </tr>

        <tr>
            <td style="background-color:#f0f0f0; text-align:center; padding:15px; font-size:12px; color:#777;">
                &copy; {{ date('Y') }} APHA Indonesia. All rights reserved.
            </td>
        </tr>

        <tr>
            <td style="padding:20px; font-size:12px; color:#666; line-height:20px;">
                <hr style="border:none;border-top:1px solid #eaeaea;margin:20px 0;width:100%;">
                Jika Anda tidak mencoba mendaftar tetapi menerima email ini, abaikan pesan ini. 
                Jangan pernah membagikan tautan ini kepada siapa pun. 
                Pastikan domain resmi kami 
                (<a href="https://apha.or.id" target="_blank" style="color:#067df7;text-decoration:none;">apha.or.id</a>) 
                sebelum bertindak. 
                Jika Anda khawatir tentang keamanan akun Anda, kunjungi 
                <a href="https://apha.or.id/help" style="color:#067df7;text-decoration:none;" target="_blank">Halaman Bantuan</a>.
            </td>
        </tr>
    </table>
</body>
</html>