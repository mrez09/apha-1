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
                <img src="https://i.imgur.com/YVIOupK.gif" alt="Verified" width="80" height="80" style="margin-bottom:15px; border-radius:50%;">
                <h2>Halo, {{ $user->name }} 👋</h2>
                <p>Selamat! Email kamu telah berhasil diverifikasi.</p>
                <p>
                    📍 <strong>Lokasi:</strong> {{ $location }}<br>
                    🌐 <strong>Alamat IP:</strong> {{ $ip }}<br>
                    ⏰ <strong>Waktu:</strong> {{ now()->timezone('Asia/Jakarta')->format('d M Y, H:i') }} WIB
                </p>

                <p style="margin-top:30px; font-size:13px; color:#555;">
                    Terima kasih telah bergabung bersama kami di <strong>APHA Indonesia</strong>!  
                    Kamu sekarang bisa mengakses seluruh fitur anggota.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#f0f0f0; text-align:center; padding:15px; font-size:12px; color:#777;">
                &copy; {{ date('Y') }} APHA Indonesia. All rights reserved.
            </td>
        </tr>
    </table>
</body>
</html>