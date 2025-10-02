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
    qrcode,
    qrcodebase,
    expired_date,
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
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="fw-bold mb-1">
                                        {member.nama}
                                    </h2>
                                    <p className="text-muted mb-0">
                                        Anggota APHA Indonesia
                                    </p>
                                    <small>
                                        No. KTA :{" "}
                                        <strong>{member.no_kta}</strong>
                                    </small>
                                </div>

                                <div>
                                    {payment?.status == 1 ? (
                                        <span className="badge bg-success fs-6 px-3 py-2">
                                            ✓ Aktif
                                        </span>
                                    ) : (
                                        <span className="badge bg-danger fs-6 px-3 py-2">
                                            ✕ Tidak Aktif
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h6 className="text-muted">Status</h6>
                                    <h4 className="text-success">
                                        {member.iuran_status}
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h6 className="text-muted">
                                        Berlaku Hingga
                                    </h6>
                                    <h5>
                                        {moment(member.expired_date).format(
                                            "DD MMM YYYY",
                                        )}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h6 className="text-muted">Universitas</h6>
                                    <small>{member.universitas}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-sm border-0 mb-4">
                        <div className="card-header bg-white fw-bold">
                            Data Anggota
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <small className="text-muted">
                                            NIDN / NIDK
                                        </small>
                                        <div>{member.kode}</div>
                                    </div>

                                    <div className="mb-3">
                                        <small className="text-muted">
                                            Jenis Kelamin
                                        </small>
                                        <div>
                                            {member.jk === "lk"
                                                ? "Laki-Laki"
                                                : "Perempuan"}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <small className="text-muted">
                                            Alamat
                                        </small>
                                        <div>{member.alamat}</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <small className="text-muted">
                                            Universitas
                                        </small>
                                        <div>{member.universitas}</div>
                                    </div>

                                    <div className="mb-3">
                                        <small className="text-muted">
                                            Email
                                        </small>
                                        <div>{member.email}</div>
                                    </div>

                                    <div className="mb-3">
                                        <small className="text-muted">
                                            Masa Berlaku
                                        </small>
                                        <div>
                                            {moment(member.expired_date).format(
                                                "dddd D MMMM YYYY",
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        //end tab
                    }
                    {/* Kolom Samping */}

                    <div className="col-md-4 mt-3">
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-body text-center">
                                <h5>Verifikasi KTA</h5>

                                <img
                                    src={qrcode}
                                    className="img-fluid mb-3"
                                    style={{
                                        maxWidth: 220,
                                    }}
                                />

                                <p className="small text-muted">
                                    Scan QR Code untuk memverifikasi keanggotaan
                                    APHA Indonesia.
                                </p>
                            </div>
                        </div>
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
                                        email={member.email}
                                        phone={member.phone}
                                        universitas={member.universitas}
                                        start_date={member.start_date}
                                        expired_date={member.expired_date}
                                        alamat={member.alamat}
                                        tanggal_print="abc"
                                        url_img="https://apha.or.id/storage/logo/Logo-AphaC.png"
                                        qrCodeUrl={qrcode}
                                        qrCodeBase={qrcodebase}
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
                            <small className="text-muted">
                                Dicetak : {tanggal_print}
                            </small>
                        </div>
                    </div>

                    {/*end */}
                </div>
            </div>
        </FrontendLayout>
    );
}
