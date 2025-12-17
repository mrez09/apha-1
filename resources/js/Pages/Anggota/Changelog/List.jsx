import { Head, Link } from "@inertiajs/react";
import AnggotaLayout from "@/Layouts/AnggotaLayout";

export default function List({ auth, logs }) {
    return (
        <AnggotaLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Pembaruan Sistem
                </h2>
            }
        >
            <Head title="Pembaruan Sistem" />

            <div className="container-fluid py-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Pembaruan Sistem</h5>
                    </div>

                    <div className="card-body">
                        {logs.data.length > 0 ? (
                            logs.data.map((item) => (
                                <div
                                    key={item.id}
                                    className="border-bottom py-3"
                                >
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-1">{item.title}</h5>

                                        <span className="badge bg-primary">
                                            {item.version}
                                        </span>
                                    </div>

                                    <small className="text-muted">
                                        {item.created_at}
                                    </small>

                                    <div
                                        className="mt-2"
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />

                                    <Link
                                        href={route(
                                            "anggota.dashboard.changelog.show",
                                            item.id,
                                        )}
                                        className="btn btn-sm btn-outline-primary mt-2"
                                    >
                                        Lihat Selengkapnya
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-4">
                                Belum ada pembaruan sistem.
                            </div>
                        )}
                    </div>
                    {logs.links && logs.links.length > 3 && (
                        <div className="d-flex justify-content-center mt-4">
                            <div className="d-flex gap-1">
                                {logs.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || "#"}
                                        className={`btn btn-sm ${
                                            link.active
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                        } ${!link.url ? "disabled" : ""}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AnggotaLayout>
    );
}
