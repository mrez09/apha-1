<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $invoice->invoice_number }}</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 13px; }
        .header { text-align: center; margin-bottom: 20px; }
        .header h2 { margin: 0; }
        .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .table th, .table td { border: 1px solid #aaa; padding: 8px; text-align: left; }
        .total { font-weight: bold; }
        .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h2>INVOICE PEMBAYARAN</h2>
        <p>No. {{ $invoice->invoice_number }}</p>
        <hr>
    </div>

    <p><strong>Tanggal:</strong> {{ $invoice->created_at->format('d/m/Y') }}</p>
    <p><strong>Status:</strong> {{ strtoupper($invoice->status) }}</p>

    <table class="table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($invoice->items ?? [] as $item)
                <tr>
                    <td>{{ $item['name'] }}</td>
                    <td>{{ $item['qty'] }}</td>
                    <td>Rp{{ number_format($item['price'], 0, ',', '.') }}</td>
                    <td>Rp{{ number_format($item['qty'] * $item['price'], 0, ',', '.') }}</td>
                </tr>
            @endforeach
            <tr class="total">
                <td colspan="3" align="right">Total</td>
                <td>Rp{{ number_format($invoice->total, 0, ',', '.') }}</td>
            </tr>
        </tbody>
    </table>

    @if($invoice->payment)
    <p><strong>Metode Pembayaran:</strong> {{ strtoupper($invoice->payment->payment_type) }}</p>
    <p><strong>Tanggal Transaksi:</strong> {{ $invoice->payment->transaction_time }}</p>
    @endif

    <div class="footer">
        <hr>
        <p>Terima kasih telah melakukan pembayaran 🙏</p>
    </div>
</body>
</html>