import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                    href="#"
                >
                    <img
                        src={`/storage/logo/Logo-Apha.gif`}
                        className="img-fluid img-dash"
                    />
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input
                    className="form-control form-control-dark w-100"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <ResponsiveNavLink
                            className="nav-link px-3"
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                    >
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link px-3 sidebar-link"
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        <i className="fas ic fa-home"></i>
                                        Dashboard
                                    </NavLink>
                                </li>
                                {/*Berita*/}
                                <li className="nav-link px-3 sidebar-link">
                                    <a data-bs-toggle="collapse" href="#berita">
                                        <i className="fa-solid ic fa-newspaper"></i>
                                        Berita
                                    </a>
                                    <div className="collapse" id="berita">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.newscategory.index"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    Kategori Berita
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.news.index"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    List Berita
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.errorpage.maintenance"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    List Event
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/*end news*/}

                                {/*Halaman Statis */}
                                <li className="nav-link px-3 sidebar-link">
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#content"
                                    >
                                        <i class="fa-sharp fa-solid ic fa-inbox"></i>
                                        Content
                                    </a>
                                    <div className="collapse" id="content">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.errorpage.maintenance"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    Badan Hukum
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.errorpage.maintenance"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    Sejarah
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.errorpage.maintenance"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    Struktur
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.errorpage.maintenance"
                                                    )}
                                                >
                                                    <i className="fas ic fa-home"></i>
                                                    Halaman Statis
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/*end Content*/}

                                {/*Dokumen */}
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link px-3 sidebar-link"
                                        href={route(
                                            "admin.dashboard.document.index"
                                        )}
                                        active={route().current("dashboard")}
                                    >
                                        <i class="fas ic fa-folder-open"></i>
                                        Dokumen
                                    </NavLink>
                                </li>

                                {/*Pengurus*/}
                                <li className="nav-link px-3 sidebar-link">
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#pengurus"
                                    >
                                        <i className="fas ic fa-person-shelter"></i>
                                        Pengurus
                                    </a>
                                    <div className="collapse" id="pengurus">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.divisi.index"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    Divisi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.subdivisi.index"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    Sub Divisi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.jabatan.index"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    Jabatan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.periode.index"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    Periode
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link px-3 sidebar-link"
                                                    href={route(
                                                        "admin.dashboard.commitee.index"
                                                    )}
                                                >
                                                    <i className="fas ic  fa-calendar-plus"></i>
                                                    Pengurus
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/*end Pengurus*/}
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Publikasi</span>
                                <a
                                    className="link-secondary"
                                    href="#"
                                    aria-label="Add a new report"
                                >
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                {/*Book*/}
                                <li className="nav-link px-3 sidebar-link">
                                    <a data-bs-toggle="collapse" href="#buku">
                                        <i className="fa-solid ic fa-book"></i>
                                        Buku
                                    </a>
                                    <div className="collapse" id="buku">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.buku.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i className="fas ic fa-newspaper"></i>
                                                    List Buku
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/*end news*/}

                                {/*Berita*/}
                                <li className="nav-link px-3 sidebar-link">
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#prosiding"
                                    >
                                        <i className="fa-sharp ic fa-solid fa-paperclip"></i>
                                        Prosiding
                                    </a>
                                    <div className="collapse" id="prosiding">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.prosiding.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i className="fas ic fa-newspaper"></i>
                                                    List Prosiding
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/*end news*/}
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Media</span>
                                <a
                                    className="link-secondary"
                                    href="#"
                                    aria-label="Add a new report"
                                >
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                {/*Photo*/}
                                <li className="nav-link px-3 sidebar-link">
                                    <a data-bs-toggle="collapse" href="#galeri">
                                        <i className="fa-solid ic fa-camera-retro"></i>
                                        Galeri
                                    </a>
                                    <div className="collapse" id="galeri">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.galeri.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i className="fas ic fa-file-image"></i>
                                                    Photo
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.video.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i className="fas ic fa-video"></i>
                                                    Video
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/*end Photo*/}

                                <li className="nav-link px-3 sidebar-link">
                                    <a data-bs-toggle="collapse" href="#banner">
                                        <i class="fa-sharp ic fa-solid fa-image"></i>
                                        Banner Website
                                    </a>
                                    <div className="collapse" id="banner">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.mainbanner.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i class="fa-sharp ic fa-solid fa-image"></i>
                                                    Main Banner
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.banner.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i class="fa-sharp ic fa-solid fa-image"></i>
                                                    Banner
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/*<li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Year-end sale
                                    </a>
                                </li> */}
                            </ul>

                            {/*Konfigurasi*/}
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Tools</span>
                                <a
                                    className="link-secondary"
                                    href="#"
                                    aria-label="Add a new report"
                                >
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                {/*Photo*/}
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link px-3 sidebar-link"
                                        href={route(
                                            "admin.dashboard.contact.index"
                                        )}
                                    >
                                        <i className="fas ic fa-address-book"></i>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-link px-3 sidebar-link">
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#konfigurasi"
                                    >
                                        <i className="fa-solid ic fa-camera-retro"></i>
                                        Konfigurasi
                                    </a>
                                    <div className="collapse" id="konfigurasi">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    href={route(
                                                        "admin.dashboard.konfigurasi.index"
                                                    )}
                                                    className="nav-link px-3"
                                                >
                                                    <i className="fas ic fa-file-image"></i>
                                                    Konfigurasi Website
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/*end Photo*/}
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
