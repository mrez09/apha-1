import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListBuku from "@/Components/Commitee/ListCommitee";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import _ from "lodash"; // pastikan lodash sudah diinstall

export default function List({
    featuredCommitee,
    commitee,
    pengurus,
    props,
    periode,
    periodeget,
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 1. Group data berdasarkan jabatan
    // Group dan urutkan berdasarkan jabatan_id
    const groupedPengurus = pengurus
        .filter((p) => p.periode === periodeget.periode_id)
        .sort((a, b) => a.jabatan_id - b.jabatan_id)
        .reduce((acc, curr) => {
            const jabatan = curr.namajabatan;
            if (!acc[jabatan]) {
                acc[jabatan] = [];
            }
            acc[jabatan].push(curr);
            return acc;
        }, {});

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

            {/*Pengurus */}
            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN DEWAN PEMBINA </h2>
                    {(() => {
                        if (periodeget.pengurus) {
                            return (
                                <div>
                                    <h4 className="blog-post-title mt-2 text-paragh">
                                        {periodeget.namaperiode}
                                    </h4>
                                </div>
                            );
                        }
                    })()}
                    <div className="mb-10 p-5 border border-gray-200 rounded-lg">
                        {Object.entries(groupedPengurus).map(
                            ([jabatan, anggotaList]) => (
                                <div key={jabatan} className="mb-5">
                                    <h5 className="mb-3 border-bottom pb-2 text-primary fw-bold">
                                        {jabatan}
                                    </h5>
                                    <div className="row">
                                        {anggotaList.map((listPengurus) => (
                                            <div
                                                className="col-md-4 mb-3"
                                                key={listPengurus.id}
                                            >
                                                <Link
                                                    href={route(
                                                        "frontpengurus.commitee.show",
                                                        listPengurus.slug
                                                    )}
                                                >
                                                    <div className="card h-100 shadow-sm">
                                                        {listPengurus.img && (
                                                            <img
                                                                src={`/storage/${listPengurus.img}`}
                                                                className="card-img-top"
                                                                alt={
                                                                    listPengurus.nama
                                                                }
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    height: "250px",
                                                                }}
                                                            />
                                                        )}
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title fw-bold text-primary">
                                                                {
                                                                    listPengurus.namajabatan
                                                                }
                                                            </h6>
                                                            <p className="card-text mb-0">
                                                                {
                                                                    listPengurus.nama
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
