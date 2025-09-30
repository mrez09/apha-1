<?php

namespace App\Services;

use Midtrans\Config;
use Midtrans\Snap;

class MidtransService
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }

    public function createTransaction($invoice)
    {
        $params = [
            'transaction_details' => [
                'order_id' => $invoice->invoice_number,
                'gross_amount' => $invoice->total,
            ],
            'customer_details' => [
                'first_name' => $invoice->user->name ?? 'Member',
                'email' => $invoice->user->email,
            ],
            'callbacks' => [
                'finish' => route('midtrans.finish'),
            ],
        ];

        $snapToken = Snap::getSnapToken($params);
        return $snapToken;
    }
}