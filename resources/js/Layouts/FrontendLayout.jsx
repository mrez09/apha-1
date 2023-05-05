import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }, props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src={`/storage/logo/Logo-Apha.png`}
                            //src="https://penerbit.lshi.or.id/assets/image/logo/Logo-Apha.png"
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
                                    className="nav-link"
                                    aria-current="page"
                                    href="/"
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
                                        <a
                                            className="dropdown-item"
                                            href="/pengurus/dewan-penasehat"
                                        >
                                            Dewan Penasehat
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/pengurus/dewan-pengurus"
                                        >
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
                                    Tentang
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/organisasi/badan-hukum"
                                        >
                                            Badan Hukum
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/organisasi/sejarah"
                                        >
                                            Sejarah dan Perkembangan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/organisasi/struktur"
                                        >
                                            Struktur
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/organisasi/program-kerja"
                                        >
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
                                        <a
                                            className="dropdown-item"
                                            href="/buku"
                                        >
                                            Buku
                                        </a>
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
                                        <a
                                            className="dropdown-item"
                                            href="/prosiding"
                                        >
                                            Prosiding
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/news"
                                        >
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
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    aria-current="page"
                                    href="/galeri"
                                >
                                    Galeri
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    aria-current="page"
                                    href="/contact"
                                >
                                    Contact
                                </a>
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
                                        src={`/storage/logo/Logo-Apha.png`}
                                        className="img-fluid img-footer"
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
        </div>
    );
}
