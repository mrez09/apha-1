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

export default function Pengurus(props) {
    return (
        <FrontendLayout>
            <Head title="Struktur Pengurus" />

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
                        <a href="#">Organisasi</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Pengurus
                    </li>
                </ol>
            </nav>

            <div className="py-5 text-center Container">
                <h2>SK Pengurus</h2>
                <embed
                    type="application/pdf"
                    src="https://penerbit.lshi.or.id/assets/image/apha/File/Pengurus-APHA.pdf"
                    width="800"
                    height="800"
                ></embed>
            </div>
        </FrontendLayout>
    );
}
