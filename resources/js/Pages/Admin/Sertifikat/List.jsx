import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import moment from "moment";

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
                                <th>Nama</th>
                                <th>Acara</th>
                                <th>Kategori</th>
                                <th>Status</th>
                                <th>Berlaku</th>
                                <th>Views</th>
                                <th>Publish</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sertifikat.map((document, index) => (
                                <tr key={document.id}>
                                    <td>{++index}</td>
                                    <td>{document.no}</td>
                                    <td>{document.nama}</td>
                                    <td>{document.judul}</td>
                                    <td>{document.category}</td>
                                    <td>
                                        <td>
                                            {document.status == 1 ? (
                                                <span className="badge bg-success">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger">
                                                    Nonaktif
                                                </span>
                                            )}
                                        </td>
                                    </td>
                                    <td>
                                        <td>
                                            {document.expired_date ? (
                                                moment(
                                                    document.expired_date,
                                                ).format("DD/MM/YYYY")
                                            ) : (
                                                <span className="badge bg-info">
                                                    Permanen
                                                </span>
                                            )}
                                        </td>
                                    </td>
                                    <td>
                                        <td>{document.view ?? 0}</td>
                                    </td>
                                    <td>
                                        {moment(document.publish_at).format(
                                            "DD/MM/YYYY",
                                        )}
                                    </td>

                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-2">
                                            <Link
                                                href={route(
                                                    "admin.dashboard.sertifikat.show",
                                                    document.id,
                                                )}
                                                target="_blank"
                                                className="btn btn-sm btn-info"
                                            >
                                                Preview
                                            </Link>
                                            <Link
                                                href={route(
                                                    "admin.dashboard.sertifikat.edit",
                                                    document.id,
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
                                                            document.id,
                                                        ),
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
