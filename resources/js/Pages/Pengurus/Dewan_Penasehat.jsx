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
            <Head title="Dewan Penasehat" />

            <section className="py-1 text-center bg-sec">
                <div className="row  crumble">
                    <div className="col-lg-12 col-md-12 mx-auto head-bread">
                        <h1 className="f-bread">Struktur Dewan Penasehat</h1>

                        <p className="lead-bread py-1">
                            Asosiasi Pengajar Hukum Adat
                        </p>
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
                        Dewan Penasehat
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN PENGURUS DEWAN PENASEHAT </h2>

                    <h2>2017-2020</h2>
                    <div className="mb-10 p-5 border border-gray-200 rounded-lg">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua Umum</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. H. Aminuddin Salle, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Wakil Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Wayan P. Windia, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Sulistyowati Irianto, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Catharina Dewi Wulansari, SH,
                                        MH, SE, MM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
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
                                        Prof. Dr. Ade Saptomo, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Dra. MG Endang Sumiarni, SH,
                                        MHum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Dominikus Rato, SH, MSi
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
