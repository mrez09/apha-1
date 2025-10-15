import React, { useMemo, useState, useEffect } from "react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link, Head } from "@inertiajs/react";

export default function List({
    guides,
    selectedGuide,
    previousGuide,
    nextGuide,
    nextCategoryGuide,
}) {
    const [search, setSearch] = useState("");

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

    return (
        <FrontendLayout>
            <div className="container py-5">
                <div className="row">
                    {/* Sidebar */}

                    <div className="col-lg-3">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h5 className="mb-0">Help Center</h5>
                            </div>

                            <div className="card-body">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Cari tutorial..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                {Object.entries(groupedGuides).map(
                                    ([category, items]) => (
                                        <div key={category}>
                                            <button
                                                className={`btn w-100 text-start d-flex justify-content-between align-items-center mb-2 ${
                                                    openCategory === category
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
                                                        className={`guide-item ${
                                                            selectedGuide?.id ===
                                                            guide.id
                                                                ? "active-guide"
                                                                : ""
                                                        }`}
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

                    {/* Content */}

                    <div className="col-lg-9">
                        {selectedGuide && (
                            <div className="card shadow-sm">
                                <div className="card-body">
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

                                    <div className="ratio ratio-16x9 mb-4">
                                        <iframe
                                            src={selectedGuide.youtube_url.replace(
                                                "watch?v=",
                                                "embed/",
                                            )}
                                            allowFullScreen
                                        />
                                    </div>

                                    <i
                                        className={`${selectedGuide.icon} fa-5x`}
                                    ></i>
                                    <h3>{selectedGuide.title}</h3>

                                    <hr />

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: selectedGuide.description,
                                        }}
                                    />

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
                                                    <div className="card h-100">
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
