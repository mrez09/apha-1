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

export default function Dewan(props) {
    return (
        <FrontendLayout>
            <Head title="Lembaga Studi Hukum Indonesia" />

            <section class="py-5 text-center bg-sec">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Badan Hukum</h1>
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
                        <a href="#">Organisasi</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Badan Hukum
                    </li>
                </ol>
            </nav>

            <div className="py-5 text-center Container">
                <h2>SK Badan Hukum</h2>
                <embed
                    type="application/pdf"
                    src="https://penerbit.lshi.or.id/assets/image/apha/File/Akte.pdf"
                    width="800"
                    height="800"
                ></embed>
            </div>
        </FrontendLayout>
    );
}
