import React from "react";

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
                <div className="card border-danger shadow p-4">
                    <h2 className="text-danger">❌ Sertifikat Tidak Valid</h2>
                    <p>
                        No Sertifikat: <strong>{no}</strong>
                    </p>
                    <p>Sertifikat ini tidak ditemukan dalam sistem kami.</p>
                </div>
            )}
        </div>
    );
}
