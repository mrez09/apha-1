import React, { useMemo, useState, useEffect } from "react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";
import "../../../css/guide.css";
import { usePage } from "@inertiajs/react";
import moment from "moment";

export default function List({
    guides,
    selectedGuide,
    previousGuide,
    nextGuide,
    nextCategoryGuide,
}) {
    const [search, setSearch] = useState("");

    const { auth } = usePage().props;

    //const isAdmin = auth?.user?.roles?.includes("admin");

    const isAdmin = auth?.user?.roles?.some((role) =>
        ["admin", "manager"].includes(role.name),
    );

    useEffect(() => {
        if (selectedGuide) {
            setOpenCategory(selectedGuide.category);
        }
    }, [selectedGuide]);

    const filteredGuides = guides.filter((guide) => {
        const keyword = search.toLowerCase();

        return (
            guide.title.toLowerCase().includes(keyword) ||
            guide.category.toLowerCase().includes(keyword) ||
            guide.description?.toLowerCase().includes(keyword)
        );
    });

    const groupedGuides = useMemo(() => {
        return filteredGuides.reduce((acc, guide) => {
            if (!acc[guide.category]) {
                acc[guide.category] = [];
            }

            acc[guide.category].push(guide);

            return acc;
        }, {});
    }, [filteredGuides]);

    const [openCategory, setOpenCategory] = useState("");

    const getGuideIcon = (guide) => {
        if (guide.icon) return guide.icon;

        switch (guide.category) {
            case "Dashboard":
                return "fa-solid fa-house";

            case "Member":
                return "fa-solid fa-user";

            case "KTA":
                return "fa-solid fa-id-card";

            case "Sertifikat":
                return "fa-solid fa-award";

            case "Event":
                return "fa-solid fa-calendar-days";

            case "News":
                return "fa-solid fa-newspaper";

            case "Buku":
                return "fa-solid fa-book";

            case "Galeri":
                return "fa-solid fa-images";

            case "Committee":
                return "fa-solid fa-users";

            case "FAQ":
                return "fa-solid fa-circle-question";

            default:
                return "fa-solid fa-circle-question";
        }
    };

    const categoryIcons = {
        Dashboard: "fa-solid fa-house",
        Member: "fa-solid fa-user",
        KTA: "fa-solid fa-id-card",
        Sertifikat: "fa-solid fa-award",
        Event: "fa-solid fa-calendar-days",
        News: "fa-solid fa-newspaper",
        Buku: "fa-solid fa-book",
        Galeri: "fa-solid fa-images",
        Committee: "fa-solid fa-users",
        FAQ: "fa-solid fa-circle-question",
    };

    const getReadingTime = (html) => {
        if (!html) return 1;
        const text = html.replace(/<[^>]+>/g, "");
        const words = text.trim().split(/\s+/).length;
        return Math.max(1, Math.ceil(words / 200));
    };

    return (
        <FrontendLayout>
            <Head>
                <title>
                    Help Center Asosiasi Pengajar Hukum Adat (APHA) Indonesia
                </title>
                <meta
                    head-key="Description"
                    name="description"
                    content="Help Center Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Help Center Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
                    content="Help CenterAsosiasi Pengajar Hukum Adat (APHA) Indonesia"
                />
                <meta
                    head-key="Twitter Description"
                    name="twitter:description"
                    content="Help Center Asosiasi Pengajar Hukum Adat (APHA) Indonesia"
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
            <div className="container-fluid py-4 px-lg-5">
                <div className="row g-4">
                    {/* Sidebar */}

                    <div className="col-lg-3">
                        <div className="card help-sidebar shadow-sm">
                            <div className="card-header bg-white border-0">
                                <h5 className="fw-bold mb-0">
                                    <i className="fas fa-book-open me-2 text-warning"></i>
                                    Help Center
                                </h5>
                            </div>

                            <div className="card-body">
                                <div className="p-3">
                                    <input
                                        type="text"
                                        className="form-control  help-search"
                                        placeholder="Cari tutorial..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="help-sidebar-body">
                                    {Object.entries(groupedGuides).map(
                                        ([category, items]) => (
                                            <div key={category}>
                                                <button
                                                    className={`btn w-100 text-start d-flex justify-content-between align-items-center mb-2 ${
                                                        openCategory ===
                                                        category
                                                            ? "btn-apha"
                                                            : "btn-light"
                                                    }`}
                                                    onClick={() =>
                                                        setOpenCategory(
                                                            openCategory ===
                                                                category
                                                                ? ""
                                                                : category,
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <i
                                                            className={`${categoryIcons[category]} me-2 ${
                                                                openCategory ===
                                                                category
                                                                    ? "def-item"
                                                                    : "apha-item"
                                                            }`}
                                                        ></i>

                                                        {category}
                                                    </span>

                                                    <i
                                                        className={`fa-solid ${
                                                            openCategory ===
                                                            category
                                                                ? "fa-chevron-down"
                                                                : "fa-chevron-right"
                                                        }`}
                                                    ></i>
                                                </button>

                                                {openCategory === category &&
                                                    items.map((guide) => (
                                                        <Link
                                                            key={guide.id}
                                                            href={route(
                                                                "fronthelp.show",
                                                                guide.slug,
                                                            )}
                                                            preserveScroll
                                                            className={`help-link ${selectedGuide?.id === guide.id ? "active" : ""}`}
                                                        >
                                                            <i
                                                                className={`${guide.icon} me-2 `}
                                                            ></i>

                                                            {guide.title}
                                                        </Link>
                                                    ))}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}

                    <div className="col-lg-9">
                        {selectedGuide && (
                            <div className="card help-content shadow-sm">
                                <div className="card-body p-4">
                                    {selectedGuide.thumbnail ? (
                                        <img
                                            src={selectedGuide.thumbnail}
                                            className="w-100 rounded object-fit-cover mb-3"
                                            style={{
                                                height: "280px",
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="border rounded d-flex justify-content-center align-items-center bg-light mb-3"
                                            style={{
                                                height: "280px",
                                            }}
                                        >
                                            <i
                                                className={`${getGuideIcon(selectedGuide)} fa-5x text-secondary`}
                                            ></i>
                                        </div>
                                    )}

                                    <h1 className="help-title">
                                        <i
                                            className={`${selectedGuide.icon} fa-1x me-1`}
                                        ></i>
                                        {selectedGuide.title}
                                    </h1>

                                    <hr />
                                    <div className="help-meta">
                                        <span className="me-2">
                                            <i className="fas fa-folder-open me-1"></i>

                                            {selectedGuide.category}
                                        </span>
                                        <span className="me-2">
                                            <i className="fas fa-clock me-1"></i>
                                            {getReadingTime(
                                                selectedGuide.description,
                                            )}{" "}
                                            menit membaca
                                        </span>
                                        {selectedGuide.youtube_url ? (
                                            <span className="me-2">
                                                <i className="fab fa-youtube  me-1"></i>
                                                Video tersedia
                                            </span>
                                        ) : (
                                            <span className="badge ">
                                                <i className="fas fa-file-alt me-1"></i>
                                                Panduan Teks
                                            </span>
                                        )}
                                        {isAdmin && (
                                            <span className="badge ">
                                                <i className="fas fa-eye me-1"></i>
                                                {selectedGuide.view} Views
                                            </span>
                                        )}
                                        {isAdmin && (
                                            <span>
                                                <i className="fas fa-calendar me-1"></i>

                                                {moment(
                                                    selectedGuide.updated_at,
                                                ).format("dddd D MMMM YYYY")}
                                            </span>
                                        )}
                                        <div className="ratio ratio-16x9 help-video">
                                            <iframe
                                                src={selectedGuide.youtube_url.replace(
                                                    "watch?v=",
                                                    "embed/",
                                                )}
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="content">
                                            <div
                                                className="help-description"
                                                dangerouslySetInnerHTML={{
                                                    __html: selectedGuide.description,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            {previousGuide && (
                                                <Link
                                                    href={route(
                                                        "fronthelp.show",
                                                        previousGuide.slug,
                                                    )}
                                                    className="text-decoration-none"
                                                >
                                                    <div className="card help-nav-card h-100 shadow-sm">
                                                        <div className="card-body">
                                                            <small className="text-muted">
                                                                ← Tutorial
                                                                Sebelumnya
                                                            </small>

                                                            <h6 className="mb-0 mt-2">
                                                                {
                                                                    previousGuide.title
                                                                }
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>

                                        <div className="col-6">
                                            {nextGuide && (
                                                <Link
                                                    href={route(
                                                        "fronthelp.show",
                                                        nextGuide.slug,
                                                    )}
                                                    className="text-decoration-none"
                                                >
                                                    <div className="card h-100 text-end">
                                                        <div className="card-body">
                                                            <small className="text-muted">
                                                                Tutorial
                                                                Berikutnya →
                                                            </small>

                                                            <h6 className="mb-0 mt-2">
                                                                {
                                                                    nextGuide.title
                                                                }
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                        {!nextGuide && nextCategoryGuide && (
                                            <div className="mt-3 text-align-center">
                                                <Link
                                                    href={route(
                                                        "fronthelp.show",
                                                        nextCategoryGuide.slug,
                                                    )}
                                                    className="btn btn-apha"
                                                >
                                                    Lanjut ke kategori
                                                    {` ${nextCategoryGuide.category}`}{" "}
                                                    →
                                                </Link>
                                            </div>
                                        )}
                                        {!nextGuide && (
                                            <div className="alert alert-success mt-4">
                                                <h6 className="mb-2">
                                                    Selamat!
                                                </h6>

                                                <p className="mb-0">
                                                    Anda telah menyelesaikan
                                                    semua tutorial pada kategori
                                                    <strong>
                                                        {" "}
                                                        {selectedGuide.category}
                                                    </strong>
                                                    .
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
