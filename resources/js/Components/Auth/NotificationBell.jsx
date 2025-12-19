import { Link, router, usePage } from "@inertiajs/react";

export default function NotificationBell() {
    const { unreadNotifications = [], unreadNotificationCount = 0 } =
        usePage().props;

    return (
        <div className="dropdown">
            <button
                className="btn btn-link position-relative text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="Notifikasi"
            >
                <i className="fas fa-bell fs-5"></i>

                {unreadNotificationCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {unreadNotificationCount}
                    </span>
                )}
            </button>

            <div
                className="dropdown-menu dropdown-menu-end shadow"
                style={{ minWidth: "350px" }}
            >
                <div className="px-3 py-2 border-bottom">
                    <strong>Notifikasi</strong>
                </div>

                {unreadNotifications.length > 0 ? (
                    <>
                        {unreadNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="dropdown-item py-3"
                                role="button"
                                onClick={() => {
                                    router.post(
                                        route(
                                            "admin.dashboard.notifications.read",
                                            notification.id,
                                        ),
                                        {},
                                        {
                                            preserveScroll: true,
                                            onSuccess: () => {
                                                router.visit(
                                                    route(
                                                        "admin.dashboard.changelog.show",
                                                        notification.data
                                                            .release_note_id,
                                                    ),
                                                );
                                            },
                                        },
                                    );
                                }}
                            >
                                <div className="d-flex justify-content-between align-items-start">
                                    <strong>{notification.data.title}</strong>

                                    <span className="badge bg-primary ms-2">
                                        {notification.data.version}
                                    </span>
                                </div>

                                <small className="text-muted">
                                    {new Date(
                                        notification.created_at,
                                    ).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </small>
                            </div>
                        ))}

                        <div className="border-top text-center">
                            <Link
                                href={route("admin.dashboard.changelog.index")}
                                className="dropdown-item text-center py-2"
                            >
                                Lihat Semua Notifikasi
                            </Link>
                        </div>
                        <div className="border-top">
                            <button
                                type="button"
                                className="btn btn-link btn-sm w-100 text-decoration-none"
                                onClick={() => {
                                    router.post(
                                        route(
                                            "admin.dashboard.notifications.readAll",
                                        ),
                                        {},
                                        {
                                            preserveScroll: true,
                                        },
                                    );
                                }}
                            >
                                <i className="fas fa-check-double me-1"></i>
                                Tandai semua sudah dibaca
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-muted py-4">
                        Tidak ada notifikasi.
                    </div>
                )}
            </div>
        </div>
    );
}
