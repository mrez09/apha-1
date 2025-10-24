import AnggotaLayout from "@/Layouts/AnggotaLayout";
import FlashMessage from "@/Components/FlashMessage";
import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import moment from "moment";

export default function Index({ products, auth, errors, flashMessage, props }) {
    return (
        <AnggotaLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Produk Iuran Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Iuran" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    List Data Iuran Asosiasi Pengajar Hukum Adat (APHA)
                </h1>
            </div>

            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <div className="container mt-4">
                <h4 className="mb-3">Daftar Produk</h4>

                {products.length > 0 ? (
                    <div className="row">
                        {products.map((product) => {
                            const now = new Date();
                            const startDate = new Date(product.start_date);
                            const endDate = new Date(product.end_date);

                            // ⏰ Cek tanggal masih dalam rentang
                            const isWithinDateRange =
                                now >= startDate && now <= endDate;

                            // ✅ Status aktif untuk tombol Bayar
                            const isAvailable =
                                product.is_active && isWithinDateRange;

                            // ✅ Status aktif untuk visibilitas produk
                            const isActive = product.is_active;

                            // 🔒 Kalau produk tidak aktif, jangan tampilkan
                            if (!isActive) return null;

                            return (
                                <div key={product.id} className="col-md-4 mb-4">
                                    <div
                                        className={`card shadow-sm h-100 ${
                                            !isAvailable
                                                ? "border-secondary bg-light"
                                                : ""
                                        }`}
                                    >
                                        <div className="card-body d-flex flex-column">
                                            {/* 🏷️ Nama Produk */}
                                            <h5 className="card-title fw-bold text-primary mb-2">
                                                {product.name}
                                            </h5>

                                            {/* 💬 Deskripsi */}
                                            <p className="card-text text-muted flex-grow-1">
                                                {product.description ||
                                                    "Tidak ada deskripsi."}
                                            </p>

                                            {/* 🗓️ Periode Berlaku */}
                                            <div className="small text-secondary mb-2">
                                                <i className="bi bi-calendar-event"></i>{" "}
                                                {moment(
                                                    product.start_date,
                                                ).format("D MMMM YYYY")}{" "}
                                                -{" "}
                                                {moment(
                                                    product.end_date,
                                                ).format("D MMMM YYYY")}
                                            </div>

                                            {/* 💰 Harga */}
                                            <h6 className="mt-2 mb-3 text-success fw-bold">
                                                Rp{" "}
                                                {product.price.toLocaleString(
                                                    "id-ID",
                                                )}
                                            </h6>

                                            {/* ⚙️ Tombol Aksi */}
                                            <div className="mt-auto">
                                                {isAvailable ? (
                                                    <button
                                                        onClick={() =>
                                                            router.post(
                                                                route(
                                                                    "anggota.dashboard.produk.bayar",
                                                                    product.id,
                                                                ),
                                                            )
                                                        }
                                                        className="btn btn-success w-100"
                                                    >
                                                        Bayar Sekarang
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-secondary w-100"
                                                        disabled
                                                    >
                                                        Tidak Tersedia
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* 🔖 Status */}
                                        <div
                                            className={`card-footer text-center fw-semibold ${
                                                isAvailable
                                                    ? "text-success"
                                                    : "text-danger"
                                            }`}
                                        >
                                            {isAvailable
                                                ? "Aktif"
                                                : "Tidak Aktif / Melewati Tanggal"}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="alert alert-info text-center">
                        Belum ada produk tersedia.
                    </div>
                )}
            </div>
        </AnggotaLayout>
    );
}
