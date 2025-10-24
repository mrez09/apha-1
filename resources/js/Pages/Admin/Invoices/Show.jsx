import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import moment from "moment";

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

    const generatePayment = () => {
        router.post(
            route("admin.dashboard.invoices.generatePayment", invoice.id),
        );
    };

    return (
        <AuthenticatedLayout
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
                    <div className="col-lg-9">
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
                                            invoice?.transaction_status ??
                                            invoice?.status ??
                                            "-"
                                        ).toUpperCase()}
                                    </div>
                                    <div className="mt-2">
                                        #{invoice.invoice_number}
                                    </div>
                                    <div className="text-muted">
                                        {invoice.created_at
                                            ? moment(invoice.created_at).format(
                                                  "DD MMMM YYYY HH:mm",
                                              )
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
                                            ? moment(invoice.created_at).format(
                                                  "D MMMM YYYY",
                                              )
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
                            <div className="d-flex justify-content-end mt-3">
                                <div style={{ width: "320px" }}>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* History Transaksi */}

                            <div className="card mt-4 shadow-sm">
                                <div className="card-header fw-bold">
                                    Payment History
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Tanggal</th>
                                                    <th>Gateway</th>
                                                    <th>Order ID</th>
                                                    <th>Status</th>
                                                    <th>Metode</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {invoice.payments?.length >
                                                0 ? (
                                                    invoice.payments.map(
                                                        (pay, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    {moment(
                                                                        pay.created_at,
                                                                    ).format(
                                                                        "DD MMM YYYY HH:mm",
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    {pay.gateway ??
                                                                        "-"}
                                                                </td>

                                                                <td>
                                                                    {pay.order_id ??
                                                                        "-"}
                                                                </td>

                                                                <td>
                                                                    <span
                                                                        className={`badge bg-${
                                                                            pay.transaction_status ===
                                                                                "settlement" ||
                                                                            pay.transaction_status ===
                                                                                "capture"
                                                                                ? "success"
                                                                                : pay.transaction_status ===
                                                                                    "pending"
                                                                                  ? "warning"
                                                                                  : "danger"
                                                                        }`}
                                                                    >
                                                                        {pay.transaction_status?.toUpperCase()}
                                                                    </span>
                                                                </td>

                                                                <td>
                                                                    {pay.payment_type ??
                                                                        "-"}
                                                                </td>
                                                            </tr>
                                                        ),
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td
                                                            colSpan="5"
                                                            className="text-center"
                                                        >
                                                            Belum ada histori
                                                            pembayaran
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* End History Transaksi */}
                        </div>
                    </div>
                    {/* End of Kiri */}

                    <div className="col-lg-3">
                        {/* Invoice Information */}
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-header fw-bold bg-light">
                                Invoice Information
                            </div>

                            <div className="card-body small">
                                <div className="mb-2">
                                    <strong>Invoice</strong>
                                    <br />
                                    {invoice.invoice_number}
                                </div>

                                <div className="mb-2">
                                    <strong>Order ID</strong>
                                    <br />
                                    {invoice.order_id ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Type</strong>
                                    <br />
                                    {invoice.type ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Status</strong>
                                    <br />

                                    <span
                                        className={`badge bg-${statusBadge(invoice.status)}`}
                                    >
                                        {(invoice.status ?? "-").toUpperCase()}
                                    </span>
                                </div>

                                <div className="mb-2">
                                    <strong>Created</strong>
                                    <br />
                                    {moment(invoice.created_at).format(
                                        "DD MMM YYYY HH:mm",
                                    )}
                                </div>

                                <div>
                                    <strong>Paid At</strong>
                                    <br />
                                    {invoice.paid_at
                                        ? moment(invoice.paid_at).format(
                                              "DD MMM YYYY HH:mm",
                                          )
                                        : "-"}
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-header fw-bold bg-light">
                                Payment Information
                            </div>

                            <div className="card-body small">
                                <div className="mb-2">
                                    <strong>Gateway</strong>
                                    <br />
                                    {payment?.gateway ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Method</strong>
                                    <br />
                                    {invoice.method ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Payment Type</strong>
                                    <br />
                                    {payment?.payment_type ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Transaction</strong>
                                    <br />
                                    {payment?.transaction_id ?? "-"}
                                </div>

                                <div className="mb-2">
                                    <strong>Fraud Status</strong>
                                    <br />
                                    {payment?.fraud_status ?? "-"}
                                </div>
                            </div>
                        </div>

                        {/* Payment Proof */}
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-header fw-bold bg-light">
                                Payment
                            </div>

                            <div className="card-body small">
                                {invoice.payment_proof?.proof_file ? (
                                    <>
                                        <a
                                            href={`/storage/${invoice.payment_proof.proof_file}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-info btn-sm"
                                        >
                                            <i className="fas fa-eye me-1"></i>
                                            Lihat Bukti
                                        </a>

                                        <a
                                            href={`/storage/${invoice.payment_proof.proof_file}`}
                                            download
                                            className="btn btn-success btn-sm "
                                        >
                                            <i className="fas fa-download me-1"></i>
                                            Download
                                        </a>
                                    </>
                                ) : (
                                    <div className="text-muted">
                                        Belum ada bukti pembayaran.
                                    </div>
                                )}
                                <h5>Status</h5>
                                {invoice.payment_proof?.status ? (
                                    <>
                                        <p>
                                            Status :
                                            {invoice.payment_proof.status ===
                                                "pending" && (
                                                <span className="badge bg-warning text-dark ms-2">
                                                    Menunggu Verifikasi
                                                </span>
                                            )}
                                            {invoice.payment_proof.status ===
                                                "approved" && (
                                                <span className="badge bg-success ms-2">
                                                    Disetujui
                                                </span>
                                            )}
                                            {invoice.payment_proof.status ===
                                                "rejected" && (
                                                <span className="badge bg-danger ms-2">
                                                    Ditolak
                                                </span>
                                            )}
                                        </p>
                                    </>
                                ) : (
                                    <div className="text-muted">
                                        Menggunakan Midtrans.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Admin Actions */}
                        <div className="card shadow-sm border-0">
                            <div className="card-header fw-bold bg-light">
                                Admin Actions
                            </div>

                            <div className="card-body d-grid gap-2">
                                {invoice.status === "paid" ? (
                                    <button
                                        className="btn btn-success"
                                        disabled
                                    >
                                        Sudah Dibayar
                                    </button>
                                ) : ["expired", "failed", "cancelled"].includes(
                                      invoice.status,
                                  ) ? (
                                    <button
                                        className="btn btn-danger"
                                        onClick={generatePayment}
                                    >
                                        Generate Ulang Pembayaran
                                    </button>
                                ) : invoice.payment_token ? (
                                    <button
                                        className="btn btn-warning"
                                        disabled
                                    >
                                        Menunggu Pembayaran
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        onClick={generatePayment}
                                    >
                                        Generate Midtrans
                                    </button>
                                )}

                                <Link
                                    href={route(
                                        "admin.dashboard.invoices.edit",
                                        invoice.id,
                                    )}
                                    className="btn btn-warning"
                                >
                                    Edit Invoice
                                </Link>

                                {invoice.payment_proof && (
                                    <Link
                                        href={route(
                                            "admin.dashboard.paymentproof.show",
                                            invoice.payment_proof.no_invoice,
                                        )}
                                        className="btn btn-warning"
                                    >
                                        Lihat Payment Proof
                                    </Link>
                                )}

                                <a
                                    //href={route(
                                    //    "admin.dashboard.invoices.download",
                                    //    invoice.id,
                                    //)}
                                    href={route(
                                        "anggota.dashboard.invoice.download",
                                        invoice.id,
                                    )}
                                    className="btn btn-success"
                                >
                                    Download PDF
                                </a>

                                <button className="btn btn-info">
                                    Kirim Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
