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
            <Head>
                <title>
                    Struktur Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    name="description"
                    content="Struktur Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta name="theme-color" content="#ff6300"></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta property="fb:app_id" content="961443805039846" />

                <meta
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat"
                />
                <meta
                    property="og:description"
                    content="Sturktur Organisasi Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.apha.or.id" />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1800" />
                <meta property="og:image:height" content="550" />
                {/*Twitard*/}

                <meta
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:description"
                    content="Sturuktur Organisasi Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

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
                    src="https://drive.google.com/file/d/1fA1bIvKhjZIfTB09JzOl_I1-MKYXik5L/preview"
                    width="800"
                    height="800"
                ></embed>
            </div>
        </FrontendLayout>
    );
}
