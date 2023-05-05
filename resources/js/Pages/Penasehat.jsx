import { Link, Head } from "@inertiajs/react";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Penasehat(props) {
    return (
        <>
            <Head title="Lembaga Studi Hukum Indonesia" />

            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://penerbit.lshi.or.id/assets/image/logo/Logo-Apha.png"
                            className="img-fluid img-logo"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pengurus
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Dewan Penasehat
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Dewan Pengurus
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Organisasi
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Badan Hukum
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sejarah dan Perkembangan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Struktur
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Program Kerja
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Publikasi
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Buku
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Jurnal
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Prosiding
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Newsteller
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Kegiatan
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Rakornas
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Munas
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Musda
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Pusat
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="btn btn-primary"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="btn btn-primary"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="btn btn-warning"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </nav>

            <main>
                <div
                    id="myCarousel"
                    className="carousel slide"
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
                        <button
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://penerbit.lshi.or.id/assets/image/apha/Banner-Web-1.png"
                                className="bd-placeholder-img"
                                width="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            />

                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1 className="text-black">
                                        Apha On Clinic
                                    </h1>
                                    <p className="text-black">
                                        Pembuatan Proposal Penelitian Masyarakat
                                        Hukum Adat Berstandar Hibah Dikti
                                    </p>
                                    <p>
                                        <a
                                            className="btn btn-lg btn-primary"
                                            href="#"
                                        >
                                            Sign up today
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg
                                className="bd-placeholder-img"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            ></svg>

                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>
                                        Some representative placeholder content
                                        for the second slide of the carousel.
                                    </p>
                                    <p>
                                        <a
                                            className="btn btn-lg btn-primary"
                                            href="#"
                                        >
                                            Learn more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg
                                className="bd-placeholder-img"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            ></svg>

                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>One more for good measure.</h1>
                                    <p>
                                        Some representative placeholder content
                                        for the third slide of this carousel.
                                    </p>
                                    <p>
                                        <a
                                            className="btn btn-lg btn-primary"
                                            href="#"
                                        >
                                            Browse gallery
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                View details &raquo;
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

            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3>Asosiasi Pengajar Hukum Adat </h3>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9988493783385!2d106.7870864139957!3d-6.263879963065596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a15b2cefb7%3A0x4f99af07b043ec4a!2sLSHI%20-%20Lembaga%20Studi%20Hukum%20Indonesia!5e0!3m2!1sen!2sid!4v1676532692261!5m2!1sen!2sid"
                                    width="250"
                                    height="150"
                                    loading="lazy"
                                ></iframe>

                                <ul>
                                    <li>
                                        <a href="tel:(010) 1234 4321">
                                            <i className="fas ic fa-phone"></i>
                                            <span className="f1">
                                                (+62) 878-8325-6166
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fas ic fa-map-marker-alt"></i>
                                        <span className="f1">
                                            Jl. Kyai Tapa No. 1 Grogol Jakarta
                                            Barat
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas ic fa-envelope"></i>
                                        <span className="f1">
                                            apha.sekretariat@gmail.com
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas ic fa-clock"></i>
                                        <span className="f1">
                                            Working Hours : 8:00 a.m - 6:00 p.m
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Menu</h4>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Organisasi</a>
                                    </li>
                                    <li>
                                        <a href="#">Pengurus</a>
                                    </li>
                                    <li>
                                        <a href="#">Publikasi</a>
                                    </li>
                                    <li>
                                        <a href="#">Kegiatan</a>
                                    </li>
                                    <li>
                                        <a href="#">Sekretariat</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Buku</a>
                                    </li>
                                    <li>
                                        <a href="#">Kajian</a>
                                    </li>
                                    <li>
                                        <a href="#">Jurnal </a>
                                    </li>
                                    <li>
                                        <a href="#">Prosiding</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6    col-lg-4 open-hours">
                                <div className="footer-title title-logo">
                                    <img
                                        src="https://penerbit.lshi.or.id/assets/image/logo/Logo-Apha.png"
                                        class="img-fluid img-footer"
                                    />
                                    <ul className="footer-social">
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@asosiasipengajarhukumadati2383"
                                                target="_blank"
                                            >
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://id.linkedin.com/company/apha-indonesia"
                                                target="_blank"
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    Selamat datang di situs resmi Asosiasi
                                    Pengajar Hukum Adat (APHA)
                                </p>
                                <p>
                                    Asosiasi Pengajar Hukum Adat (APHA)
                                    Indonesia dibentuk dalam rangka meningkatkan
                                    dan mengembangkan kapasitas anggota melalui
                                    penyelenggaraan pendidikan, pelatihan,
                                    penelitian, dan pengembangan hukum adat.
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <span href="" className="privacy-police">
                                    © 2023 Asosiasi Pengajar Hukum Adat. All
                                    Rights Reserved{" "}
                                </span>
                            </div>
                            <div className="col-sm-8">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
