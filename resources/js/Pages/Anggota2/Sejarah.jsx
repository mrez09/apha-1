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
            <Head title="Lembaga Studi Hukum Indonesia" />

            <section className="py-5 text-center bg-sec">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Sejarah</h1>
                        <p className="lead text-muted">
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
                        Sejarah
                    </li>
                </ol>
            </nav>

            <main className="container">
                <div className="row mb-2"></div>

                <div className="row g-5">
                    <div className="col-md-8">
                        <h2>Selayang Pandang </h2>
                        <h2 className="blog-post-title pb-4 mb-4 fst-italic border-bottom">
                            Asosiasi Pengajar Hukum Adat (APHA)
                        </h2>

                        <article className="blog-post">
                            <p>
                                Pengajar Hukum Adat dibentuk sebagai rangka
                                meningkatkan dan mengembangkan kapasitas anggota
                                melalui penyelenggaraan pendidikan, pelatihan,
                                penelitian, dan pengembangan hukum adat.
                            </p>
                            <p>
                                APHA didirikan pada tahun 2017 di Jakarta. APHA
                                bersifat terbuka untuk para pengajar Hukum Adat
                                di Indonesia serta tidak terikat dan/atau
                                mengikat diri kepada kekuatan organisasi sosial
                                politik tertentu.
                            </p>
                            <hr />
                            <h3>Visi & Misi</h3>
                            <h4>Visi</h4>
                            <ol>
                                <li>
                                    Mengembangkan serta meningkatkan kemampuan
                                    anggota untuk menyiapkan peserta didik
                                    menjadi manusia Indonesia yang beriman dan
                                    bertaqwa kepada Tuhan Yang Maha Esa, berbudi
                                    luhur, serta berwawasan kebangsaan dan
                                    berdaya saing global,
                                </li>
                                <li>
                                    Mengembangkan serta meningkatkan kemampuan
                                    anggota agar berperan menjadi agen
                                    pembangunan terdepan dalam usaha meneliti,
                                    mengembangkan dan menerapkan ilmu
                                    pengetahuan hukum dan budaya bangsa untuk
                                    meningkatkan taraf kehidupan masyarakat. 3.
                                    Memelihara dan menegakkan akuntabilitas
                                    anggota di masyarakat.
                                </li>
                            </ol>
                            <h4>Misi</h4>
                            <p>
                                Membina dan memberdayakan kemampuan anggota
                                meliputi:
                            </p>
                            <ol>
                                <li>
                                    pembinaan dan pemberdayaan kemampuan
                                    pengelolaan anggota dalam mewujudkan
                                    profesionalitas sebagai tenaga pendidik
                                </li>
                                <li>
                                    pemenuhan hak dan kewajiban anggota melalui
                                    pengembagan wawasan penegtahuan bidang hukum
                                    adat
                                </li>
                                <li>
                                    mengembangkan kerjasama antar anggota dalam
                                    rangka meningkatkan kualitas masing-masing
                                    anggota
                                </li>
                                <li>
                                    memberikan advokasi, perlindungan, dan
                                    pembelaan terhadap anggota dari tindakan
                                    yang merugikan atas dasar peraturan
                                    perundang-undangan yang berlaku
                                </li>
                            </ol>
                        </article>
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky">
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">About</h4>
                                <p className="mb-0">
                                    Customize this section to tell your visitors
                                    a little bit about your publication,
                                    writers, content, or something else
                                    entirely. Totally up to you.
                                </p>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Archives</h4>
                                <ol className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">March 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">February 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">January 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">December 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">November 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">October 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">September 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">August 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">July 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">June 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">May 2020</a>
                                    </li>
                                    <li>
                                        <a href="#">April 2020</a>
                                    </li>
                                </ol>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li>
                                        <a href="#">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </FrontendLayout>
    );
}
