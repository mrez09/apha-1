import GuestLayout from "@/Layouts/GuestLayout";
import FrontendLayout from "@/Layouts/FrontendLayout";
import NavbarGuest from "@/Pages/layouts/frontend/NavbarApha";
import { Link, Head, useForm } from "@inertiajs/react";
import moment from "moment";
import parse from "html-react-parser";
import { Card, Carousel, Col } from "react-bootstrap";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import featuredBuku from "@/Components/Buku/FeaturedBuku";
import { FaGoogleScholar } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home({
    auth,
    errors,
    flashMessage,
    props,
    news,
    commitee,
    featuredBuku,
    mainBanner,
    featuredBanner,
    buttonBanner,
    ticker,
    acara,
}) {
    const { delete: destroy } = useForm();

    const chunked = [];
    for (let i = 0; i < commitee.length; i += 3) {
        chunked.push(commitee.slice(i, i + 3));
    }

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Selamat Datang di Website Asosiasi Pengajar Hukum Adat
                </title>
            </Head>

            <div className="ticker-container">
                {ticker.map((ticker) => (
                    <div className="ticker-wrapper" key={ticker.id}>
                        <div className="ticker">
                            <Link href={route("frontnews.show", ticker.slug)}>
                                <span className="ticker-text">
                                    {ticker.judul}
                                </span>
                            </Link>{" "}
                            &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </div>
                    </div>
                ))}
            </div>

            {
                //Carousel
            }
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
                                            {/*banner.name*/}&nbsp;
                                        </h1>
                                        <span className="text-black">
                                            {/*parse(banner.decription)*/}{" "}
                                            &nbsp;
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
                                            {/*banner.name*/} &nbsp;
                                        </h1>
                                        <span className="text-black">
                                            {/*parse(banner.decription)*/}&nbsp;
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

            {/*START THE FEATURETTES*/}
            <div className="event-home">
                {acara.map((acara) => (
                    <div className="container " key={acara.id}>
                        <div className="row ">
                            <div className="col-md-7 featurette">
                                <h2>{acara.judul}</h2>
                                <span className="lead">
                                    {parse(acara.subjudul)}
                                </span>
                                <Link
                                    href={route("frontevent.show", acara.slug)}
                                >
                                    <button className="btn btn-success">
                                        Lihat Event
                                    </button>
                                </Link>
                            </div>
                            <div className="col-md-5 my-3">
                                <Link
                                    href={route("frontevent.show", acara.slug)}
                                >
                                    <img
                                        className="featurette-image img-fluid mx-auto"
                                        src={`/storage/${acara.img}`}
                                        alt={acara.judul}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*Dewan Pembina*/}

            <div className="container py-5">
                <h2 className="text-center fw-bold mb-4 ">
                    SUSUNAN DEWAN PEMBINA
                </h2>

                <Carousel variant="dark" interval={null}>
                    {chunked.map((group, index) => (
                        <Carousel.Item key={index}>
                            <div className="row justify-content-center g-4">
                                {group.map((item) => (
                                    <div
                                        className="col-md-4 mb-4"
                                        key={item.id}
                                    >
                                        <div className="team-card-wrapper h-100">
                                            <Card className="team-card text-center h-100 shadow-sm border-0">
                                                <div className="wave-top"></div>
                                                {/* Tombol sosial media, muncul saat hover */}
                                                <div className="sosmed-button">
                                                    <Link
                                                        href={route(
                                                            "frontpengurus.commitee.show",
                                                            item.slug,
                                                        )}
                                                        className="text-decoration-none text-dark"
                                                    >
                                                        <BiWorld className="btn btn-sm me-1 btn-de1" />
                                                    </Link>
                                                    <a
                                                        href={
                                                            item
                                                                .member_relasi?.[0]
                                                                ?.scholar ?? "#"
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-decoration-none text-dark"
                                                    >
                                                        <FaGoogleScholar className="btn btn-sm me-1 btn-de1" />
                                                    </a>
                                                </div>
                                                <Link
                                                    href={route(
                                                        "frontpengurus.commitee.show",
                                                        item.slug,
                                                    )}
                                                    className="text-decoration-none text-dark"
                                                >
                                                    <Card.Img
                                                        variant="top"
                                                        src={`/storage/${item.img}`}
                                                        alt={item.nama}
                                                        className="profile-img"
                                                    />
                                                    <Card.Body className="info-badge position-relative">
                                                        <h5 className="card-title mb-1 text-left">
                                                            {item.nama}
                                                        </h5>
                                                        <p
                                                            className="text-jabatan mb-2"
                                                            style={{
                                                                fontSize:
                                                                    "0.9rem",
                                                            }}
                                                        >
                                                            {item.jabatan_relasi
                                                                ?.namajabatan ??
                                                                "-"}
                                                        </p>
                                                    </Card.Body>
                                                </Link>
                                            </Card>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
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
                                            className="bd-placeholder-img card-img-top news-img"
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
                                                        news.publish_at,
                                                    ).format(
                                                        "dddd D MMMM YYYY ",
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
            <div className="album py-5 bg-light ">
                <div className="container ">
                    <h1>Buku</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                        {featuredBuku.map((news) => (
                            <Link
                                key={news.id}
                                href={route("frontbuku.show", news.slug)}
                            >
                                <div className="col ">
                                    <div className="card shadow-sm ">
                                        <img
                                            src={`/storage/${news.thumbnail}`}
                                            className="bd-placeholder-img card-img-top book-img"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                            role="img"
                                        />

                                        <div className="card-body ">
                                            <p className="card-text title-card ">
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
