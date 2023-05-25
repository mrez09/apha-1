import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head, useForm } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import featuredBuku from "@/Components/Buku/FeaturedBuku";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home({
    auth,
    errors,
    flashMessage,
    props,
    news,
    featuredBuku,
    mainBanner,
    featuredBanner,
    buttonBanner,
}) {
    const { delete: destroy } = useForm();

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Selamat Datang di Website Asosiasi Pengajar Hukum Adat
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Selamat Datang di Website Asosiasi Pengajar Hukum Adat"
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
                {/*<meta property="fb:app_id" content="your_app_id" /> 
                <meta
                    head-key="whatsapp"
                    name="whatsapp"
                    property="og:image"
                    content={`/storage/logo/Logo-Apha.gif`}
                />*/}
                <meta
                    head-key="Title Open Graph"
                    property="og:title"
                    content="Asosiasi Pengajar Hukum Adat"
                />
                <meta
                    head-key="Description Open Graph"
                    property="og:description"
                    content="Lembaga Studi Hukum Indonesia Merupakan Website yang menerbitkan buku khusus Hukum"
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
                    content={`/storage/logo/Logo-Apha.gif`}
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
                    content="Asosiasi Pengajar Hukum Adat "
                />
                <meta
                    head-key="Twitter Description"
                    name="twitter:description"
                    content=" Selamat Datang di Asosiasi Pengajar Hukum Adat"
                />
                <meta
                    head-key="Twitter Image"
                    name="twitter:image"
                    content={`/storage/logo/Logo-Apha.gif`}
                />
                <meta
                    head-key="Twitter Card"
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>

            <main>
                <div
                    id="myCarousel"
                    className="carousel slide ca-res"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Main Banner"
                        ></button>
                        {buttonBanner.map((banner, index) => (
                            <button
                                key={banner.id}
                                type="button"
                                data-bs-target="#myCarousel"
                                data-bs-slide-to="1"
                                aria-label={banner.slug}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {mainBanner.map((banner) => (
                            <div
                                key={banner.id}
                                className="carousel-item active"
                            >
                                <img
                                    src={`/storage/${banner.img}`}
                                    className="bd-placeholder-img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                />

                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h1 className="text-black">
                                            {banner.name}
                                        </h1>
                                        <span className="text-black">
                                            {parse(banner.decription)}
                                        </span>
                                        {/*<p>
                                            <a
                                                className="btn btn-lg btn-primary"
                                                target="_blank"
                                                //href="https://docs.google.com/forms/d/10IndOTXK25dkLSg4n84x6thGbc3cTpQ5jhCRpYeRq4k/prefill"
                                                href={banner.url}
                                            >
                                                Go
                                            </a>
                        </p>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {featuredBanner.map((banner) => (
                            <div key={banner.id} className="carousel-item">
                                <img
                                    src={`/storage/${banner.img}`}
                                    className="bd-placeholder-img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                />

                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h1 className="text-black">
                                            {/*banner.name*/}
                                        </h1>
                                        <p className="text-black">
                                            {/*parse(banner.decription)*/}
                                        </p>
                                        {/*<p>
                                            <a
                                                className="btn btn-lg btn-primary"
                                                target="_blank"
                                                //href="https://docs.google.com/forms/d/10IndOTXK25dkLSg4n84x6thGbc3cTpQ5jhCRpYeRq4k/prefill"
                                                href={banner.url}
                                            >
                                                Go
                                            </a>
                        </p>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>

            <div className="container council py-5">
                <h1 className="mx-auto de1 ">SUSUNAN DEWAN PEMBINA</h1>
                <div className="row py-3">
                    <div className="col-lg-4 ">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Aminuddin-Salle.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />

                        <title>Prof. Dr. H. Aminuddin Salle, SH, MH</title>

                        <h2>Prof. Dr. H. Aminuddin Salle, SH, MH</h2>
                        <p>Ketua</p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Sulistyowati-Irianto.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />
                        <title>Prof. Dr. Sulistyowati Irianto, MA</title>

                        <h2>Prof. Dr. Sulistyowati Irianto, MA</h2>
                        <p>Wakil Ketua</p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Wayan.png"
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />
                        <title>Prof. Dr. Wayan P. Windia, SH, Msi</title>

                        <h2>Prof. Dr. Wayan P. Windia, SH, Msi</h2>
                        <p>Wakil Ketua</p>
                    </div>
                </div>
            </div>

            {/*News */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <h1>News</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {news.map((news) => (
                            <Link
                                key={news.id}
                                href={route("frontnews.show", news.slug)}
                            >
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img
                                            src={`/storage/${news.img}`}
                                            className="bd-placeholder-img card-img-top"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                            role="img"
                                        />

                                        <div className="card-body ">
                                            <p className="card-text title-card">
                                                <strong>{news.judul}</strong>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>
                                                    {/*moment(
                                                        news.publish_at
                                                    ).format(
                                                        "dddd D MMMM YYYY"
                                                    )*/}
                                                    {moment(
                                                        news.publish_at
                                                    ).format(
                                                        "dddd D MMMM YYYY "
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/*Book */}
            <div className="album py-5 bg-light">
                <div className="container">
                    <h1>Buku</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {featuredBuku.map((news) => (
                            <Link
                                key={news.id}
                                href={route("frontbuku.show", news.slug)}
                            >
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img
                                            src={`/storage/${news.thumbnail}`}
                                            className="bd-placeholder-img card-img-top"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                            role="img"
                                        />

                                        <div className="card-body ">
                                            <p className="card-text title-card">
                                                <strong>{news.name}</strong>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
