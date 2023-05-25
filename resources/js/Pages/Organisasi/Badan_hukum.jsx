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

export default function Badan_Hukum(props) {
    return (
        <FrontendLayout>
            <Head>
                <title>
                    Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Asosiasi Pengajar Hukum Adat"
                />
                <meta
                    head-key="Description Open Graph"
                    property="og:description"
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                <div className="row  crumble">
                    <div className="col-lg-12 col-md-12 mx-auto head-bread">
                        <h1 className="f-bread">Badan Hukum</h1>

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
                        Badan Hukum
                    </li>
                </ol>
            </nav>

            <div className="py-5 text-center Container">
                <h2>SK Badan Hukum</h2>
                <embed
                    type="application/pdf"
                    //src="https://penerbit.lshi.or.id/assets/image/apha/File/Akte.pdf"
                    src={`/storage/file/Akte-Apha.pdf`}
                    width="800"
                    height="800"
                ></embed>
            </div>
        </FrontendLayout>
    );
}
