import AnggotaLayout from "@/Layouts/AnggotaLayout";
import FlashMessage from "@/Components/FlashMessage";
import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function InvoiceShow({
    invoice,
    snapToken,
    auth,
    errors,
    flashMessage,
    props,
    member,
    tax,
    grand_total,
}) {
    useEffect(() => {
        // Load script Snap
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute(
            "data-client-key",
            import.meta.env.VITE_MIDTRANS_CLIENT_KEY,
        );
        script.async = true;

        script.onload = () => {
            console.log("Snap.js loaded ✅");
        };

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const payNow = () => {
        if (!window.snap) {
            alert("Snap belum siap, coba refresh halaman!");
            return;
        }

        if (!snapToken) {
            alert("Snap Token belum tersedia!");
            return;
        }

        window.snap.pay(snapToken, {
            onSuccess: function (result) {
                alert("Pembayaran sukses!");
                location.reload();
            },
            onPending: function (result) {
                alert("Menunggu pembayaran.");
            },
            onError: function (result) {
                alert("Terjadi kesalahan pembayaran.");
            },
            onClose: function () {
                alert("Kamu menutup pop-up tanpa menyelesaikan pembayaran.");
            },
        });
    };

    const formatRupiah = (number) => {
        if (!number && number !== 0) return "-";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    const statusBadge = (status) => {
        if (!status) return "secondary";
        if (status === "paid" || status === "settlement") return "success";
        if (status === "pending") return "warning";
        if (status === "failed" || status === "cancelled" || status === "deny")
            return "danger";
        return "secondary";
    };

    const items = invoice.items || [];
    const payment = invoice.payment || null;

    return (
        <AnggotaLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Invoice Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <div className="page-wrapper container py-4">
                {/* ========== STYLE Mr_eZ ========== */}

                <Head title={`Invoice ${invoice.invoice_number}`} />

                <h2>View Invoice</h2>
                <p> Portal Home Client Area My Invoices</p>

                <div className="row g-4 mt-2">
                    {/* ============================
             KOLOM KIRI — DETAIL INVOICE
        ============================= */}
                    <div className="col-lg-8">
                        <div
                            className="card mb-4 border-0 shadow-sm"
                            style={{ borderRadius: "12px" }}
                        >
                            <div
                                className="card-header fw-bold"
                                style={{
                                    background: "#fff3e0",
                                    color: "#ff5722",
                                }}
                            >
                                Informasi Invoices
                            </div>
                        </div>
                        <div className="invoice-left shadow-sm">
                            <div className="d-flex justify-content-between align-items-start mb-4 mt-2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={`/storage/logo/Logo-Apha.png`}
                                        alt="Logo"
                                        style={{
                                            width: 80,
                                            height: 80,
                                            objectFit: "contain",
                                        }}
                                        className="me-3 img-fluid"
                                    />
                                    <div>
                                        <h5 className="mb-0">APHA Indonesia</h5>
                                        <small className="text-muted">
                                            Jl. Haji Nawi Raya No. 10B Rt. 001
                                            RW. 001 Cilandak Gandaria Selatan
                                            CILANDAK 12420 • info@apha.or.id
                                        </small>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <h4 className="mb-0">INVOICE</h4>
                                    <div
                                        className={`badge bg-${statusBadge(
                                            invoice.status,
                                        )}`}
                                    >
                                        {(
                                            payment?.transaction_status ??
                                            invoice?.status ??
                                            "-"
                                        ).toUpperCase()}
                                    </div>
                                    <div className="mt-2">
                                        #{invoice.invoice_number}
                                    </div>
                                    <div className="text-muted">
                                        {invoice.created_at
                                            ? new Date(
                                                  invoice.created_at,
                                              ).toLocaleString()
                                            : "-"}
                                    </div>
                                </div>
                            </div>

                            {flashMessage?.message && (
                                <FlashMessage message={flashMessage.message} />
                            )}

                            {/* Customer Info */}
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Bill To</h6>
                                    <strong>
                                        {member?.nama ??
                                            invoice.name ??
                                            invoice.user?.name ??
                                            "-"}
                                    </strong>
                                    <div>NIDN/NIDK: {member?.kode ?? "-"}</div>
                                    <div>
                                        Email: {invoice.user?.email ?? "-"}
                                    </div>
                                    <div>
                                        Phone:{" "}
                                        {member?.phone ??
                                            invoice.user?.phone ??
                                            "-"}
                                    </div>
                                    <div>
                                        {member?.alamat && (
                                            <div className="mt-2">
                                                {member.alamat}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6 text-md-end">
                                    <h6>Invoice info</h6>
                                    <div>
                                        <strong>Invoice #</strong>
                                        {invoice.invoice_number}
                                    </div>
                                    <div>
                                        <strong>Tanggal</strong>{" "}
                                        {invoice.created_at
                                            ? new Date(
                                                  invoice.created_at,
                                              ).toLocaleString()
                                            : "-"}
                                    </div>
                                    <div>
                                        <strong>Due date</strong>{" "}
                                        {invoice.due_date ?? "-"}
                                    </div>
                                    <div>
                                        <strong>Order ID</strong>{" "}
                                        {invoice.order_id ?? "-"}
                                    </div>
                                </div>
                            </div>

                            {/* Items */}
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Produk</th>
                                            <th>Tipe</th>
                                            <th className="text-end">Harga</th>
                                            <th className="text-center">Qty</th>
                                            <th className="text-end">
                                                Subtotal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.length ? (
                                            items.map((it, idx) => (
                                                <tr key={idx}>
                                                    <td>{idx + 1}</td>
                                                    <td>
                                                        {it.item_name ??
                                                            it.product?.name}
                                                    </td>
                                                    <td>
                                                        {it.product?.type ??
                                                            invoice.type ??
                                                            "-"}
                                                    </td>
                                                    <td className="text-end">
                                                        {formatRupiah(it.price)}
                                                    </td>
                                                    <td className="text-center">
                                                        {it.quantity ?? 1}
                                                    </td>
                                                    <td className="text-end">
                                                        {formatRupiah(
                                                            it.subtotal ??
                                                                it.price *
                                                                    (it.quantity ??
                                                                        1),
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    className="text-center"
                                                >
                                                    Tidak ada item
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Summary */}
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    {invoice.notes && (
                                        <div>
                                            <h6>Notes</h6>
                                            <p className="small text-muted">
                                                {invoice.notes}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Subtotal</strong>
                                                </td>
                                                <td
                                                    className="text-end"
                                                    style={{ width: 180 }}
                                                >
                                                    {formatRupiah(
                                                        invoice.subtotal ??
                                                            invoice.total_amount ??
                                                            0,
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Tax</strong>
                                                </td>
                                                <td className="text-end">
                                                    Rp 0
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-end">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="text-end">
                                                    <strong>
                                                        {formatRupiah(
                                                            invoice.total_amount ??
                                                                0,
                                                        )}
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Metode</strong>
                                                </td>
                                                <td className="text-end">
                                                    {invoice.payment_type ??
                                                        payment?.payment_type ??
                                                        "-"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>
                                                        Payment status
                                                    </strong>
                                                </td>
                                                <td className="text-end">
                                                    {(
                                                        payment?.transaction_status ??
                                                        invoice?.status ??
                                                        "-"
                                                    ).toUpperCase()}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ============================
                        KOLOM KANAN
                    ============================= */}
                    <div className="col-lg-4">
                        <div className="invoice-right shadow-sm">
                            {/* Tabs */}
                            <ul className="nav nav-tabs tab-payment mb-3">
                                <li className="nav-item">
                                    <button
                                        className="nav-link active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#manual"
                                    >
                                        Manual Transfer
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#midtrans"
                                    >
                                        Midtrans
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content">
                                {/* Manual Transfer */}
                                <div
                                    className="tab-pane fade show active"
                                    id="manual"
                                >
                                    <p className="mb-2">
                                        Silakan transfer ke rekening berikut:
                                    </p>
                                    <ul>
                                        <span>Bank Mandiri</span>
                                        <h3>126-00-0742744-5</h3>
                                        <p>
                                            a.n Asosiasi Pengajar Hukum Adat
                                            Indonesia (APHA)
                                        </p>
                                    </ul>

                                    {invoice.status === "paid" ? (
                                        <button
                                            className="btn btn-success w-100"
                                            disabled
                                        >
                                            Sudah Dibayar
                                        </button>
                                    ) : (
                                        <Link
                                            className="btn btn-danger w-100"
                                            //onClick={payNow}
                                            type="button"
                                            href={route(
                                                "anggota.dashboard.paymentproof.create",
                                                {
                                                    invoice: invoice.id,
                                                },
                                            )}
                                        >
                                            Upload Bukti Transfer
                                        </Link>
                                    )}
                                </div>

                                {/* Midtrans */}
                                <div className="tab-pane fade" id="midtrans">
                                    <p>Pembayaran otomatis via Midtrans.</p>

                                    {invoice.status === "paid" ? (
                                        <button
                                            className="btn btn-success w-100"
                                            disabled
                                        >
                                            Sudah Dibayar
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={payNow}
                                        >
                                            Bayar Sekarang
                                        </button>
                                    )}
                                </div>
                            </div>

                            <a
                                href={route(
                                    "anggota.dashboard.invoice.download",
                                    invoice.id,
                                )}
                                className="btn btn-outline-dark w-100 mt-3"
                                target="_blank"
                            >
                                Download Invoice
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AnggotaLayout>
    );
}
