import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Trash({ auth, errors, logs }) {
    const { put, delete: destroy } = useForm();

    const handleRestore = (id, title) => {
        if (!confirm(`Pulihkan Release Note "${title}"?`)) {
            return;
        }

        put(route("admin.dashboard.changelog.restore", id), {
            preserveScroll: true,
        });
    };

    const handleForceDelete = (id, title) => {
        if (
            !confirm(
                `Hapus permanen "${title}"? Data tidak dapat dikembalikan.`,
            )
        ) {
            return;
        }

        destroy(route("admin.dashboard.changelog.force-delete", id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800">
                    Trash Release Notes
                </h2>
            }
        >
            <Head title="Trash Release Notes" />

            <div className="container-fluid py-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Release Notes Terhapus</h5>

                        <Link
                            href={route("admin.dashboard.changelog.index")}
                            className="btn btn-secondary btn-sm"
                        >
                            Kembali
                        </Link>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered align-middle">
                                <thead>
                                    <tr>
                                        <th>Version</th>
                                        <th>Title</th>
                                        <th>Dihapus</th>
                                        <th width="220">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {logs.data.length > 0 ? (
                                        logs.data.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.version}</td>

                                                <td>{item.title}</td>

                                                <td>{item.deleted_at}</td>

                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success btn-sm me-1"
                                                        onClick={() =>
                                                            handleRestore(
                                                                item.id,
                                                                item.title,
                                                            )
                                                        }
                                                    >
                                                        Restore
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleForceDelete(
                                                                item.id,
                                                                item.title,
                                                            )
                                                        }
                                                    >
                                                        Hapus Permanen
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center"
                                            >
                                                Trash kosong.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
