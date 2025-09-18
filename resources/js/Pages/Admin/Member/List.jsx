import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
import DataTable from "datatables.net-dt";
import { Head, useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function List({ auth, errors, flashMessage, props, member }) {
    const { delete: destroy } = useForm();
    let table = new DataTable("#myTable", {
        //options
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
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    List Data Anggota Asosiasi Pengajar Hukum Adat (APHA)
                </h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            type="button"
                            href={route("admin.dashboard.member.create")}
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
                                <th>No KTA</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Email</th>
                                <th>Universitas</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((member) => (
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.no_kta}</td>
                                    <td>
                                        <img
                                            src={`/storage/${member.img}`}
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

                                    <td>{member.nama}</td>
                                    {(() => {
                                        if (member.status == 0) {
                                            return <td>Tidak Aktif</td>;
                                        } else {
                                            return <td>Aktif</td>;
                                        }
                                    })()}
                                    <td>{member.email}</td>
                                    <td>{member.universitas}</td>

                                    <td>
                                        <Link
                                            href={route(
                                                "admin.dashboard.memberadmin.view",
                                                member.id
                                            )}
                                        >
                                            <button className="btn btn-warning my-2">
                                                View
                                            </button>
                                        </Link>
                                        <Link
                                            href={route(
                                                "admin.dashboard.memberadmin.edit",
                                                member.id
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
                                                        "admin.dashboard.member.destroy",
                                                        member.id
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
