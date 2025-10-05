<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Verifikasi Berhasil</title>
</head>
<body style="font-family: Arial, sans-serif; background-color:#f7f7f7; padding:20px;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#fff; border-radius:8px; overflow:hidden;">
        <tr>
            <td style="background-color:#00b894; color:#fff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
                Email Kamu Sudah Diverifikasi 🎉
            </td>
        </tr>
        <tr>
            <td style="padding:30px; text-align:center; color:#333;">
                <img src="https://i.imgur.com/YVIOupK.gif" alt="Verifikasi Email" width="145" height="70" style="margin-bottom:15px;">
                <h2>Halo, {{ $member->nama }} 👋</h2>
                <p>Terima kasih! Email kamu telah berhasil diverifikasi.<br>
                    </p>
                

                <p style="margin-top:30px; font-size:13px; color:#555;">
                    Terima kasih telah bergabung bersama kami di <strong>APHA Indonesia</strong>!  
                    Kamu sekarang telah terdaftar sebagai anggota aktif APHA Indonesia..
                </p>

                <p style="text-align:center; margin-top:25px;">
                    <a href="https://apha.or.id/login" 
                        style="background:#28a745; color:white; padding:12px 25px; border-radius:6px; text-decoration:none; font-size:16px;">
                        Masuk ke Dashboard
                    </a>
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