import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, log }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Activity Log Detail" />

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header fw-bold">
                        Activity Log Detail
                    </div>

                    <div className="card-body">
                        <p>
                            <strong>Id:</strong>
                            <br />

                            {log.id}
                        </p>
                        <p>
                            <strong>Action:</strong>
                            <br />
                            {log.action}
                        </p>

                        <p>
                            <strong>Description:</strong>
                            <br />
                            {log.description ?? "-"}
                        </p>

                        <hr />

                        <p>
                            <strong>Status:</strong>
                            <br />

                            {log.old_status ?? "-"}
                            {" → "}
                            {log.new_status ?? "-"}
                        </p>

                        <hr />

                        <p>
                            <strong>Pemilik:</strong>
                            <br />

                            {log.user?.name ?? "-"}
                        </p>

                        <p>
                            <strong>Dilakukan Oleh:</strong>
                            <br />

                            {log.performed_by?.name ?? "System"}
                        </p>

                        <hr />

                        <p>
                            <strong>IP Address:</strong>
                            <br />

                            {log.ip_address ?? "-"}
                        </p>

                        <Link
                            href={route("admin.dashboard.activity.index")}
                            className="btn btn-secondary"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
