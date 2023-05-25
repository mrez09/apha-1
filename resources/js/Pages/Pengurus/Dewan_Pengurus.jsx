import { Link, Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    BookOpenIcon,
    PaperClipIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    BuildingOfficeIcon,
    BuildingOffice2Icon,
    FingerPrintIcon,
    NewspaperIcon,
    VideoCameraIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dewan_Pengurus(props) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Mobile Capable"
                    name="mobile-web-app-capable"
                    content="yes"
                />
                <meta
                    head-key="App Name"
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="Apple Mobile App Name"
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="Theme Color"
                    name="theme-color"
                    content="#ff6300"
                ></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta
                    head-key="App id Facebook"
                    property="fb:app_id"
                    content="961443805039846"
                ></meta>

                <meta
                    head-key="Title Open Graph"
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Description Open Graph"
                    property="og:description"
                    content="Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Type Open Graph"
                    property="og:type"
                    content="website"
                />
                <meta
                    head-key="URL Open Graph"
                    property="og:url"
                    content="https://www.apha.or.id"
                />
                <meta
                    head-key="Image Open Graph"
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="Image Type Open Graph"
                    property="og:image:type"
                    content="image/jpeg"
                />
                <meta
                    head-key="Image Width Open Graph"
                    property="og:image:width"
                    content="1800"
                />
                <meta
                    head-key="Image Height Open Graph"
                    property="og:image:height"
                    content="550"
                />
                {/*Twitard*/}

                <meta
                    head-key="Twitter Title"
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Twitter Description"
                    name="twitter:description"
                    content="Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Twitter Image"
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="Twitter Card"
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>

            <section className="py-1 text-center bg-sec">
                <div className="row ">
                    <div className="row  crumble">
                        <div className="col-lg-12 col-md-12 mx-auto head-bread">
                            <h1 className="">Struktur Dewan Pengurus</h1>

                            <p className="lead-bread ">
                                Asosiasi Pengajar Hukum Adat
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumber">
                    <li className="breadcrumb-item ">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pengurus</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Dewan Pengurus
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN DEWAN PENGURUS </h2>

                    <h2>2020-2023</h2>
                    {/*  Dewan Pengurus */}
                    <div className="mb-10 p-3 border border-gray-200 rounded-lg">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua Umum</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. St. Laksanto Utomo, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Wakil Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Ir. Abrar Saleng, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Kunthi Tridewiyanti, SH, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Sekretaris Jendral
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Ning Adiasih, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Wakil Sekretaris Jendral
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sri Walny Rahayu, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. I Gusti Agung Mas Rwa Jayantiari,
                                        SH, M. Kn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Bendahara Umum</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Roberth K.R Hammar, SH, MH, MM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Wakil Bendahara Umum
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Hj. Lenny Nadriana, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Korwil Indonesia Barat
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sulastriyono, SH, M.Si
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Korwil Indonesia Tengah
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Hj. Gusti Muzainah, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Korwil Indonesia Timur
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Hendrik H.J.Krisifu, SH, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Direktur Eksekutif
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">Hermansyah</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Bidang Pendidikan dan Pelatihan */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header ">
                            <h3>Bidang Pendidikan dan Pelatihan</h3>
                        </div>
                        <table className="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Caritas Woro Murdiati. R, SH, MHum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nur Aida, SH, M. Si
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dra. Hj. Erleni, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Simona Bustami, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        B. Rini Heryanti, SH, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Penelitian dan Pengembangan */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header">
                            <h3>Penelitian, dan Pengembangan Hukum Adat</h3>
                        </div>
                        <table className="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Nam Rumkel, S.Ag, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Rina Yulianti, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Ni Nyoman Sukerti, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Marthin, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Rimawati, SH, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Bidang Organisasi */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header">
                            <h3>Bidang Organisasi</h3>
                        </div>
                        <table className="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Ummu Salamah, SAg, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Windi Arista, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nurul Miqat, SH, MKn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Julianto Jotam Jover Kalalo,SH,.MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Henny Wilujeng, SH, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Bidang Kerjasama Antar Lembaga */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header">
                            <h3>Bidang Kerjasama Antar Lembaga</h3>
                        </div>
                        <table className="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. A. A. Istri Ari Atu Dewi, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Abdurrahman Nur, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Amri P. Sihotang, SS, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Jean K. Matuankotta, SH,M.Hum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Mohammad Jamin, SH.,M.Hum
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Bidang Publikasi dan Informasi Ilmiah Hukum Adat */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header">
                            <h3>
                                Bidang Publikasi dan Informasi Ilmiah Hukum Adat
                            </h3>
                        </div>
                        <table className="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. M. Syamsuddin, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. I Ketut Sudantra, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Maskawati Umar, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Hayatul Ismi, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sri Warjiyati, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*  Bidang Advokasi dan Pengembangan Masyarakat Hukum Adat */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div className="card-header">
                            <h3>
                                Bidang Advokasi dan Pengembangan Masyarakat
                                Hukum Adat
                            </h3>
                        </div>

                        <table className="table m-3 table-borderless">
                            <p>Sub Bidang Advokasi</p>
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Yamin, SS, SH, MHum, MH.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Rohadi, S. Th. I, SH, M. Hum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Safrin Salam, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Marthen B. Salinding, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nanin Koeswidi Astuti, SH, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table m-3 table-borderless">
                            <p>Sub Bidang Pengembangan Masyarakat Hukum Adat</p>
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Yenny Y, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Sisca Ferawati Burhanuddin, S.H. M.Kn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Ade Rupawan, SH, MM, M. Kn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Emi Handayani, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Salfius Seko, SH, MH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                </div>
            </div>
        </FrontendLayout>
    );
}
