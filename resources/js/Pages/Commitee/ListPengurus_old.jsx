import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head } from "@inertiajs/react";
import FeaturedBuku from "@/Components/Buku/FeaturedBuku";
import ListBuku from "@/Components/Commitee/ListCommitee";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function List({
    featuredCommitee,
    commitee,
    pengurus,
    subdivisi,
    wordCount,
    props,
    periode,
    periodeget,
    pengurusget,
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                            <h1 className="f-bread">Struktur Dewan Pengurus</h1>

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
                        Dewan Pengurus
                    </li>
                </ol>
            </nav>

            {/*Pengurus */}
            <div className="container">
                <div className="py-5 text-center Container">
                    <h2>SUSUNAN DEWAN PENGURUS </h2>

                    {/*  Bidang Pendidikan dan Pelatihan */}

                    {subdivisi.map((listSub) => {
                        return (
                            <div className="mb-10 border border-gray-200 rounded-lg card">
                                {(() => {
                                    if (listSub.id == 1) {
                                        return <h3></h3>;
                                    } else {
                                        return (
                                            <div className="card-header ">
                                                <h3>{listSub.namasubdivisi}</h3>
                                            </div>
                                        );
                                    }
                                })()}

                                <table className="table m-3 table-borderless">
                                    <tbody>
                                        {pengurus.map((listPengurus) => {
                                            if (
                                                listSub.namasubdivisi ==
                                                    listPengurus.namasubdivisi &&
                                                periodeget.periode_id ==
                                                    listPengurus.periode
                                            ) {
                                                return (
                                                    <tr>
                                                        <td className="position">
                                                            {
                                                                listPengurus.namajabatan
                                                            }
                                                        </td>
                                                        <td className="doted">
                                                            :
                                                        </td>
                                                        <td className="name-manage">
                                                            <Link
                                                                href={route(
                                                                    "frontpengurus.commitee.show",
                                                                    listPengurus.slug
                                                                )}
                                                            >
                                                                {
                                                                    listPengurus.nama
                                                                }
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        );
                    })}
                </div>
            </div>
        </FrontendLayout>
    );
}
