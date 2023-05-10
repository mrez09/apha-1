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

            <section class="py-5 text-center bg-sec">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Struktur Dewan Penasehat</h1>

                        <p class="lead text-muted">
                            Asosiasi Pengajar Hukum Adat
                        </p>
                    </div>
                </div>
            </section>
            <nav className="" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumber">
                    <li class="breadcrumb-item ">
                        <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Pengurus</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Dewan Penasehat
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN PENGURUS DEWAN PENASEHAT </h2>

                    <h2>2017-2020</h2>
                    <div className="mb-10 p-5 border border-gray-200 rounded-lg">
                        <table class="table table-borderless">
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
