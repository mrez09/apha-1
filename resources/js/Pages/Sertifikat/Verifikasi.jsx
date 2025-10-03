import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Link } from "@inertiajs/react";
import moment from "moment";

export default function Verifikasi({ valid, sertifikat, slug }) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Cek Sertifikat - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {valid ? (
                            <div className="card border-0 shadow-lg rounded-4">
                                <div className="card-body p-5">
                                    <div className="text-center mb-4">
                                        <div
                                            className="mx-auto mb-3"
                                            style={{
                                                width: "90px",
                                                height: "90px",
                                                borderRadius: "50%",
                                                background:
                                                    "linear-gradient(135deg,#198754,#20c997)",
                                                color: "#fff",
                                                fontSize: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            ✓
                                        </div>
                                        <h2 className="fw-bold text-success">
                                            Sertifikat Terverifikasi
                                        </h2>
                                        <p className="text-muted">
                                            Data sertifikat ditemukan dalam
                                            sistem APHA
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Nama
                                                </small>
                                                <div className="fw-bold">
                                                    {sertifikat.nama}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Nomor Sertifikat
                                                </small>
                                                <div className="fw-bold">
                                                    {sertifikat.no}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Acara
                                                </small>
                                                <div>{sertifikat.judul} </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Kategori
                                                </small>
                                                <div>{sertifikat.category}</div>
                                            </div>
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Status
                                                </small>
                                                <div>
                                                    {Number(
                                                        sertifikat.status,
                                                    ) === 1 ? (
                                                        <span className="badge bg-success">
                                                            Aktif
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-danger">
                                                            Tidak Aktif
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <small className="text-muted">
                                                    Masa Berlaku
                                                </small>
                                                <div>
                                                    {sertifikat.expired_date
                                                        ? moment(
                                                              sertifikat.expired_date,
                                                          ).format(
                                                              "DD MMMM YYYY",
                                                          )
                                                        : "♾ Berlaku Permanen"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* THUMBNAIL */}
                                    {sertifikat.img && (
                                        <div className="text-center mt-4">
                                            <h5 className="mb-3">
                                                Preview Sertifikat
                                            </h5>
                                            <img
                                                src={sertifikat.img}
                                                alt={sertifikat.no}
                                                className="img-fluid rounded shadow"
                                                style={{
                                                    maxHeight: "250px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    )}
                                    {/* BUTTON */}
                                    <div className="text-center mt-4">
                                        <Link
                                            href={route(
                                                "frontsertifikat.verify",
                                                sertifikat.slug,
                                            )}
                                            className="btn btn-primary px-4"
                                        >
                                            Lihat Sertifikat
                                        </Link>
                                    </div>
                                    <div
                                        className="alert alert-warning mt-3 mb-0"
                                        role="alert"
                                    >
                                        ⚠️ Harap tidak melakukan pencarian
                                        berulang atau spam. Sistem akan
                                        membatasi permintaan berlebihan secara
                                        otomatis. <br /> ❤️ aktivitas dan alamat
                                        IP Anda tercatat untuk keamanan sistem.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card border-danger shadow">
                                <div className="card-body p-5 text-center">
                                    <div style={{ fontSize: "70px" }}>❌</div>
                                    <h2 className="text-danger">
                                        Sertifikat Tidak Valid{" "}
                                    </h2>
                                    <p>
                                        Nomor sertifikat <strong>{slug}</strong>
                                        tidak ditemukan.
                                    </p>

                                    <Link
                                        href={route("frontsertifikat.index")}
                                        className="btn btn-outline-secondary"
                                    >
                                        Kembali
                                    </Link>
                                    <div
                                        className="alert alert-warning mt-3 mb-0"
                                        role="alert"
                                    >
                                        ⚠️ Harap tidak melakukan pencarian
                                        berulang atau spam. Sistem akan
                                        membatasi permintaan berlebihan secara
                                        otomatis. <br /> ❤️ aktivitas dan alamat
                                        IP Anda tercatat untuk keamanan sistem.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
