import AnggotaLayout from "@/Layouts/AnggotaLayout";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import PDFFile from "@/Components/Pdf/InvoicePDF";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import LogoApha from "@/Components/photos/Logo-Apha";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useCallback } from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
//import InvoicePDF from "@/Components/PDF/InvoicePDF";

export default function Show({
    featuredBuku,
    payment,
    props,
    tanggal_print,
    pay,
    flashMessage,
    member,
    tax,
    grandTotal,
    auth,
    errors,
    invoice,
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //const parse = require("html-react-parser");
    //Homes
    const [copied, setCopied] = useState(false);
    const onChange = useCallback(({ target: { value } }) => {
        setValue(value);
        setCopied(true);
    }, []);
    const onClick = useCallback(({ target: { innerText } }) => {
        console.log(`Clicked on "${innerText}"!`);
    }, []);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const url_homes = window.location.href;

    const statusBadge = (status) => {
        if (!status) return "secondary";
        if (status === "paid" || status === "settlement") return "success";
        if (status === "pending") return "warning";
        if (status === "failed" || status === "cancelled" || status === "deny")
            return "danger";
        return "secondary";
    };

    const formatRupiah = (number) => {
        if (!number && number !== 0) return "-";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    return (
        <AnggotaLayout auth={auth} errors={errors}>
            <Head title={`Invoice ${payment.no_invoice}`} />
            <h2>View Invoice</h2>
            <p> Portal Home Client Area My Invoices</p>

            <div className="page-wrapper container py-4">
                <div className="row g-4 mt-2">
                    {/* ============================ KOLOM KIRI — DETAIL INVOICE ============================= */}

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
                        {/*End of Head*/}

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
                                            payment.status,
                                        )}`}
                                    >
                                        {payment.status ?? "-"}
                                    </div>
                                    <div className="mt-2">
                                        #{payment.no_invoice}
                                    </div>
                                    <div className="text-muted">
                                        {payment.created_at
                                            ? moment(payment.created_at).format(
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
                                            payment.name ??
                                            payment.user?.name ??
                                            "-"}
                                    </strong>
                                    <div>NIDN/NIDK: {member?.kode ?? "-"}</div>
                                    <div>
                                        Email: {payment.user?.email ?? "-"}
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
                                        {payment.no_invoice}
                                    </div>
                                    <div>
                                        <strong>Tanggal</strong>{" "}
                                        {payment.created_at
                                            ? moment(payment.created_at).format(
                                                  "D MMMM YYYY",
                                              )
                                            : "-"}
                                    </div>
                                    <div>
                                        <strong>Due date</strong>{" "}
                                        {invoice?.due_date
                                            ? moment(invoice.due_date).format(
                                                  "D MMMM YYYY",
                                              )
                                            : "-"}
                                    </div>
                                    <div>
                                        <strong>Order ID</strong>{" "}
                                        {invoice?.order_id ?? "-"}
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
                                        {payment?.invoice?.items?.length > 0 ? (
                                            payment.invoice.items.map(
                                                (it, idx) => (
                                                    <tr key={idx}>
                                                        <td>{idx + 1}</td>
                                                        <td>
                                                            {it.item_name ??
                                                                it.product
                                                                    ?.name}
                                                        </td>
                                                        <td>
                                                            {it.product?.type ??
                                                                invoice.type ??
                                                                "-"}
                                                        </td>
                                                        <td className="text-end">
                                                            {formatRupiah(
                                                                it.price,
                                                            )}
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
                                                ),
                                            )
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
                                    {payment.notes && (
                                        <div>
                                            <h6>Notes</h6>
                                            <p className="small text-muted">
                                                {payment.notes}
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
                                                        payment.subtotal ??
                                                            payment.jumlah ??
                                                            0,
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Tax</strong>
                                                </td>
                                                <td className="text-end">
                                                    {tax
                                                        ? formatRupiah(tax)
                                                        : "-"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="text-end">
                                                    <strong>
                                                        {formatRupiah(
                                                            grandTotal ?? 0,
                                                        )}
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end">
                                                    <strong>Metode</strong>
                                                </td>
                                                <td className="text-end">
                                                    {payment.payment_type ??
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
                                                    {payment?.transaction_status ??
                                                        payment.status}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end of left */}
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

                                    {payment.status === "paid" ? (
                                        <button
                                            className="btn btn-success w-100"
                                            disabled
                                        >
                                            Sudah Dibayar
                                        </button>
                                    ) : (
                                        <Link
                                            className="btn btn-info w-100"
                                            //onClick={payNow}
                                            target="_blank"
                                            type="button"
                                            href={route(
                                                "anggota.dashboard.invoice.show",
                                                payment.invoice.id,
                                            )}
                                        >
                                            WAITING CONFIRMATION
                                        </Link>
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
