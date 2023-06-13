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

export default function Dewan_Penasehat(props) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                <div className="row">
                    <div className="row  crumble">
                        <div className="col-lg-12 col-md-12 mx-auto head-bread">
                            <h1 className="f-bread">Struktur Dewan Pembina</h1>

                            <p className="lead-bread py-1">
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
                        Dewan Pembina
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN DEWAN PEMBINA </h2>

                    <h2>2020-2023</h2>
                    <div className="mb-10 p-5 border border-gray-200 rounded-lg">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. H. Aminuddin Salle, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Wakil Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Sulistyowati Irianto, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Wayan P. Windia, SH, Msi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Dr. Ch. Dewi Wulansari, Ph. D,
                                        SH, MH, SE, MM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Dominikus Rato, SH, M.Si
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Jeane Neltje Saly, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Farida Patittingi, SH, M.Hum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Dra. MG Endang Sumiarni, SH,
                                        Mhum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Andi Suryaman Mustari Pide,
                                        S.H., M.H
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Yulia Mirwati, SH.CN.MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Rosnidar Sembiring, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Mella Ismelina F. Rahayu, SH,
                                        M. Hum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Jaja Ahmad Jayus, SH, M. Hum
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
