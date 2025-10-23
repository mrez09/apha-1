import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, logs, performedBy }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Activity Logs" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header fw-bold">Activity Logs</div>

                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Waktu</th>
                                    <th>Pemilik</th>
                                    <th>Action</th>
                                    <th>Dilakukan Oleh</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>

                            <tbody>
                                {logs.data.map((log) => (
                                    <tr key={log.id}>
                                        <td>
                                            {new Date(
                                                log.created_at,
                                            ).toLocaleString()}
                                        </td>
                                        <td>{log.user?.name ?? "-"}</td>
                                        <td>{log.action}</td>
                                        <td>
                                            <td>
                                                {log.performed_by?.name ??
                                                    "System"}
                                            </td>
                                        </td>
                                        <td>
                                            <Link
                                                href={route(
                                                    "admin.dashboard.activity.show",
                                                    log.id,
                                                )}
                                                className="btn btn-sm btn-primary"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
