<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Reset Password APHA</title>
</head>

<body style="font-family: Arial, sans-serif; background-color:#f7f7f7; padding:20px; margin:0;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background-color:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <tr>
            <td style="background-color:#ff6b00; color:#fff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
                Reset Password <br> Asosiasi Pengajar Hukum Adat <br>APHA
            </td>
        </tr>
    
        <tr>
            <td style="padding:30px; text-align:center; color:#333;">
                <img src="https://i.imgur.com/YVIOupK.gif" alt="Verifikasi Email" width="145" height="70" style="margin-bottom:15px;">
                <h2 style="margin:10px 0;">Kepada Yth. Halo {{ $user->name }} 👋</h2>
                <p style="margin:10px 0;">Semoga Bapak/Ibu dalam keadaan sehat dan sejahtera.</p>
                <p style="margin:10px 0;"> Kami menerima permintaan untuk mengatur ulang password akun APHA Anda.
                </p>
                <p style="margin:10px 0;">
                    Klik tombol di bawah ini untuk membuat password baru.
                </p>
                <p style="text-align:center; margin:35px 0;">
                    <a href="{{ $url }}"
                    style="
                            display:inline-block;
                            background:#d97706;
                            color:#fff;
                            text-decoration:none;
                            padding:14px 36px;
                            border-radius:10px;
                            font-weight:bold;
                    ">
                        Reset Password
                    </a>
                </p>
                <p style="color:#666;font-size:14px;text-align:center;">
                    Atau salin dan tempel tautan berikut ke browser Anda:
                </p>

                <p style="word-break:break-all;text-align:center;">
                    <a href="{{ $url }}">{{ $url }}</a>
                </p>
                <p style="margin:10px 0;">

                    Link ini hanya berlaku selama 60 menit.
                </p>

                <p style="margin:10px 0;">
                    Jika Anda tidak meminta reset password, abaikan email ini.
                </p>
                
                <p style="margin:10px 0;">
                    Terima kasih atas perhatian dan kerja samanya 🙏
                </p>
                <p style="margin:10px 0;">
                    Hormat kami,
                    Admin 
                    Asosiasi Pengajar Hukum Adat Indonesia
                    📱 +62 882-1009-2657
                    🌐 apha.or.id
                </p>
                <p style="margin:10px 0;">
                    Terima kasih atas perhatian dan kerja samanya 🙏
                </p>

                <p style="margin-top:30px; font-size:12px; color:#999;">
                    Terima kasih Sudah Berkontribusi.
                </p>
            </td>
        </tr>
        <h2></h2>
    </table>
</body>

</html>