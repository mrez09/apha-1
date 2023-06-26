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
                    head-key="description"
                    name="description"
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="mobile-web-app-capable"
                    name="mobile-web-app-capable"
                    content="yes"
                />
                <meta
                    head-key="application-name"
                    name="application-name"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="apple-mobile-web-app-title"
                    name="apple-mobile-web-app-title"
                    content="Asosiasi Pengajar Hukum Adat (APHA)"
                />
                <meta
                    head-key="theme-color"
                    name="theme-color"
                    content="#ff6300"
                ></meta>
                {/*Sosial Media*/}
                {/*Open Graph Protocol*/}
                <meta
                    head-key="fb:app_id"
                    property="fb:app_id"
                    content="961443805039846"
                ></meta>

                <meta
                    head-key="og:title"
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat"
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta head-key="og:type" property="og:type" content="website" />
                <meta
                    head-key="og:url"
                    property="og:url"
                    content="https://www.apha.or.id"
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="og:image:type"
                    property="og:image:type"
                    content="image/jpeg"
                />
                <meta
                    head-key="og:image:width"
                    property="og:image:width"
                    content="1800"
                />
                <meta
                    head-key="og:image:height"
                    property="og:image:height"
                    content="550"
                />
                {/*Twitard*/}

                <meta
                    head-key="twitter:title"
                    name="twitter:title"
                    content="Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="twitter:description"
                    name="twitter:description"
                    content="Badan Hukum Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="twitter:image"
                    name="twitter:image"
                    content="https://i.imgur.com/R4DyCBa.png"
                />
                <meta
                    head-key="twitter:card"
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
