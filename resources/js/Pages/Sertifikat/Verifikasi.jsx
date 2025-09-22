import React from "react";
import { Link } from "@inertiajs/react";

export default function Verifikasi({ valid, sertifikat, no }) {
    return (
        <div className="container mt-5">
            {valid ? (
                <div className="card border-success shadow p-4">
                    <h2 className="text-success">✅ Sertifikat Valid</h2>
                    <p>
                        <strong>No Sertifikat:</strong> {sertifikat.no}
                    </p>
                    <p>
                        <strong>Nama:</strong> {sertifikat.nama}
                    </p>
                    <p>
                        <strong>Acara:</strong> {sertifikat.nama_acara}
                    </p>
                    <p>
                        <strong>Tanggal:</strong> {sertifikat.tanggal}
                    </p>
                </div>
            ) : (
                <div className="card border-danger shadow p-4 position-relative">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h2 className="text-danger m-0">
                            ❌ Sertifikat Tidak Valid
                        </h2>

                        <Link
                            href={route("frontsertifikat.index")}
                            className="btn btn-outline-secondary btn-sm"
                        >
                            ← Kembali
                        </Link>
                    </div>

                    <p>
                        No Sertifikat: <strong>{no}</strong>
                    </p>
                    <p>Sertifikat ini tidak ditemukan dalam sistem kami.</p>

                    <div className="alert alert-warning mt-3 mb-0" role="alert">
                        ⚠️ Harap tidak melakukan pencarian berulang atau spam.
                        Sistem akan membatasi permintaan berlebihan secara
                        otomatis.
                        <br />
                        ❤️ aktivitas dan alamat IP Anda tercatat untuk keamanan
                        sistem.
                    </div>
                </div>
            )}
        </div>
    );
}
