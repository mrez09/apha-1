import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function List({ auth, errors }) {
    const { notifications } = usePage().props;

    const handleNotificationClick = (notification) => {
        if (!notification.read_at) {
            router.post(
                route("admin.dashboard.notifications.read", notification.id),
                {},
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        router.visit(
                            route(
                                "admin.dashboard.changelog.show",
                                notification.data.release_note_id,
                            ),
                        );
                    },
                },
            );

            return;
        }

        router.visit(
            route(
                "admin.dashboard.changelog.show",
                notification.data.release_note_id,
            ),
        );
    };

    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Notification" />
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 className="mb-1">Notifikasi</h4>
                        <small className="text-muted">
                            Riwayat pemberitahuan sistem
                        </small>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="list-group list-group-flush">
                        {notifications.data.length > 0 ? (
                            notifications.data.map((notification) => {
                                const unread = !notification.read_at;

                                return (
                                    <button
                                        key={notification.id}
                                        type="button"
                                        className={`list-group-item list-group-item-action text-start ${
                                            unread ? "bg-light" : ""
                                        }`}
                                        onClick={() =>
                                            handleNotificationClick(
                                                notification,
                                            )
                                        }
                                    >
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    {unread && (
                                                        <span
                                                            className="badge bg-danger"
                                                            style={{
                                                                fontSize:
                                                                    "10px",
                                                            }}
                                                        >
                                                            BARU
                                                        </span>
                                                    )}

                                                    <strong>
                                                        {
                                                            notification.data
                                                                .title
                                                        }
                                                    </strong>
                                                </div>

                                                <div className="text-muted small mt-1">
                                                    Versi{" "}
                                                    {notification.data.version}
                                                </div>
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
                                    </button>
                                );
                            })
                        ) : (
                            <div className="text-center text-muted py-5">
                                Tidak ada notifikasi.
                            </div>
                        )}
                    </div>
                </div>

                {/* Pagination */}
                {notifications.links && notifications.links.length > 3 && (
                    <div className="d-flex justify-content-center mt-4">
                        <div className="btn-group">
                            {notifications.links.map((link, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`btn btn-sm ${
                                        link.active
                                            ? "btn-primary"
                                            : "btn-outline-secondary"
                                    }`}
                                    disabled={!link.url}
                                    onClick={() => {
                                        if (link.url) {
                                            router.visit(link.url);
                                        }
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
