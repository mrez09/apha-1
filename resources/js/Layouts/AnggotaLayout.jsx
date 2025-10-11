import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({ auth, header, children, props }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.message) {
            if (flash.type === "error") toast.error(flash.message);
            else if (flash.type === "success") toast.success(flash.message);
            else toast.info(flash.message);
        }
    }, [flash]);

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

                <div className="navbar-nav d-none d-md-flex">
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
                                        href={route("anggota.dashboard.index")}
                                        active={route().current(
                                            "anggota.dashboard.index",
                                        )}
                                    >
                                        <i className="fas ic fa-home"></i>
                                        Dashboard
                                    </NavLink>
                                </li>

                                {/*end news*/}

                                {/*end Content*/}
                            </ul>

                            {/*Konfirm*/}
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Event</span>
                                <a
                                    className="link-secondary"
                                    href="#"
                                    aria-label="Add a new report"
                                >
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>

                            <ul className="nav flex-column mb-2">
                                {/*Serifikat*/}

                                <li className="nav-item">
                                    <a
                                        className={`nav-link px-3 sidebar-link ${
                                            route().current(
                                                "anggota.dashboard.sertifikat.index",
                                            )
                                                ? "active"
                                                : ""
                                        }`}
                                        href={route(
                                            "anggota.dashboard.sertifikat.index",
                                        )}
                                    >
                                        <i className="fas ic fa-stamp"></i>
                                        Sertifikat
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className={`nav-link px-3 sidebar-link ${
                                            route().current(
                                                "anggota.dashboard.paymentproof.index",
                                            )
                                                ? "active"
                                                : ""
                                        }`}
                                        href={route(
                                            "anggota.dashboard.paymentproof.index",
                                        )}
                                    >
                                        <i class="fas ic fa-credit-card"></i>
                                        Bukti Manual
                                    </a>
                                </li>

                                {/*end Photo*/}
                            </ul>

                            {/*Konfigurasi*/}

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Biodata</span>
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
                                            "anggota.dashboard.profile.index",
                                        )}
                                        active={route().current(
                                            "anggota.dashboard.profile.index",
                                        )}
                                    >
                                        <i className="fas ic fa-file"></i>
                                        Profile
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link px-3 sidebar-link"
                                        href={route(
                                            "anggota.dashboard.institusi.index",
                                        )}
                                        active={route().current(
                                            "anggota.dashboard.institusi.index",
                                        )}
                                    >
                                        <i className="fas ic fa-user-graduate"></i>
                                        Institusi
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link px-3 sidebar-link"
                                        href={route(
                                            "anggota.dashboard.account.index",
                                        )}
                                        active={route().current(
                                            "anggota.dashboard.account.index",
                                        )}
                                    >
                                        <i className="fas ic fa-user"></i>
                                        Informasi Akun
                                    </NavLink>
                                </li>

                                {/*end Photo*/}
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Payment</span>
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
                                    <a data-bs-toggle="collapse" href="#berita">
                                        <i className="fa-solid ic fa-newspaper"></i>
                                        Iuran
                                    </a>
                                    <div className="collapse" id="berita">
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <a
                                                    className={`nav-link px-3 sidebar-link ${
                                                        route().current(
                                                            "anggota.dashboard.member.invoices.index",
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    href={route(
                                                        "anggota.dashboard.member.invoices.index",
                                                    )}
                                                >
                                                    <i className="fas ic fa-list"></i>
                                                    Invoices
                                                </a>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={`nav-link px-3 sidebar-link ${
                                                        route().current(
                                                            "anggota.dashboard.produk.index",
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    href={route(
                                                        "anggota.dashboard.produk.index",
                                                    )}
                                                >
                                                    <i className="fas ic fa-credit-card"></i>
                                                    Bayar Iuran
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <hr className="d-md-none my-3" />

                                <li className="nav-item d-md-none">
                                    <ResponsiveNavLink
                                        className="nav-link px-3 sidebar-link text-danger"
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        <i className="fas fa-right-from-bracket ic"></i>
                                        Logout
                                    </ResponsiveNavLink>
                                </li>

                                {/*end Photo*/}
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                        {flash?.message && (
                            <div
                                className={`alert alert-${
                                    flash.type === "error"
                                        ? "danger"
                                        : "success"
                                } mt-2`}
                                role="alert"
                            >
                                {flash.message}
                            </div>
                        )}
                        {children}
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}
