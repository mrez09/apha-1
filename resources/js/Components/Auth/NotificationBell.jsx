import { Link, usePage } from "@inertiajs/react";

export default function NotificationBell() {
    const { latestReleaseNotes = [] } = usePage().props;

    return (
        <div className="dropdown">
            <button
                className="btn btn-link position-relative text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="Pembaruan Sistem"
            >
                <i className="fas fa-bell fs-5"></i>

                {latestReleaseNotes.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {latestReleaseNotes.length}
                    </span>
                )}
            </button>

            <div
                className="dropdown-menu dropdown-menu-end shadow"
                style={{ minWidth: "350px" }}
            >
                <div className="px-3 py-2 border-bottom">
                    <strong>Pembaruan Sistem</strong>
                </div>

                {latestReleaseNotes.length > 0 ? (
                    <>
                        {latestReleaseNotes.map((release) => (
                            <Link
                                key={release.id}
                                href={route(
                                    "admin.dashboard.changelog.show",
                                    release.id,
                                )}
                                className="dropdown-item py-3"
                            >
                                <div className="d-flex justify-content-between align-items-start">
                                    <strong>{release.title}</strong>

                                    <span className="badge bg-primary ms-2">
                                        {release.version}
                                    </span>
                                </div>

                                <small className="text-muted">
                                    {new Date(
                                        release.created_at,
                                    ).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </small>
                            </Link>
                        ))}

                        <div className="border-top text-center">
                            <Link
                                href={route("admin.dashboard.changelog.index")}
                                className="dropdown-item text-center py-2"
                            >
                                Lihat Semua Pembaruan
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-muted py-4">
                        Tidak ada pembaruan.
                    </div>
                )}
            </div>
        </div>
    );
}
