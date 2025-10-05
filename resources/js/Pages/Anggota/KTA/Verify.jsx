import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import moment from "moment";
import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useCallback } from "react";

export default function List({
    featuredBuku,
    commitee,
    cururl,
    props,
    qrcode,
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
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Verifikasi Anggota - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* ===== Header ===== */}
                        <div className="text-center mb-5">
                            <img
                                src="/storage/logo/Logo-AphaC.png"
                                alt="Logo APHA"
                                width="90"
                                className="mb-3"
                            />
                            <h2 className="fw-bold text-primary mb-1">
                                Verifikasi Keanggotaan APHA Indonesia
                            </h2>
                            <p className="text-secondary">
                                Halaman ini menampilkan data resmi anggota yang
                                terdaftar berdasarkan kode verifikasi unik (KTA
                                Token).
                            </p>
                        </div>

                        {/* ===== Profil Card ===== */}
                        <div className="row g-4 bg-white rounded shadow-sm p-4">
                            {/* Foto dan Status */}
                            <div className="col-md-4 text-center border-end">
                                <div
                                    className="p-2 rounded position-relative"
                                    style={{
                                        background:
                                            "linear-gradient(145deg,#f7f9ff,#ffffff)",
                                        boxShadow:
                                            "inset 0 0 10px rgba(0,0,0,0.05), 0 0 8px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    {/* Foto Profil */}
                                    <img
                                        src={
                                            commitee.img
                                                ? `/storage/${commitee.img}`
                                                : commitee.gender == "pr"
                                                  ? "https://i.imgur.com/Ap5NojU.png"
                                                  : "https://i.imgur.com/T0CKh3Z.png"
                                        }
                                        alt={commitee.nama}
                                        className="img-fluid rounded-3 mb-3"
                                        style={{
                                            height: "320px",
                                            objectFit: "cover",
                                            width: "100%",
                                        }}
                                    />

                                    {/* Nama */}
                                    <h5 className="fw-bold text-dark mb-1">
                                        {commitee.nama}
                                    </h5>
                                    <div className="text-muted mb-2">
                                        {commitee.namajabatan || "-"}
                                    </div>

                                    {/* Status */}
                                    {commitee.status == 1 ? (
                                        <span className="badge bg-success px-3 py-2 fs-6 shadow-sm">
                                            Anggota Aktif
                                        </span>
                                    ) : (
                                        <span className="badge bg-secondary px-3 py-2 fs-6 shadow-sm">
                                            Tidak Aktif
                                        </span>
                                    )}

                                    {/* Link Eksternal */}
                                    <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                                        {commitee.link_scopus && (
                                            <a
                                                href={
                                                    commitee.link_scopus.startsWith(
                                                        "http",
                                                    )
                                                        ? commitee.link_scopus
                                                        : `https://www.scopus.com/authid/detail.uri?authorId=${commitee.link_scopus}`
                                                }
                                                target="_blank"
                                                className="btn btn-outline-primary btn-sm"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-journal-text me-1"></i>
                                                Scopus
                                            </a>
                                        )}
                                        {commitee.link_scholar && (
                                            <a
                                                href={
                                                    commitee.link_scholar.startsWith(
                                                        "http",
                                                    )
                                                        ? commitee.link_scholar
                                                        : `https://scholar.google.co.id/citations?user=${commitee.link_scholar}`
                                                }
                                                target="_blank"
                                                className="btn btn-outline-success btn-sm"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-mortarboard me-1"></i>
                                                Scholar
                                            </a>
                                        )}
                                        {commitee.link_sinta && (
                                            <a
                                                href={
                                                    commitee.link_sinta.startsWith(
                                                        "http",
                                                    )
                                                        ? commitee.link_sinta
                                                        : `https://sinta.kemdikbud.go.id/authors/profile/${commitee.link_sinta}`
                                                }
                                                target="_blank"
                                                className="btn btn-outline-warning btn-sm"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-bookmark-star me-1"></i>
                                                Sinta
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Detail Profil */}
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h4 className="fw-bold text-primary mb-1">
                                        {commitee.nama}
                                    </h4>
                                    <div className="text-muted mb-2">
                                        {commitee.namadivisi}{" "}
                                        {commitee.namasubdivisi
                                            ? `- ${commitee.namasubdivisi}`
                                            : ""}
                                    </div>
                                </div>

                                {/* Detail Informasi */}
                                <div className="p-3 bg-light rounded border mb-3">
                                    <h5 className="fw-semibold text-primary mb-3">
                                        Detail Keanggotaan
                                    </h5>
                                    <table className="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    Nomor KTA
                                                </td>
                                                <td>
                                                    : {commitee.no_kta || "-"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    Jenis Kelamin
                                                </td>
                                                <td>
                                                    :{" "}
                                                    {commitee.jk == "lk"
                                                        ? "Laki-laki"
                                                        : commitee.jk == "pr"
                                                          ? "Perempuan"
                                                          : "-"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    Universitas
                                                </td>
                                                <td>
                                                    :{" "}
                                                    {commitee.universitas ||
                                                        "-"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    Fakultas
                                                </td>
                                                <td>
                                                    : {commitee.fakultas || "-"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* QR Code & Tombol */}
                                <div className="text-center mt-4">
                                    {qrcode && (
                                        <>
                                            <img
                                                src={`data:image/png;base64,${qrcode}`}
                                                alt="QR Code"
                                                className="img-fluid mb-3"
                                                style={{
                                                    maxWidth: "180px",
                                                    height: "auto",
                                                }}
                                            />
                                            <div className="d-flex justify-content-center gap-3">
                                                <button
                                                    className="btn btn-success"
                                                    onClick={handleDownload}
                                                >
                                                    <i className="bi bi-download me-2"></i>
                                                    Download QR
                                                </button>
                                                <a
                                                    href={route(
                                                        "frontverify.kta",
                                                        commitee.kta_token,
                                                    )}
                                                    target="_blank"
                                                    className="btn btn-outline-primary"
                                                >
                                                    <i className="bi bi-search me-2"></i>
                                                    Lihat Verifikasi
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-5 text-muted small">
                            <p>
                                ✅ Data ini diverifikasi secara resmi oleh
                                sistem keanggotaan{" "}
                                <strong>APHA Indonesia</strong>.
                            </p>
                            <p className="mb-0">
                                © {new Date().getFullYear()} APHA Indonesia. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
