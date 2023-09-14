import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

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
                                        <a href={`/storage/${document.img}`}>
                                            <button
                                                alt={document.judul}
                                                download={document.judul}
                                                className="btn btn-info mx-2"
                                            >
                                                File
                                            </button>
                                        </a>
                                        {(() => {
                                            if (document.link == "") {
                                                return <span>&nbsp;</span>;
                                            } else {
                                                return (
                                                    <a href={document.link}>
                                                        <button className="btn btn-info mx-2">
                                                            Link
                                                        </button>
                                                    </a>
                                                );
                                            }
                                        })()}
                                    </td>
                                    {(() => {
                                        if (document.status == 1) {
                                            return <td>Aktif</td>;
                                        } else {
                                            return <td>Tidak Aktif</td>;
                                        }
                                    })()}

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.document.edit",
                                                document.id
                                            )}
                                        >
                                            <button className="btn btn-warning my-2">
                                                Detail
                                            </button>
                                        </Link>
                                        <span
                                            onClick={() => {
                                                destroy(
                                                    route(
                                                        "admin.dashboard.document.destroy",
                                                        document.id
                                                    )
                                                );
                                            }}
                                        >
                                            <button className="btn btn-danger my-2 mx-2">
                                                Delete
                                            </button>
                                        </span>
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
