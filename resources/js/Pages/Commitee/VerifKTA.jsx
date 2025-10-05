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

export default function List({ featuredBuku, commitee, cururl, props }) {
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
                    Biodata - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
            </Head>
            <div className="container py-5">
                <div className="row g-5 justify-content-center align-items-start bg-light rounded shadow-sm p-4">
                    {/* FOTO PROFIL */}
                    <div className="col-md-5 text-center">
                        <div
                            className="portrait-frame mx-auto"
                            style={{
                                background:
                                    "linear-gradient(145deg, #f0f4ff, #ffffff)",
                                borderRadius: "18px",
                                boxShadow:
                                    "0 8px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255,255,255,0.6)",
                                padding: "14px",
                                border: "1px solid rgba(220,230,255,0.7)",
                            }}
                        >
                            <div
                                className="portrait-inner position-relative"
                                style={{
                                    borderRadius: "14px",
                                    overflow: "hidden",
                                    background:
                                        "linear-gradient(180deg, #fff, #eef4ff)",
                                    boxShadow:
                                        "inset 0 0 12px rgba(0,0,0,0.05), 0 0 10px rgba(0,123,255,0.05)",
                                }}
                            >
                                {(() => {
                                    let imgSrc = "";

                                    if (commitee.img) {
                                        imgSrc = `/storage/${commitee.img}`;
                                    } else if (commitee.gender == 2) {
                                        imgSrc =
                                            "https://i.imgur.com/Ap5NojU.png";
                                    } else {
                                        imgSrc =
                                            "https://i.imgur.com/T0CKh3Z.png";
                                    }

                                    return (
                                        <img
                                            src={imgSrc}
                                            alt={commitee.nama}
                                            className="img-fluid"
                                            style={{
                                                width: "100%",
                                                height: "400px",
                                                objectFit: "cover",
                                                borderRadius: "14px",
                                                transition:
                                                    "transform 0.4s ease, box-shadow 0.4s ease",
                                            }}
                                        />
                                    );
                                })()}
                            </div>

                            {/* Nama & Jabatan */}
                            <div
                                className="portrait-caption mt-3 fw-semibold"
                                style={{ fontSize: "1rem", color: "#2b3d63" }}
                            >
                                {commitee.nama}
                            </div>
                            <div
                                style={{ fontSize: "0.9rem", color: "#6c7aa0" }}
                            >
                                {commitee.namajabatan}
                            </div>

                            {/*  StatusKeanggotaan */}
                            <div className="mt-3">
                                {commitee.status === 1 ? (
                                    <span className="badge bg-success px-3 py-2 fs-6 shadow-sm">
                                        Anggota Aktif
                                    </span>
                                ) : (
                                    <span className="badge bg-secondary px-3 py-2 fs-6 shadow-sm">
                                        Anggota Tidak Aktif
                                    </span>
                                )}
                            </div>

                            {/* Link Scopus / Scholar / Sinta */}
                            <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                                {commitee.link_scopus && (
                                    <a
                                        href={
                                            commitee.link_scopus.startsWith(
                                                "http"
                                            )
                                                ? commitee.link_scopus
                                                : `https://www.scopus.com/authid/detail.uri?authorId=${commitee.link_scopus}`
                                        }
                                        target="_blank"
                                        className="btn btn-outline-primary btn-sm px-3"
                                        rel="noopener noreferrer"
                                    >
                                        Scopus
                                    </a>
                                )}

                                {commitee.link_scholar && (
                                    <a
                                        href={
                                            commitee.link_scholar.startsWith(
                                                "http"
                                            )
                                                ? commitee.link_scholar
                                                : `https://scholar.google.co.id/citations?user=${commitee.link_scholar}`
                                        }
                                        target="_blank"
                                        className="btn btn-outline-success btn-sm px-3"
                                        rel="noopener noreferrer"
                                    >
                                        Scholar
                                    </a>
                                )}

                                {commitee.link_sinta && (
                                    <a
                                        href={
                                            commitee.link_sinta.startsWith(
                                                "http"
                                            )
                                                ? commitee.link_sinta
                                                : `https://sinta.kemdikbud.go.id/authors/profile/${commitee.link_sinta}`
                                        }
                                        target="_blank"
                                        className="btn btn-outline-warning btn-sm px-3"
                                        rel="noopener noreferrer"
                                    >
                                        Sinta
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* DETAIL PROFIL */}
                    <div className="col-md-7">
                        <article className="blog-post">
                            <h2 className="fw-bold text-primary mb-1">
                                {commitee.nama}
                            </h2>
                            <hr className="mt-2 mb-3" />

                            {/* Divisi - Subdivisi - Jabatan */}
                            <div className="mb-4">
                                <h5 className="fw-semibold text-primary mb-1">
                                    {commitee.namadivisi || ""}
                                </h5>
                                <h6 className="text-secondary fw-normal">
                                    {(commitee.namasubdivisi || "") +
                                        (commitee.namasubdivisi &&
                                        commitee.namajabatan
                                            ? " - "
                                            : "") +
                                        (commitee.namajabatan || "")}
                                </h6>
                            </div>

                            {/* Deskripsi */}
                            <div className="p-3 bg-white rounded shadow-sm border mb-3">
                                <div className="p-3 bg-white rounded shadow-sm border mb-3">
                                    <h5 className="fw-bold text-primary mb-3">
                                        Detail Informasi
                                    </h5>
                                    <table className="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    No KTA
                                                </td>
                                                <td>
                                                    :{" "}
                                                    {commitee.no_kta ||
                                                        "Belum terinput"}
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
                                                        "Belum terinput"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="fw-semibold text-secondary">
                                                    Fakultas
                                                </td>
                                                <td>
                                                    :{" "}
                                                    {commitee.fakultas ||
                                                        "Belum terinput"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {commitee && commitee.slug ? (
                                    <Link
                                        href={route(
                                            "frontpengurus.commitee.show",
                                            commitee.slug
                                        )}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Lihat Biodata
                                    </Link>
                                ) : (
                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        disabled
                                    >
                                        Belum Ada Biodata
                                    </button>
                                )}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
