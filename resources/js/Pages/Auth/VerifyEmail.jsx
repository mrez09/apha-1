import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function VerifyEmail() {
    const { flash } = usePage().props;
    const [loading, setLoading] = useState(false);

    const resendVerification = (e) => {
        e.preventDefault();
        setLoading(true);
        router.post(
            route("verification.send"),
            {},
            {
                onFinish: () => setLoading(false),
            }
        );
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4">
                <h3 className="mb-3">Verifikasi Email</h3>
                <p className="text-muted">
                    Terima kasih telah mendaftar! Sebelum lanjut, silakan
                    verifikasi alamat email kamu dengan menekan tautan yang
                    sudah dikirim.
                </p>

                {flash?.message && (
                    <div className="alert alert-success">{flash.message}</div>
                )}

                <form onSubmit={resendVerification}>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        target="_blank"
                    >
                        {loading
                            ? "Mengirim..."
                            : "Kirim Ulang Email Verifikasi"}
                    </button>
                </form>
            </div>
        </div>
    );
}
