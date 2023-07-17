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
    pengurus,
    konfigurasi,
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
                    List Data Pengurus
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Data Pengurus</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route(
                                "admin.dashboard.konfigurasi.pengurus.edit",
                                konfigurasi.slug
                            )}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Setting
                        </Link>
                    </div>
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.commitee.create")}
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
                                <th>Nama</th>
                                <th>Nama Divisi</th>
                                <th>Photo</th>
                                <th>Periode</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pengurus.map((pengurus, index) => (
                                <tr key={pengurus.commitees_id}>
                                    <td>{++index}</td>
                                    <td>{pengurus.nama}</td>
                                    <th>
                                        {pengurus.namadivisi}-
                                        {pengurus.namasubdivisi}-
                                        {pengurus.namajabatan}
                                    </th>
                                    <td>
                                        <img
                                            src={`/storage/${pengurus.img}`}
                                            className="rounded img-thumb img-fluid img-thumbnail"
                                            alt=""
                                        />
                                    </td>
                                    <td>{pengurus.namaperiode}</td>

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.commitee.edit",
                                                pengurus.commitees_id
                                            )}
                                        >
                                            <button className="btn btn-warning my-2">
                                                Edit
                                            </button>
                                        </Link>
                                        <div
                                            onClick={() => {
                                                destroy(
                                                    route(
                                                        "admin.dashboard.commitee.destroy",
                                                        pengurus.commitees_id
                                                    )
                                                );
                                            }}
                                        >
                                            <button className="btn btn-danger my-2">
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
