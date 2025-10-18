<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <style>
        body{
            font-family: DejaVu Sans, sans-serif;
            font-size:12px;
            color:#333;
            margin:10px;
        }

        .header{
            border-bottom:3px solid #F08F4A;
            padding-bottom:15px;
            margin-bottom:30px;
        }

        .logo{
            width:180px;
        }

        .title{
            font-size:32px;
            font-weight:bold;
            color:#F08F4A;
            letter-spacing:3px;
        }

        .invoice-number{
            font-size:14px;
            color:#666;
            margin-top:5px;
        }
        .section-title{
            background:#FAFAFA;
            border-left:5px solid #F08F4A;
            padding:8px 12px;
            margin:25px 0 12px;
            font-size:14px;
            font-weight:bold;
            color:#333;
        }

        /*table*/
        .table{
            width:100%;
            border-collapse:collapse;
            margin-top:12px;
        }

        .table thead{
            background:#F08F4A;
            color:#fff;
        }

        .table th{
            padding:10px;
            text-align:left;
            font-size:12px;
        }

        .table td{
            padding:9px;
            border:1px solid #EAEAEA;
        }

        .table tbody tr:nth-child(even){
            background:#FCFCFC;
        }

        .summary-table{
            margin-top:5px;
            width:100%;
            border-top:2px solid #F2F2F2;
        }

        .summary-table td{
            padding:2px;
        }

        .total-row{
            font-size:14px;
            font-weight:bold;
            color:#F08F4A;
        }

        .info-badge{
            margin: 2px;
        }

        .badge{
            display:inline-block;
            padding:6px 14px;
            font-size:11px;
            font-weight:bold;
            border-radius:30px;
            color:#fff;
        }

        .paid{
            background:#4CAF50;
        }

        .pending{
            background:#F39C12;
        }

        .cancelled{
            background:#E74C3C;
        }

        .info-table{
            width:100%;
            margin-top:25px;
            border-collapse:separate;
            border-spacing:12px 0;
        }

        .info-box{
            border:1px solid #E5E5E5;
            background:#FCFCFC;
            padding:15px;
            vertical-align:top;
        }

        .box-title{
            font-size:14px;
            font-weight:bold;
            color:#F08F4A;
            margin-bottom:12px;
            padding-bottom:6px;
            border-bottom:1px solid #EEEEEE;
        }

        .info-item{
            margin-bottom:2px;
            font-size:12px;
            color:#444;
        }

        .info-label{
            font-weight:bold;
            display:inline-block;
            width:95px;
        }

        .notes-list{
            margin:0;
            padding-left:18px;
        }

        .notes-list li{
            margin-bottom:2px;
            line-height:1;
        }

        .thankyou{
            margin-top:30px;
            text-align:center;
        }

        .thankyou h3{
            margin:0;
            color:#F08F4A;
            font-size:18px;
        }

        .thankyou p{
            margin-top:3px;
            color:#666;
            line-height:1;
        }

        .footer{
            margin-top:10px;
            padding-top:12px;
            border-top:2px solid #EEEEEE;
            font-size:11px;
            color:#666;
        }

        .footer td{
            padding:4px 0;
        }

        .footer strong{
            color:#333;
        }

        .info-box{
            border:1px solid #EAEAEA;
            background:#FCFCFC;
            padding:12px;
            border-radius:6px;
        }

        .notes{
            border:1px solid #EAEAEA;
            background:#FFFDF7;
            padding:12px;
        }

            
        .total{
            font-size:16px;
            font-weight:bold;
            color:#F08F4A;
        }

        .footer{
            margin-top:40px;
            padding-top:12px;
            border-top:2px solid #F2F2F2;
            font-size:10px;
            color:#777;
        }

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
                    {{-- <img src="{{ public_path('storage/logo/Invoice-Apha.png') }}" class="logo" /> --}}
                    <img src="{{ $logo }}" class="logo">
                </td>
                <td align="right">
                    <div class="title">INVOICE</div>
                    <div class="invoice-number">#{{ $invoice->invoice_number }}</div>
                    <div class="info-badge">
                        <span class="badge {{ strtolower($invoice->status) }}">
                            {{ strtoupper($invoice->status) }}
                        </span>
                    </div>
                    <div style="font-size: 11px; color: #666;">
                        {{ \Carbon\Carbon::parse($invoice->created_at)->translatedFormat('d F Y H:i') }}
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <h4 class="section-title">Informasi Pembeli</h4>
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

    <table class="summary-table" width="100%">
        <tr class="total-row">
            <td align="right">Subtotal:</td>
            <td width="120" align="right">{{ number_format($invoice->subtotal ?? $invoice->total_amount) }}</td>
        </tr>
        <tr class="total-row">
            <td align="right">Total:</td>
            <td align="right"><strong>{{ number_format($invoice->total_amount) }}</strong></td>
        </tr>
        <tr class="total-row">
            <td align="right">Status:</td>
            <td align="right">{{ strtoupper($invoice->status) }}</td>
        </tr>
    </table>

    
    <table class="info-table">
        <tr>
            <td width="50%">
                <div class="info-box">
                    <div class="box-title">Payment Information</div>
                    <div class="info-item">
                        <span class="info-label">Method</span>
                        <span>: {{ $paymentMethod ?: 'Not Available' }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Channel</span>
                        <span>: {{ $paymentChannel ?: '-' }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Status</span>
                        <span>: {{ strtoupper($payment->transaction_status) }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        : {{ \Carbon\Carbon::parse($payment->transaction_time)->translatedFormat('d F Y H:i') ?? '-' }}
                    </div>
                </div>
            </td>
            <td width="50%">
                <div class="info-box">
                    <div class="box-title">
                        Notes
                    </div>
                    <ul class="notes-list">
                        <li>This invoice has been generated automatically.</li>
                        <li>Please retain this invoice for your records.</li>
                        <li>Contact APHA Support for corrections.</li>
                        <li>No signature is required.</li>
                    </ul>
                </div>
            </td>
        </tr>
    </table>

    <div class="thankyou">
        <h3>THANK YOU</h3>
        <p>
            Thank you for your trust in<br>
            <strong>Association of Public Health Association</strong>
        </p>
    </div>
    
    <table class="footer" width="100%">
        <tr>
            <td width="35%">
                <strong>Website</strong><br>
                apha.or.id
            </td>
            
            <td width="35%">
                <strong>Email</strong><br>
                info@apha.or.id
            </td>
            
            <td align="right">
                This document is generated automatically.<br>
                No signature required.
            </td>
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