import { Head, Link } from "@inertiajs/react";
import AnggotaLayout from "@/Layouts/AnggotaLayout";

export default function Show({ auth, log }) {
    return (
        <AnggotaLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Pembaruan Sistem
                </h2>
            }
        >
            <Head title={`${log.version} - ${log.title}`} />

            <div className="container-fluid py-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <h1 className="h3 mb-1">{log.title}</h1>

                                <small className="text-muted">
                                    {log.created_at}
                                </small>
                            </div>

                            <span className="badge bg-primary fs-6">
                                {log.version}
                            </span>
                        </div>

                        <hr />

                        <div
                            className="changelog-content"
                            dangerouslySetInnerHTML={{
                                __html: log.description,
                            }}
                        />

                        <hr />

                        <Link
                            href={route("anggota.dashboard.changelog.index")}
                            className="btn btn-secondary"
                        >
                            <i className="fas fa-arrow-left me-1"></i>
                            Kembali
                        </Link>
                    </div>
                </div>
            </div>
        </AnggotaLayout>
    );
}
