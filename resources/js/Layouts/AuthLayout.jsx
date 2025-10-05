import { Head } from "@inertiajs/react";
import "@/../css/auth.css";

export default function AuthLayout({
    title = "Authentication",
    heading = "Selamat Datang",
    description = "",
    children,
}) {
    return (
        <>
            <Head title={title} />

            <div className="auth-wrapper">
                {/* LEFT PANEL */}
                <div className="auth-left">
                    <div className="auth-overlay">
                        <img
                            src="/storage/logo/Logo-AphaC.png"
                            className="auth-logo"
                            alt="APHA"
                        />

                        <h1 className="auth-title">
                            Asosiasi Pengajar
                            <br />
                            Hukum Adat Indonesia
                        </h1>
                        <p className="auth-slogan">
                            Membangun jejaring akademisi, peneliti, dan pengajar
                            Hukum Adat Indonesia.
                        </p>

                        <p className="auth-subtitle">
                            Sistem Informasi Keanggotaan APHA
                        </p>

                        <div className="auth-divider"></div>

                        <ul className="auth-feature-list">
                            <li>
                                <i className="fas fa-id-card"></i>
                                Kartu Anggota Digital
                            </li>

                            <li>
                                <i className="fas fa-qrcode"></i>
                                Verifikasi QR Code
                            </li>

                            <li>
                                <i className="fas fa-certificate"></i>
                                Sertifikat Digital
                            </li>

                            <li>
                                <i className="fas fa-credit-card"></i>
                                Pembayaran Online
                            </li>
                        </ul>
                        <a href="/" className="auth-home-link">
                            ← Kembali ke Website
                        </a>

                        <div className="auth-footer">© 2026 APHA Indonesia</div>
                    </div>
                </div>

                {/* RIGHT PANEL */}

                <div className="auth-right">
                    <div className="glass-card">
                        <div className="text-center mb-4">
                            <div className="glass-icon">
                                <i className="fas fa-lock"></i>
                            </div>

                            <h2 className="mt-4 fw-bold">{heading}</h2>

                            {description && (
                                <p className="text-muted">{description}</p>
                            )}
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
