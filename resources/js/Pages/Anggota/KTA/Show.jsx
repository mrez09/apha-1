import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
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

export default function List({ featuredBuku, payment, props, tanggal_print }) {
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
                    Informasi Anggota - Asosiasi Pengajar Hukum Adat (APHA)
                    Indonesia
                </title>
            </Head>
            <div className="container">
                <div className="row g-5  d-flex justify-content-center mt-5">
                    <h2>Informasi Anggota</h2>

                    {
                        //Tab 1>
                    }

                    <div className="col-md-8  ">
                        {
                            //Invoice Date
                        }
                        <div className="row border">
                            <div class="col mt-4 col-lg-6">
                                <h2 className="blog-post-title">
                                    <p>{payment.nama}</p>
                                </h2>
                                <p className="t-kta">
                                    No Kartu Tanda Anggota #{payment.no_kta}
                                </p>
                            </div>
                            <div className="col mt-4 col-lg-6">
                                <table>
                                    {(() => {
                                        if (payment.status == 1) {
                                            return (
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-success btn-kecil"
                                                    disabled
                                                >
                                                    Aktif
                                                </button>
                                            );
                                        } else {
                                            return (
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger btn-kecil"
                                                    disabled
                                                >
                                                    Belum Aktif
                                                </button>
                                            );
                                        }
                                    })()}
                                </table>
                            </div>
                        </div>

                        {
                            //Row 2
                        }

                        <div className="row border">
                            <div class="col mt-4 col-lg-6">
                                <table>
                                    <tr>
                                        <td>NIDN/NIDK</td>
                                        <td>:</td>
                                        <td>{payment.kode}</td>
                                    </tr>

                                    <tr>
                                        <td>Jenis Kelamin </td>
                                        <td>: </td>

                                        {(() => {
                                            if (payment.jk == "lk") {
                                                return <td>Laki-Laki</td>;
                                            } else {
                                                return <td>Perempuan</td>;
                                            }
                                        })()}
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td>{payment.alamat}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col mt-4 col-lg-6">
                                <table>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{payment.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>:</td>
                                        <td>{payment.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Scholar</td>
                                        <td>:</td>
                                        <td>{payment.scholar}</td>
                                    </tr>
                                    <tr>
                                        <td>Scopus</td>
                                        <td>:</td>
                                        <td>{payment.scopus}</td>
                                    </tr>
                                    <tr>
                                        <td>Sinta</td>
                                        <td>:</td>
                                        <td>{payment.sinta}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        {
                            //Invoice
                        }
                    </div>

                    {
                        //end tab
                    }
                    <div className="col-md-4 mt-2   ">
                        <article className="blog-post ">
                            <hr />
                            <div className="detail-article__share-wrapper">
                                <PDFDownloadLink
                                    document={
                                        <PDFFile
                                            no_invoice={payment.no_invoice}
                                            judul={payment.judul}
                                            subjudul={payment.subjudul}
                                            slug_judul={payment.slug_judul}
                                            img={payment.img}
                                            status={payment.status}
                                            //konten={parse(payment.konten)}
                                            konten={payment.konten}
                                            is_featured={payment.is_featured}
                                            tanggal_bayar={
                                                payment.tanggal_bayar
                                            }
                                            created_at={payment.is_featured}
                                            updated_at={payment.is_featured}
                                            deleted_at={payment.deleted_at}
                                            nama={payment.nama}
                                            alamat={payment.alamat}
                                            tanggal_print={tanggal_print}
                                        />
                                    }
                                    fileName={payment.no_invoice}
                                >
                                    {({ loading }) =>
                                        loading ? (
                                            <a className="btn btn-success btn-kecil">
                                                Loading Document...
                                            </a>
                                        ) : (
                                            <a className="btn btn-success btn-kecil">
                                                Download Invoice
                                            </a>
                                        )
                                    }
                                </PDFDownloadLink>

                                <p>Di print tanggal {tanggal_print}</p>
                            </div>
                        </article>
                    </div>

                    {/*end News*/}
                </div>
            </div>
        </FrontendLayout>
    );
}
