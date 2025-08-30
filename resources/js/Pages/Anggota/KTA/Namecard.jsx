import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import ListNews from "@/Components/News/ListNews";
//import PDFFile from "@/Components/Pdf/KTAPDF";
import PDFFile from "@/Components/Pdf/IDCARDPDF";
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
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    Informasi Anggota - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>
            <div className="container">
                <div className="row g-4 justify-content-center mt-5">
                    <h2 className="text-center mb-4 fw-bold">
                        Informasi Kartu Nama Anggota
                    </h2>

                    <div className="col-md-8  ">
                        <div className="row border">
                            <div className="card shadow-sm border-0 mb-4">
                                <div className="row g-3 align-items-center p-4">
                                    <div className="col-lg-6">
                                        <h3 className="mb-1">{member.nama}</h3>
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
                            {/* Detail Anggota */}
                            <div className="card shadow-sm border-0 mb-4">
                                <div className="row p-4">
                                    <div className="col-lg-6">
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
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-6">
                                        <table className="table table-sm table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>Universitas</th>
                                                    <td>
                                                        {member.universitas}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Masa Berlaku</th>
                                                    <td>2024</td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td>{member.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                </div>*/}
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

                        {
                            //Invoice
                        }
                    </div>

                    {
                        //end tab
                    }
                    {/* Kolom Samping */}
                    <div className="col-md-4 mt-3">
                        <div className="card shadow-sm border-0 p-3">
                            <h5 className="mb-3">Download</h5>
                            <PDFDownloadLink
                                document={
                                    <PDFFile
                                        no_invoice={member.no_kta}
                                        judul="abc"
                                        subjudul="abc"
                                        slug_judul="abc"
                                        img={member.img}
                                        status="abc"
                                        konten="abc"
                                        nama={member.nama}
                                        no_kta={member.no_kta}
                                        universitas={member.universitas}
                                        alamat="abc"
                                        tanggal_print="abc"
                                        url_img="https://apha.or.id/storage/logo/Logo-AphaC.png"
                                    />
                                }
                                fileName={"Name_Card-" + member.slug_kta}
                            >
                                {({ loading }) =>
                                    loading ? (
                                        <a className="btn btn-outline-success w-100">
                                            Loading Document...
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

                    {/*end */}
                </div>
            </div>
        </FrontendLayout>
    );
}
