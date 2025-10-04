import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState, useCallback } from "react";
//import ListTerkait from "@/Components/News/ListTerkait";

export default function List({
    nama,
    no,
    slug,
    judul,
    serti_token,
    img,
    props,
    sertifikat,
    qrcode,
    qr,
}) {
    //Copy Button
    const [copied, setCopied] = useState(false);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const url_homes = window.location.href;
    //const parse = require("html-react-parser");

    const today = moment();

    const expiredDate = sertifikat.expired_date
        ? moment(sertifikat.expired_date)
        : null;

    const remainingDays = expiredDate ? expiredDate.diff(today, "days") : null;
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Cek Sertifikat - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>
            <div className="container">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-md-11 ">
                        <div className="container mt-5">
                            <div className="text-center mb-5">
                                <div className="verify-badge">✓</div>

                                <h1 className="fw-bold mt-3">
                                    Sertifikat Digital APHA
                                </h1>

                                <p className="text-muted">
                                    Dokumen sertifikat resmi yang diterbitkan
                                    oleh Asosiasi Pengajar Hukum Adat Indonesia
                                </p>
                            </div>
                            {/* INFO */}
                            <div className="card border-0 shadow-lg rounded-4 mb-4">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <span className="badge bg-success mb-3">
                                                    VERIFIED
                                                </span>
                                                <h3 className="fw-bold">
                                                    {sertifikat.nama}
                                                </h3>
                                                <hr />
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
                                                        Judul Acara
                                                    </small>
                                                    <div className="fw-bold">
                                                        {sertifikat.judul}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <small className="text-muted d-block">
                                                        Status Sertifikat
                                                    </small>

                                                    {Number(
                                                        sertifikat.status,
                                                    ) === 1 ? (
                                                        <span className="badge bg-success">
                                                            ✓ Aktif
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-danger">
                                                            ✕ Tidak Aktif
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col-6">
                                                        <small className="text-muted d-block">
                                                            Publish
                                                        </small>

                                                        <strong>
                                                            {moment(
                                                                sertifikat.publish_at,
                                                            ).format(
                                                                "DD MMM YYYY",
                                                            )}
                                                        </strong>
                                                    </div>

                                                    <div className="col-6">
                                                        <small className="text-muted d-block">
                                                            Masa Berlaku
                                                        </small>

                                                        <strong>
                                                            {sertifikat.expired_date
                                                                ? moment(
                                                                      sertifikat.expired_date,
                                                                  ).format(
                                                                      "DD MMM YYYY",
                                                                  )
                                                                : "♾ Permanen"}
                                                        </strong>
                                                    </div>

                                                    <div className="col-6">
                                                        <small className="text-muted d-block">
                                                            Masa Berlaku
                                                        </small>

                                                        {sertifikat.expired_date ? (
                                                            <>
                                                                <strong>
                                                                    {expiredDate.format(
                                                                        "DD MMM YYYY",
                                                                    )}
                                                                </strong>

                                                                <div className="mt-1">
                                                                    {remainingDays >
                                                                        30 && (
                                                                        <span className="badge bg-success">
                                                                            {
                                                                                remainingDays
                                                                            }{" "}
                                                                            Hari
                                                                            Lagi
                                                                        </span>
                                                                    )}

                                                                    {remainingDays >=
                                                                        0 &&
                                                                        remainingDays <=
                                                                            30 && (
                                                                            <span className="badge bg-warning text-dark">
                                                                                Berakhir{" "}
                                                                                {
                                                                                    remainingDays
                                                                                }{" "}
                                                                                Hari
                                                                                Lagi
                                                                            </span>
                                                                        )}

                                                                    {remainingDays <
                                                                        0 && (
                                                                        <span className="badge bg-danger">
                                                                            Kedaluwarsa
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <strong>
                                                                    Berlaku
                                                                    Permanen
                                                                </strong>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="border rounded-4 overflow-hidden">
                                                {sertifikat.img ? (
                                                    <span>
                                                        <embed
                                                            src={sertifikat.img}
                                                            width="100%"
                                                            height="750px"
                                                            title="Preview Sertifikat"
                                                        />
                                                        <a
                                                            href={
                                                                sertifikat.img
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary m-2"
                                                        >
                                                            Buka Sertifikat
                                                        </a>
                                                    </span>
                                                ) : sertifikat.link ? (
                                                    <span>
                                                        <iframe
                                                            src={
                                                                sertifikat.link
                                                            }
                                                            width="100%"
                                                            height="750px"
                                                            title="Preview Sertifikat"
                                                        />
                                                        <a
                                                            href={
                                                                sertifikat.link
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary m-2"
                                                        >
                                                            Buka Sertifikat
                                                        </a>
                                                    </span>
                                                ) : (
                                                    <div className="p-5 text-center">
                                                        Tidak ada file
                                                        sertifikat
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* DESKRIPSI */}{" "}
                            {sertifikat.konten && (
                                <div className="card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h4 className="fw-bold mb-3">
                                            Tentang Sertifikat
                                        </h4>
                                        {parse(sertifikat.konten)}
                                    </div>
                                </div>
                            )}
                            {/* QR */}{" "}
                            {qrcode && (
                                <div className="card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body text-center">
                                        <h4 className="mb-3">QR Verifikasi</h4>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: qrcode,
                                            }}
                                        />
                                        <small className="text-muted">
                                            Scan QR Code untuk memverifikasi
                                            keaslian sertifikat.{" "}
                                        </small>
                                    </div>
                                </div>
                            )}
                            {/* FOOTER */}
                            <div className="text-center mt-4">
                                <Link
                                    href={route("frontsertifikat.index")}
                                    className="btn btn-outline-primary"
                                >
                                    ← Kembali ke Pencarian
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*end News*/}
                </div>
            </div>
        </FrontendLayout>
    );
}
