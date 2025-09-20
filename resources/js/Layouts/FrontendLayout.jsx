import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Guest({ children }, props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {/* 🔔 Komponen wajib untuk menampilkan toast */}

            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href={route("frontindex")}>
                        <img
                            src={`/storage/logo/Logo-Apha.gif`}
                            //src="https://penerbit.lshi.or.id/assets/image/logo/Logo-Apha.png"
                            className="img-fluid img-logo"
                        />
                    </Link>
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
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href={route("frontindex")}
                                >
                                    Home
                                </Link>
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
                                        <Link
                                            className="dropdown-item"
                                            href={route(
                                                "frontcommitee.pembina"
                                            )}
                                        >
                                            Dewan Pembina
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route(
                                                "frontcommitee.pengurus"
                                            )}
                                        >
                                            Dewan Pengurus
                                        </Link>
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
                                    Tentang
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route(
                                                "organisasi.badan_hukum"
                                            )}
                                        >
                                            Badan Hukum
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href={route("organisasi.sejarah")}
                                        >
                                            Sejarah dan Perkembangan
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route("organisasi.struktur")}
                                        >
                                            Struktur
                                        </Link>
                                    </li>
                                    {/*
                                    <li>
                                        <Link className="dropdown-item" href="">
                                            Program Kerja
                                        </Link>
                                    </li>
                                    */}
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
                                        <Link
                                            className="dropdown-item"
                                            href={route("frontbuku.index")}
                                        >
                                            Buku
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            target="_blank"
                                            href="https://jial-apha.or.id/"
                                        >
                                            Jurnal
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route("frontprosiding.index")}
                                        >
                                            Prosiding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route("frontnews.index")}
                                        >
                                            Newsletter
                                        </Link>
                                    </li>

                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="https://www.youtube.com/@aphaindonesia"
                                            target="_blank"
                                        >
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*Hideon*/}

                            {/*<li className="nav-item dropdown">
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
                                        <a
                                            className="dropdown-item"
                                            href="/rakornas"
                                        >
                                            Rakornas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/munas"
                                        >
                                            Munas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/musda"
                                        >
                                            Musda
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/pusat"
                                        >
                                            Pusat
                                        </a>
                                    </li>
                                </ul>
                            </li>*/}

                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    aria-current="page"
                                    href={route("frontgaleri.index")}
                                >
                                    Galeri
                                </Link>
                            </li>
                            {/* Document */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    File
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route("frontdokumen.index")}
                                        >
                                            Dokumen
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href={route(
                                                "frontsertifikat.index"
                                            )}
                                        >
                                            Sertifikat
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    aria-current="page"
                                    href={route("frontkeanggotaan.index")}
                                >
                                    Keanggotaan
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    aria-current="page"
                                    href={route("frontcontact.index")}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="w-full hal sm:max-w-md mt-4 px-6 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
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

                                <ul className="footul">
                                    <li>
                                        {/*<a href="tel:(010) 1234 4321"></a>*/}
                                        <i className="fas ic fa-phone"></i>
                                        <span className="f1">
                                            <a href="tel:+6288210092657">
                                                (+62) 878-8325-6166
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas ic fa-map-marker-alt"></i>
                                        <span className="f1">
                                            <a
                                                target="_blank"
                                                href="https://goo.gl/maps/gqQE1wstP2YHe9xM7?coh=178572&entry=tt"
                                            >
                                                Jl. Kyai Tapa No. 1 Grogol
                                                Jakarta Barat
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas ic fa-envelope"></i>
                                        <a href="mailto:apha.sekretariat@gmail.com">
                                            <span className="f1">
                                                apha.sekretariat@gmail.com
                                            </span>
                                        </a>
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
                                        <Link
                                            href={route(
                                                "organisasi.badan_hukum"
                                            )}
                                        >
                                            Organisasi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                        //href={route("pengurus.dewan-penasehat")}
                                        >
                                            Pengurus
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("frontbuku.index")}>
                                            Publikasi
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li>
                                        <Link href={route("frontbuku.index")}>
                                            Buku
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="https://jial-apha.or.id/"
                                            target="_blank"
                                        >
                                            Jurnal{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("frontprosiding.index")}
                                        >
                                            Prosiding
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6    col-lg-4 open-hours">
                                <div className="footer-title title-logo">
                                    <img
                                        src={`/storage/logo/Logo-Apha.gif`}
                                        className="img-fluid img-footer"
                                    />
                                    <ul className="footer-social">
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@aphaindonesia"
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
                                    Indonesia dibentuk dalam usaha Mengembangkan
                                    serta meningkatkan kemampuan anggota agar
                                    berperan menjadi agen pembangunan terdepan
                                    dalam usaha meneliti, mengembangkan dan
                                    menerapkan ilmu pengetahuan hukum dan budaya
                                    bangsa untuk meningkatkan taraf kehidupan
                                    masyarakat.
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
        </div>
    );
}
