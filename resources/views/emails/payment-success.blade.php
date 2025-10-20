<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Pembayaran Berhasil - APHA</title>
</head>

<body style="font-family: Arial, sans-serif; background-color:#f7f7f7; padding:20px; margin:0;">

<table align="center" width="600" cellpadding="0" cellspacing="0"
    style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

    <!-- Header -->
    <tr>
        <td style="background:#ff6b00;color:#fff;text-align:center;padding:25px;">
            <div style="font-size:24px;font-weight:bold;">
                Pembayaran Berhasil
            </div>

            <div style="font-size:15px;margin-top:8px;">
                Asosiasi Pengajar Hukum Adat Indonesia (APHA)
            </div>
        </td>
    </tr>


    <!-- Content -->
    <tr>
        <td style="padding:30px;color:#333;">

            <h2 style="margin-top:0;">
                Halo {{ $invoice->user->name ?? 'Bapak/Ibu' }} 👋
            </h2>


            <p>
                Terima kasih. Pembayaran Anda telah berhasil kami terima.
            </p>


            <!-- Invoice Info -->
            <table width="100%" cellpadding="8" cellspacing="0"
                style="background:#fafafa;border-radius:8px;margin:20px 0;">

                <tr>
                    <td>
                        <strong>No Invoice</strong>
                    </td>
                    <td align="right">
                        {{ $invoice->invoice_number ?? '-' }}
                    </td>
                </tr>


                <tr>
                    <td>
                        <strong>Order ID</strong>
                    </td>
                    <td align="right">
                        {{ $invoice->order_id ?? '-' }}
                    </td>
                </tr>


                <tr>
                    <td>
                        <strong>Tanggal Pembayaran</strong>
                    </td>
                    <td align="right">
                        {{ $invoice->paid_at 
                            ? \Carbon\Carbon::parse($invoice->paid_at)->translatedFormat('d F Y H:i')
                            : '-' 
                        }}
                    </td>
                </tr>


                <tr>
                    <td>
                        <strong>Status</strong>
                    </td>
                    <td align="right">
                        <span style="
                            background:#28a745;
                            color:#fff;
                            padding:5px 12px;
                            border-radius:20px;
                            font-size:12px;
                        ">
                            PAID
                        </span>
                    </td>
                </tr>

            </table>



            <h3 style="margin-top:25px;">
                Detail Pembayaran
            </h3>


            <table width="100%" cellpadding="8" cellspacing="0"
                style="border-collapse:collapse;">

                <tr style="background:#f1f1f1;">
                    <th align="left">
                        Produk
                    </th>

                    <th align="center">
                        Qty
                    </th>

                    <th align="right">
                        Total
                    </th>
                </tr>


                @foreach($invoice->items as $item)

                <tr style="border-bottom:1px solid #eee;">

                    <td>
                        {{ $item->item_name }}
                    </td>

                    <td align="center">
                        {{ $item->quantity }}
                    </td>

                    <td align="right">
                        Rp {{ number_format($item->subtotal,0,',','.') }}
                    </td>

                </tr>

                @endforeach


            </table>



            <!-- Total -->
            <table width="100%" style="margin-top:20px;">

                <tr>
                    <td align="right">
                        <strong>Total Pembayaran</strong>
                    </td>

                    <td align="right" width="150">
                        <strong style="font-size:18px;color:#ff6b00;">
                            Rp {{ number_format($invoice->total_amount,0,',','.') }}
                        </strong>
                    </td>
                </tr>

            </table>



            <p style="margin-top:30px;">
                Silakan simpan email ini sebagai bukti pembayaran.
                Anda juga dapat melihat detail invoice melalui dashboard APHA.
            </p>


            <p>
                Hormat kami,<br>
                <strong>Admin APHA Indonesia</strong>
            </p>


        </td>
    </tr>



    <!-- Footer -->
    <tr>
        <td style="
            background:#f0f0f0;
            text-align:center;
            padding:15px;
            font-size:12px;
            color:#777;
        ">
            &copy; {{ date('Y') }} APHA Indonesia. All rights reserved.
        </td>
    </tr>



    <tr>
        <td style="
            padding:20px;
            font-size:12px;
            color:#666;
            line-height:20px;
        ">

            <hr style="border:none;border-top:1px solid #eaeaea;">

            Email ini dikirim otomatis oleh sistem APHA.
            Jangan membalas email ini.

            <br><br>

            Website resmi:
            <a href="https://apha.or.id"
               style="color:#067df7;text-decoration:none;">
                apha.or.id
            </a>

        </td>
    </tr>


</table>

</body>
</html>