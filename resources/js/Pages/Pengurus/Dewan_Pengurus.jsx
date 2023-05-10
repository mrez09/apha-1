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
            <Head title="Dewan Pengurus" />

            <section class="py-5 text-center bg-sec">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Struktur Dewan Pengurus</h1>

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
                        Dewan Pengurus
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN PENGURUS DEWAN PENGURUS </h2>

                    <h2>2017-2020</h2>
                    {/*  Dewan Pengurus */}
                    <div className="mb-10 p-3 border border-gray-200 rounded-lg">
                        <table class="table table-borderless">
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
                                        Dr. Sulastriyono, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Ning Adiasih, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Wakil Sekretaris
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        I Gusti Agung Mas Rwa Jayantiari, SH,
                                        MKnH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Bendahara</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Roberth K.R Hammar, SH, MH, MM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">
                                        Wakil Bendahara
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Triyono, SH, MKn
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Bidang Pendidikan dan Pelatihan */}
                    <div className="mb-10 border border-gray-200 rounded-lg card">
                        <div class="card-header ">
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
                                        J.M. Henny Wiludjeng, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sri Wahyu Ananingsih, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Mutiarany, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nunuk Sulisrudatin, SH, SIP, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Yosephus Mainake, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dra. Hj. Erleni, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Rizka Amelia Azis, SH, MH
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
                        <table class="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Kunthi Tridewiyanti, SH, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Simona Bustani, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Nam Rumkel, SAg, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Vincensia Esti Purnama Sari, SH,
                                        MHum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Made Wiryadharma
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sri Walny Rahayu, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Amri P. Sihotang, SS, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nur Aida, SH, MH
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
                        <table class="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        B. Rini Heryanti, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Ahdiana Yuni Lestari, SH, MHum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Rohadi. S. Th. I, SH, MHum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nurlely Darwis, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Rina Marlina, SH, MKn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        I Gede Pasek Pramana, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Safrin Salam, SH, MH
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
                        <table class="table m-3 table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">Ketua</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Ismail Rumadan, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Sekretaris</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Ade Rupawan, SH, MM, MKn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">Anggota</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Putu Dyatmikawati, S.H., M.Hum.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        I Ketut Sukadana, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Erni Herawati, SH, MKn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Ummu Salamah, SAg, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Gress Selly, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Windi Arista, SH, MH
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
                        <table class="table m-3 table-borderless">
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
                                        Iron Sarira, SE, MH
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
                                        Siti Khotijah, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Nurul Miqat, SH, MKn
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Marsidah, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position">&nbsp;</td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        M. Hazmi Wicaksono, SH
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    {/*  Direktur Eksekutif APHA Indonesia */}
                    <div className="mb-10 p-5 border border-gray-200 rounded-lg">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className="position">
                                        <strong>
                                            Direktur Eksekutif APHA Indonesia
                                        </strong>
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Hermansyah, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="position">
                                        Kordinator
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        <strong> Wilayah Barat </strong>
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Sulastriyono, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        &nbsp;
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Catharina Dewi Wulansari, SH,
                                        MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        <strong> Wilayah Tengah </strong>
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Wayan. P. Windia, SH, MSi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        &nbsp;
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Kunthi Tridewiyanti, SH, MA
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        <strong>Wilayah Timur</strong>
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Prof. Dr. Aminuddin Salle, SH, MH
                                    </td>
                                </tr>
                                <tr>
                                    <td className="position-kordinator">
                                        &nbsp;
                                    </td>
                                    <td className="doted">:</td>
                                    <td className="name-manage">
                                        Dr. Roberth K.R. Hammar,S.H.,M.H., M.M.
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
