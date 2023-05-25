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
                    content="Selamat Datang di Website Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Selamat Datang di Website Asosiasi Pengajar Hukum Adat"
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

            <main>
                <div
                    id="bannerCarousel"
                    className="carousel slide ca-res"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#bannerCarousel"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Main Banner"
                        ></button>
                        {buttonBanner.map((banner, index) => (
                            <button
                                key={banner.id}
                                type="button"
                                data-bs-target="#bannerCarousel"
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
                                            {/*banner.name*/}
                                        </h1>
                                        <span className="text-black">
                                            {/*parse(banner.decription)*/}
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
                        data-bs-target="#bannerCarousel"
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
                        data-bs-target="#bannerCarousel"
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

            {/*Dewan Pembina*/}

            <div className="container council py-5">
                <h1 className="mx-auto de1 ">SUSUNAN DEWAN PEMBINA</h1>
                <div className="row py-3">
                    <div
                        id="de1Carousel"
                        class="carousel carousel-dark slide"
                        data-bs-ride="false"
                    >
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#de1Carousel"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#de1Carousel"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-group ">
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Aminuddin-Salle.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. H. Aminuddin Salle,
                                                SH, MH
                                            </h5>
                                            <p class="card-text">Ketua</p>
                                        </div>
                                    </div>
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Sulistyowati-Irianto.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. Sulistyowati Irianto,
                                                MA
                                            </h5>
                                            <p class="card-text">Wakil Ketua</p>
                                        </div>
                                    </div>
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Wayan.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. Wayan P. Windia, SH,
                                                Msi
                                            </h5>
                                            <p class="card-text">Wakil Ketua</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-group">
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Catharina-Dewi-Wulansari.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. Dr. Ch. Dewi
                                                Wulansari, Ph. D, SH, MH, SE, MM
                                            </h5>
                                            <p class="card-text">Sekretaris</p>
                                        </div>
                                    </div>
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Endang-Sumiarni.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. Dra. MG Endang
                                                Sumiarni, SH, Mhum
                                            </h5>
                                            <p class="card-text">&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="card de1">
                                        <img
                                            src="https://penerbit.lshi.or.id/assets/image/apha/Pengurus/Rato.png"
                                            className="de1-pic bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            aria-label="Placeholder: 140x140"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Prof. Dr. Dominikus Rato, SH,
                                                M.Si
                                            </h5>
                                            <p class="card-text">&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#de1Carousel"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#de1Carousel"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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
