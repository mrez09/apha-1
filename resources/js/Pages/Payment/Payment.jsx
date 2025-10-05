import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

export default function PaymentPage({ snapToken, amount }) {
    useEffect(() => {
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";
        const scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute(
            "data-client-key",
            import.meta.env.VITE_MIDTRANS_CLIENT_KEY
        );
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const handlePayment = () => {
        window.snap.pay(snapToken, {
            onSuccess: function (result) {
                alert("Pembayaran berhasil!");
                console.log(result);
            },
            onPending: function (result) {
                alert("Menunggu pembayaran!");
                console.log(result);
            },
            onError: function (result) {
                alert("Terjadi kesalahan!");
                console.log(result);
            },
            onClose: function () {
                alert("Kamu menutup popup sebelum menyelesaikan pembayaran.");
            },
        });
    };

    return (
        <div className="container mt-5 text-center">
            <Head title="Pembayaran Iuran Anggota" />
            <h3 className="mb-3">Pembayaran Iuran Anggota</h3>
            <p>
                Total: <strong>Rp {amount.toLocaleString("id-ID")}</strong>
            </p>
            <button className="btn btn-primary mt-3" onClick={handlePayment}>
                Bayar Sekarang
            </button>
        </div>
    );
}
