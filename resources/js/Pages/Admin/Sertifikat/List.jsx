import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function List({
    auth,
    errors,
    flashMessage,
    props,
    sertifikat,
}) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        // options
        destroy: true,
        processing: true,
        serverSide: false,
    });

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.message) {
            if (flash.type === "success") {
                toast.success(flash.message);
            } else {
                toast.error(flash.message);
            }
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List Data Sertifiakt
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Sertifikat</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.sertifikat.create")}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Tambah
                        </Link>
                    </div>
                </div>
            </div>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            {/*End Dashboard Title*/}

            <div className="container">
                <div className="row">
                    <table id="myTable" className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Sertifikat</th>
                                <th>Judul</th>
                                <th>Nama Pemilik</th>
                                <th>File</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sertifikat.map((document, index) => (
                                <tr key={document.id}>
                                    <td>{++index}</td>
                                    <td>{document.no}</td>
                                    <td>{document.judul}</td>
                                    <td>{document.nama}</td>
                                    <td>
                                        <td>
                                            {document.img && document.link ? (
                                                <>
                                                    <a
                                                        href={document.img}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-success me-1 mb-1"
                                                    >
                                                        Download (S1)
                                                    </a>
                                                    <a
                                                        href={document.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        Download (S2)
                                                    </a>
                                                </>
                                            ) : document.img ? (
                                                <a
                                                    href={document.img}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-success"
                                                >
                                                    Download
                                                </a>
                                            ) : document.link ? (
                                                <a
                                                    href={document.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    Download
                                                </a>
                                            ) : null}
                                        </td>
                                    </td>
                                    {(() => {
                                        if (document.status == 1) {
                                            return <td>Aktif</td>;
                                        } else {
                                            return <td>Tidak Aktif</td>;
                                        }
                                    })()}

                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-2">
                                            <Link
                                                href={route(
                                                    "admin.dashboard.sertifikat.edit",
                                                    document.id
                                                )}
                                                className="btn btn-sm btn-warning"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    destroy(
                                                        route(
                                                            "admin.dashboard.sertifikat.destroy",
                                                            document.id
                                                        )
                                                    )
                                                }
                                                className="btn btn-sm btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
