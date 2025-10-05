<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        .header { padding: 10px 0; border-bottom: 2px solid #f2f2f2; margin-bottom: 20px; }
        .logo { width: 200px; }
        .title { font-size: 20px; font-weight: bold; color: #ee4d2d; }

        .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .table th, .table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .summary td { padding: 5px; }

        .badge {
            padding: 4px 8px;
            color: white;
            border-radius: 4px;
            font-size: 10px;
        }
        .paid { background: #4caf50; }
        .pending { background: #ff9800; }
        .cancelled { background: #f44336; }

        .footer-note {
            margin-top: 20px; 
            font-size: 10px; 
            color: #444;
        }
    </style>
</head>
<body>

    <div class="header">
        <table width="100%">
            <tr>
                <td>
                    <img src="{{ public_path('storage/logo/Logo-Apha.png') }}" class="logo" />
                </td>
                <td align="right">
                    <div class="title">INVOICE</div>
                    <div>#{{ $invoice->invoice_number }}</div>
                    <div>
                        <span class="badge {{ strtolower($invoice->status) }}">
                            {{ strtoupper($invoice->status) }}
                        </span>
                    </div>
                    <div style="font-size: 11px; color: #666;">
                        {{ $invoice->created_at }}
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <h4>Informasi Pembeli</h4>
    <table width="100%">
        <tr>
            <td>
                <strong>{{ $member->nama ?? $invoice->user->name }}</strong><br>
                NIDN/NIDK: {{ $member->kode ?? '-' }}<br>
                Email: {{ $invoice->user->email }}<br>
                HP: {{ $member->phone ?? '-' }}<br>
                {{ $member->alamat ?? '' }}
            </td>
            <td align="right">
                Invoice: <strong>{{ $invoice->invoice_number }}</strong><br>
                Order ID: {{ $invoice->order_id }}<br>
                Due date: {{ $invoice->due_date ?? '-' }}
            </td>
        </tr>
    </table>

    <h4 style="margin-top: 20px;">Detail Produk</h4>

    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Produk</th>
                <th>Tipe</th>
                <th>Harga</th>
                <th>Qty</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($items as $i => $item)
            <tr>
                <td>{{ $i+1 }}</td>
                <td>{{ $item->item_name }}</td>
                <td>{{ $invoice->type }}</td>
                <td>{{ number_format($item->price) }}</td>
                <td>{{ $item->quantity }}</td>
                <td>{{ number_format($item->subtotal) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <table width="100%" class="summary" style="margin-top: 10px;">
        <tr>
            <td align="right">Subtotal:</td>
            <td width="120" align="right">{{ number_format($invoice->subtotal ?? $invoice->total_amount) }}</td>
        </tr>
        <tr>
            <td align="right">Total:</td>
            <td align="right"><strong>{{ number_format($invoice->total_amount) }}</strong></td>
        </tr>
        <tr>
            <td align="right">Status:</td>
            <td align="right">{{ $invoice->status }}</td>
        </tr>
    </table>

    @if($invoice->notes)
    <div class="footer-note">
        <strong>Notes:</strong><br>
        {{ $invoice->notes }}
    </div>
    @endif

</body>
</html>