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
                    Pengurus - Asosiasi Pengajar Hukum Adat (APHA) Indonesia
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
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform =
                                                    "scale(1.03)";
                                                e.currentTarget.style.boxShadow =
                                                    "0 10px 20px rgba(0, 123, 255, 0.15)";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform =
                                                    "scale(1)";
                                                e.currentTarget.style.boxShadow =
                                                    "none";
                                            }}
                                        />
                                    );
                                })()}
                            </div>

                            {/* Nama dan Jabatan */}
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

                            {/* Tombol Scopus, Scholar, Sinta */}
                            <div className="d-flex justify-content-center gap-2 mt-3">
                                {commitee.link_scopus && (
                                    <a
                                        href={
                                            commitee.link_scopus
                                                ? commitee.link_scopus.startsWith(
                                                      "http"
                                                  )
                                                    ? commitee.link_scopus
                                                    : `https://www.scopus.com/authid/detail.uri?authorId=${commitee.link_scopus}`
                                                : "#"
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
                                            commitee.link_scholar
                                                ? commitee.link_scholar.startsWith(
                                                      "http"
                                                  )
                                                    ? commitee.link_scholar
                                                    : `https://scholar.google.co.id/citations?user=${commitee.link_scholar}`
                                                : "#"
                                        }
                                        //href={commitee.link_scholar}
                                        target="_blank"
                                        className="btn btn-outline-success btn-sm px-3"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-mortarboard me-1"></i>{" "}
                                        Scholar
                                    </a>
                                )}

                                {commitee.link_sinta && (
                                    <a
                                        href={
                                            commitee.link_sinta
                                                ? commitee.link_sinta.startsWith(
                                                      "http"
                                                  )
                                                    ? commitee.link_sinta
                                                    : `https://sinta.kemdikbud.go.id/authors/profile/${commitee.link_sinta}`
                                                : "#"
                                        }
                                        target="_blank"
                                        className="btn btn-outline-warning btn-sm px-3"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-stars me-1"></i>{" "}
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

                            <div className="mb-4">
                                {/* Baris pertama: Nama Divisi */}
                                <h5 className="fw-semibold text-primary mb-1">
                                    {commitee.namadivisi || ""}
                                </h5>

                                {/* Baris kedua: Subdivisi - Jabatan */}
                                <h6 className="text-secondary fw-normal">
                                    {(commitee.namasubdivisi || "") +
                                        (commitee.namasubdivisi &&
                                        commitee.namajabatan
                                            ? " - "
                                            : "") +
                                        (commitee.namajabatan || "")}
                                </h6>
                            </div>

                            {/* DESKRIPSI */}
                            <div className="p-3 bg-white rounded shadow-sm border mb-3">
                                {commitee.description ? (
                                    <div className="kon-10">
                                        {parse(commitee.description)}
                                    </div>
                                ) : (
                                    <p className="text-muted fst-italic mb-0">
                                        Belum ada deskripsi biodata yang
                                        ditambahkan.
                                    </p>
                                )}
                            </div>

                            {/* INFO TAMBAHAN */}
                            {commitee.pendidikan && (
                                <div className="mb-3">
                                    <h6 className="text-uppercase text-secondary mb-2">
                                        Pendidikan
                                    </h6>
                                    <div className="bg-white rounded shadow-sm border p-3">
                                        {parse(commitee.pendidikan)}
                                    </div>
                                </div>
                            )}

                            <hr />

                            {/* SHARE AREA */}
                            <div className="detail-article__share-wrapper mt-4">
                                <b className="text-uppercase text-secondary">
                                    Bagikan Profil
                                </b>
                                <div className="detail-article__share mt-2 d-flex align-items-center gap-3">
                                    <CopyToClipboard
                                        onCopy={onCopy}
                                        text={url_homes}
                                    >
                                        <span className="cursor-pointer">
                                            <img
                                                src={`/storage/icon/Chain.gif`}
                                                className="detail-article__share-icon"
                                                alt="Copy Link"
                                            />
                                        </span>
                                    </CopyToClipboard>

                                    <a
                                        href={`https://api.whatsapp.com/send?text=${url_homes}`}
                                        className="detail-article__share-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={`/storage/icon/Whatsapp.gif`}
                                            className="detail-article__share-icon"
                                            alt="Share WhatsApp"
                                        />
                                    </a>

                                    <a
                                        href={`https://facebook.com/sharer.php?u=${url_homes}`}
                                        className="detail-article__share-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={`/storage/icon/Facebook.gif`}
                                            className="detail-article__share-icon"
                                            alt="Share Facebook"
                                        />
                                    </a>

                                    {copied && (
                                        <span className="text-success small">
                                            🔗 Link berhasil disalin
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
