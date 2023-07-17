import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({ auth, errors, flashMessage, props, event }) {
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
                <h1 className="h2">List Berita</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.event.create")}
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
                                <th>Image</th>
                                <th>Judul</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {event.map((event, index) => (
                                <tr key={event.link_id}>
                                    <td>{++index}</td>
                                    <td>
                                        <img
                                            src={`/storage/${event.img}`}
                                            //src={'/storage/${newslist.img}'}
                                            //src="'/storage/'${newslist.img}"
                                            //src='" . asset($dirname . $curimg) . "'
                                            //src={
                                            //  "http://127.0.0.1:8000/storage/news/YKsAaWIYa2xsQQmbOS0Ejc5CIJcT7Q6aixQn2JWj.png"
                                            //}
                                            //src={
                                            //  "http://127.0.0.1:8000/storage/${newslit.img}"
                                            //}
                                            //src="{{ asset('storage/'.$newslist->img) }}"

                                            className="rounded img-thumb img-fluid img-thumbnail"
                                            //src="{{ asset('storage/'.$newslist->img) }}"
                                            //src="{{ asset('/storage/'.$newslist->img) }}"
                                            //src="{{ url('storage/'.$news->img) }}"
                                            alt=""
                                        />
                                    </td>
                                    <td>{event.judul}</td>
                                    <td>{event.name}</td>
                                    <td>{event.namakategori}</td>
                                    <td>{event.status}</td>
                                    <td>{event.view}</td>

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.news.edit",
                                                event.id
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
                                                        "admin.dashboard.event.destroy",
                                                        news.id
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
