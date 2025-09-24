import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
import PDFFile from "@/Components/Pdf/KTAPDF";
//import PDFFile from "@/Components/Pdf/IDCARDPDF";
import moment from "moment";
//import parse from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import LogoApha from "@/Components/photos/Logo-Apha";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useCallback } from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
//import InvoicePDF from "@/Components/PDF/InvoicePDF";

export default function List({
    featuredBuku,
    payment,
    props,
    tanggal_print,
    member,
    img_kta,
    qrcode,
}) {
    //Page
    {
        /*
    const PAGE_SIZES = {
        "4A0": [4767.87, 6740.79],
        "2A0": [3370.39, 4767.87],
        A0: [2383.94, 3370.39],
        A1: [1683.78, 2383.94],
        A2: [1190.55, 1683.78],
        A3: [841.89, 1190.55],
        A4: [595.28, 841.89],
        A5: [419.53, 595.28],
        A6: [297.64, 419.53],
        A7: [209.76, 297.64],
        A8: [147.4, 209.76],
        A9: [104.88, 147.4],
        A10: [73.7, 104.88],
        B0: [2834.65, 4008.19],
        B1: [2004.09, 2834.65],
        B2: [1417.32, 2004.09],
        B3: [1000.63, 1417.32],
        B4: [708.66, 1000.63],
        B5: [498.9, 708.66],
        B6: [354.33, 498.9],
        B7: [249.45, 354.33],
        B8: [175.75, 249.45],
        B9: [124.72, 175.75],
        B10: [87.87, 124.72],
        C0: [2599.37, 3676.54],
        C1: [1836.85, 2599.37],
        C2: [1298.27, 1836.85],
        C3: [918.43, 1298.27],
        C4: [649.13, 918.43],
        C5: [459.21, 649.13],
        C6: [323.15, 459.21],
        C7: [229.61, 323.15],
        C8: [161.57, 229.61],
        C9: [113.39, 161.57],
        C10: [79.37, 113.39],
        RA0: [2437.8, 3458.27],
        RA1: [1729.13, 2437.8],
        RA2: [1218.9, 1729.13],
        RA3: [864.57, 1218.9],
        RA4: [609.45, 864.57],
        SRA0: [2551.18, 3628.35],
        SRA1: [1814.17, 2551.18],
        SRA2: [1275.59, 1814.17],
        SRA3: [907.09, 1275.59],
        SRA4: [637.8, 907.09],
        EXECUTIVE: [521.86, 756.0],
        FOLIO: [612.0, 936.0],
        LEGAL: [612.0, 1008.0],
        LETTER: [612.0, 792.0],
        TABLOID: [792.0, 1224.0],
        ID1: [153, 243],
    };
    */
    }

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

    //download qr
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = qrcode;
        link.download = `QR_${member.kta_token || "kta"}.png`;
        link.click();
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Informasi Anggota - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>
            <div className="container">
                <div className="row g-4 justify-content-center mt-5">
                    <h2 className="text-center mb-4 fw-bold">
                        Informasi Anggota KTA
                    </h2>
                    {
                        //Tab 1>
                    }
                    <div className="col-md-8  ">
                        {
                            //Invoice Date
                            //ID KTA
                        }

                        {
                            //KTA Normal
                        }
                        {/* Header */}
                        <div className="card shadow-sm border-0 mb-4">
                            <div className="row g-3 align-items-center p-4">
                                <div className="col-lg-6">
                                    <h3 className="mb-1">{payment.nama}</h3>
                                    <p className="text-muted mb-0">
                                        No Kartu Tanda Anggota{" "}
                                        <strong>#{member.no_kta}</strong>
                                    </p>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    {payment.status == 1 ? (
                                        <span className="badge bg-success px-3 py-2">
                                            Aktif
                                        </span>
                                    ) : (
                                        <span className="badge bg-danger px-3 py-2">
                                            Belum Aktif
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {
                            //Row 2
                        }

                        {/* Detail Anggota */}
                        <div className="card shadow-sm border-0 mb-4">
                            <div className="row g-4 p-4">
                                {/* Foto / KTA */}
                                <div className="col-lg-5 text-center">
                                    {member.img_kta ? (
                                        <img
                                            src={`/storage/${member.img_kta}`}
                                            alt="Foto KTA"
                                            className="img-fluid rounded shadow-sm mb-3"
                                        />
                                    ) : (
                                        <img
                                            src={`/storage/${member.img}`}
                                            alt="Foto Anggota"
                                            className="img-fluid rounded shadow-sm mb-3"
                                        />
                                    )}

                                    <a
                                        href={route(
                                            "anggota.dashboard.anggotaprofile.imgkta"
                                        )}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-success btn-sm w-100"
                                    >
                                        Lihat Name Card
                                    </a>
                                </div>

                                {/* Data Anggota */}
                                <div className="col-lg-7">
                                    <table className="table table-sm table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <th className="w-50">
                                                    NIDN/NIDK
                                                </th>
                                                <td>{member.kode}</td>
                                            </tr>
                                            <tr>
                                                <th>Jenis Kelamin</th>
                                                <td>
                                                    {member.jk === "lk"
                                                        ? "Laki-Laki"
                                                        : "Perempuan"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Alamat</th>
                                                <td>{member.alamat}</td>
                                            </tr>
                                            <tr>
                                                <th>Universitas</th>
                                                <td>{member.universitas}</td>
                                            </tr>
                                            <tr>
                                                <th>Masa Berlaku</th>
                                                <td>2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/*
                        <figure class="card Card_APHA">
                            <h1 className="h1-APHA">APHA</h1>
                            <h1 className="h1-APHA id_h1-2">
                                ASOSIASI PENGAJAR HUKUM ADAT
                            </h1>

                            <figcaption>
                                <h2 className="Nama_id">
                                    {member.nama} <br />
                                    <span className="id_kta">
                                        {member.no_kta}
                                    </span>
                                </h2>
                                <tr>
                                    <td>Afiliasi</td>
                                    <td>: {member.universitas}</td>
                                </tr>
                                <tr>
                                    <td>Masa Berlaku</td>
                                    <td>: 2024</td>
                                </tr>

                                {/** 
                                <div class="icons">
                                    <i class="fab fa-facebook-square"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-snapchat-square"></i>
                                </div>*/
                        /*}
                            </figcaption>

                            <img
                                class="img-idcard"
                                //src={`/storage/logo/Logo-Apha-card.png`}
                                src={`https://apha.or.id/storage/logo/Logo-AphaC.png`}
                            />

                            <div class="position">
                                <span>
                                    Fakultas Hukum Universitas Trisakti Kampus A
                                    Gedung H Lantai 6
                                </span>{" "}
                                <br />
                                <span>
                                    Jl. Kyai Tapa No.1 Grogol Jakarta Barat.
                                </span>
                            </div>
                        </figure>
                        */}

                        {
                            //Invoice
                        }
                    </div>

                    {
                        //end tab
                    }
                    {/* Sidebar Download */}
                    <div className="col-md-4">
                        //taro sini.
                        <div className="d-flex justify-content-center mb-3">
                            <img
                                src={qrcode}
                                alt="QR KTA"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxWidth: "220px",
                                    height: "auto",
                                }}
                            />
                        </div>
                        {/* Tombol Download & Verifikasi */}
                        <div className="row g-2">
                            <div className="col-6">
                                <a
                                    className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                                    onClick={handleDownload}
                                >
                                    <i className="bi bi-download me-2"></i>{" "}
                                    Download QR
                                </a>
                            </div>
                            <div className="col-6">
                                <a
                                    className="btn btn-info w-100 d-flex align-items-center justify-content-center"
                                    target="_blank"
                                    href={route(
                                        "frontverify.kta",
                                        member.kta_token
                                    )}
                                >
                                    <i className="bi bi-box-arrow-up-right me-2"></i>{" "}
                                    Lihat
                                </a>
                            </div>
                        </div>
                        <div className="card shadow-sm border-0 p-3">
                            <h5 className="mb-3">Download KTA</h5>
                            <PDFDownloadLink
                                document={
                                    <PDFFile
                                        no_invoice={member.no_kta}
                                        img={member.img}
                                        img_kta={member.img_kta}
                                        nama={member.nama}
                                        no_kta={member.no_kta}
                                        universitas={member.universitas}
                                        alamat={member.alamat}
                                        tanggal_print={tanggal_print}
                                        qrCodeUrl={qrcode}
                                        expired_date={member.expired_date}
                                        url_img="https://apha.or.id/storage/logo/Logo-AphaC.png"
                                    />
                                }
                                fileName={"KTA-" + member.slug_kta}
                            >
                                {({ loading }) =>
                                    loading ? (
                                        <a className="btn btn-outline-success w-100">
                                            Loading...
                                        </a>
                                    ) : (
                                        <a className="btn btn-success w-100">
                                            Download ID Card
                                        </a>
                                    )
                                }
                            </PDFDownloadLink>
                            <p className="mt-3 text-muted small">
                                Dicetak tanggal {tanggal_print}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
