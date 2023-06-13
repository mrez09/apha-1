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
    newscategory,
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
                    List Data Berita
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">List Kategori Berita</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.newscategory.create")}
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
                                <th>Nama Kategori</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newscategory.map((newscategory) => (
                                <tr key={newscategory.id}>
                                    <td>{newscategory.id}</td>
                                    <td>{newscategory.namakategori}</td>

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.newscategory.edit",
                                                newscategory.id
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
                                                        "admin.dashboard.newscategory.destroy",
                                                        newscategory.id
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
