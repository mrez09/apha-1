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
    featuredBanner,
}) {
    const { delete: destroy } = useForm();

    return (
        <FrontendLayout>
            <Head title="Home" />

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
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={`/storage/banner/main/Background_Apha.png`}
                                className="bd-placeholder-img"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            />

                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1 className="text-black ca-head">
                                        Selamat Datang di Website
                                    </h1>
                                    <p className="text-black cap">
                                        Asosiasi Pengajar Hukum Adat
                                    </p>
                                    {/*<p className="text-black">
                                        Pembuatan Proposal Penelitian Masyarakat
                                        Hukum Adat Berstandar Hibah Dikti
    </p>*/}
                                    {/*<p>
                                        <a
                                            className="btn btn-lg btn-primary"
                                            href="https://docs.google.com/forms/d/10IndOTXK25dkLSg4n84x6thGbc3cTpQ5jhCRpYeRq4k/prefill"
                                        >
                                            Sign up today
                                        </a>
    </p>*/}
                                </div>
                            </div>
                        </div>
                        {featuredBanner.map((banner) => (
                            <div key={banner.id} className="carousel-item ">
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

            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
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
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
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
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;x
                            </a>
                        </p>
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
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details &raquo;
                            </a>
                        </p>
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
