<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;

class PaymentController extends Controller
{
    //
    public function createTransaction(Request $request)
    {
        // Konfigurasi Midtrans
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;

        // Data transaksi (sementara hardcode untuk tes)
        $params = [
            'transaction_details' => [
                'order_id' => 'ORDER-' . uniqid(),
                'gross_amount' => 50000, // contoh iuran 50rb
            ],
            'customer_details' => [
                'first_name' => 'Rizky Aditya',
                'email' => 'rizky@example.com',
                'phone' => '08123456789',
            ],
        ];

        // Ambil Snap Token dari Midtrans
        $snapToken = Snap::getSnapToken($params);

        // kirim ke React (Inertia)
        return inertia('Payment/Payment', [
            'snapToken' => $snapToken,
            'amount' => 50000,
        ]);
    }
}
