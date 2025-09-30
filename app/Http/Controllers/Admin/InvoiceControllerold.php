use App\Services\MidtransService;
use App\Models\Invoice;
use App\Models\Payment;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function pay($id, MidtransService $midtrans)
    {
        $invoice = Invoice::findOrFail($id);
        $snapToken = $midtrans->createTransaction($invoice);

        return inertia('Invoice/Pay', [
            'snapToken' => $snapToken,
            'invoice' => $invoice,
            'midtransClientKey' => config('midtrans.client_key'),
        ]);
    }

    public function webhook(Request $request)
    {
        $serverKey = config('midtrans.server_key');
        $signature = hash('sha512',
            $request->order_id .
            $request->status_code .
            $request->gross_amount .
            $serverKey
        );

        if ($signature !== $request->signature_key) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        $invoice = Invoice::where('invoice_number', $request->order_id)->first();
        if (!$invoice) return response()->json(['message'=>'Invoice not found'], 404);

        $payment = Payment::updateOrCreate(
            ['gateway_payment_id' => $request->transaction_id],
            [
                'invoice_id' => $invoice->id,
                'gateway' => 'midtrans',
                'amount' => $request->gross_amount,
                'status' => $request->transaction_status,
                'payload' => $request->all(),
            ]
        );

        if (in_array($request->transaction_status, ['capture', 'settlement'])) {
            $invoice->update(['status' => 'paid']);
        }

        return response()->json(['message' => 'OK']);
    }
}