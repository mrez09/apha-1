<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceController extends Controller
{
    public function downloadPdf($id)
    {
        $invoice = Invoice::with('payment')->findOrFail($id);

        $pdf = Pdf::loadView('invoices.pdf', compact('invoice'))
                  ->setPaper('a4', 'portrait');

        $filename = 'Invoice_' . $invoice->invoice_number . '.pdf';

        return $pdf->download($filename);
    }
}